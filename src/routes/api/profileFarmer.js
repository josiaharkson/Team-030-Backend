const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Validation
const validateFarmerProfileInput = require("../../validation/farmerProfile");
const validateFarmerAddproduct = require("../../validation/farmerAddProduct");
const validateFarmerExperienceInput = require("../../validation/farmerExperience");
const validateFarmerEducationInput = require("../../validation/farmerEducation");

// Load Profile Farmer Model
const ProfileFarmer = require("../../models/ProfileFarmer");
// Load User Farmer Model
const UserFarmer = require("../../models/UserFarmer");

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Farmer Profile Works" }));

// @route   GET api/profile
// @desc    Get current farmer users profile
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    ProfileFarmer.findOne({ user: req.user.id })
      .populate("user", ["name", "avatar"])
      .then(profile => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route   GET api/profile/all
// @desc    Get all profiles
// @access  Public
router.get("/all", (req, res) => {
  const errors = {};

  ProfileFarmer.find()
    .populate("user", ["name", "avatar"])
    .then(profiles => {
      if (!profiles) {
        errors.noprofile = "There are no profiles";
        return res.status(404).json(errors);
      }

      res.json(profiles);
    })
    .catch(err => res.status(404).json({ profile: "There are no profiles" }));
});

// @route   GET api/profile/username/:username
// @desc    Get profile by username
// @access  Public

router.get("/username/:username", (req, res) => {
  const errors = {};

  ProfileFarmer.findOne({ username: req.params.username })
    .populate("user", ["name", "avatar"])
    .then(profile => {
      if (!profile) {
        errors.noprofile = "There is no farmer profile for this user";
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

// @route   GET api/profile/user/:user_id
// @desc    Get farmer profile by user ID
// @access  Public

router.get("/user/:user_id", (req, res) => {
  const errors = {};

  ProfileFarmer.findOne({ user: req.params.user_id })
    .populate("user", ["name", "avatar"])
    .then(profile => {
      if (!profile) {
        errors.noprofile = "There is no farmer profile for this user";
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err =>
      res.status(404).json({ profile: "There is no farmer profile for this user" })
    );
});

// @route   POST api/profile
// @desc    Create or edit farmer user profile
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateFarmerProfileInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.username) profileFields.username = req.body.username;
    if (req.body.company) profileFields.company = req.body.company;
    if (req.body.farmerWebsite) profileFields.farmerWebsite = req.body.farmerWebsite;
    if (req.body.location) profileFields.location = req.body.location;
    if (req.body.bio) profileFields.bio = req.body.bio;
    if (req.body.gender) profileFields.gender = req.body.gender;

    // Products - Spilt into array
    if (typeof req.body.products !== "undefined") {
      profileFields.products = req.body.products.split(",");
    }

    // Social
    profileFields.social = {};
    if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
    if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

    ProfileFarmer.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        // Update
        ProfileFarmer.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(profile => res.json(profile));
      } else {
        // Create

        // Check if handle exists
        ProfileFarmer.findOne({ username: profileFields.username }).then(profile => {
          if (profile) {
            errors.username = "That username already exists";
            res.status(400).json(errors);
          }

          // Save Farmer Profile
          new ProfileFarmer(profileFields).save().then(profile => res.json(profile));
        });
      }
    });
  }
);

// @route   POST api/profile/addproduct
// @desc    Add Product to profile
// @access  Private
router.post(
  "/addproduct",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateFarmerAddproduct(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    ProfileFarmer.findOne({ user: req.user.id }).then(profile => {
        try {

            const newProduct = {
    
                productName: req.body.productName,
                productImage: req.body.productImage,
                productPrice: req.body. productPrice,
                productDescription: req.body.productDescription
              };
        
              // Add to product array
              profile.addProduct.unshift(newProduct)
        
              profile.save().then(profile => res.json(profile));
            
        } catch (error) {
            console.log('errors' + error)
        }

      
    }
    );
  }
);


// @route   DELETE api/profile/addproduct/:prd_id
// @desc    Delete addproduct from profile
// @access  Private
router.delete(
  "/addproduct/:prd_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    ProfileFarmer.findOne({ user: req.user.id })
      .then(profile => {
        // Get remove index
        const removeIndex = profile.addProduct
          .map(item => item.id)
          .indexOf(req.params.prd_id);

        // Splice out of array
        profile.addProduct.splice(removeIndex, 1);

        // Save
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => res.status(404).json(err));
  }
);



// @route   POST api/profile/experience
// @desc    Add farmers experience to profile
// @access  Private
router.post(
  "/experience",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateFarmerExperienceInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    ProfileFarmer.findOne({ user: req.user.id }).then(profile => {
      const newExp = {
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description
      };

      // Add to farmer experience array
      profile.farmerExperience.unshift(newExp);

      profile.save().then(profile => res.json(profile));
    });
  }
);

// @route   POST api/profile/education
// @desc    Add education to profile
// @access  Private
router.post(
  "/education",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateFarmerEducationInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    ProfileFarmer.findOne({ user: req.user.id }).then(profile => {
      const newEdu = {
        school: req.body.school,
        degree: req.body.degree,
        fieldofstudy: req.body.fieldofstudy,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description
      };

      // Add to exp array
      profile.farmerEducation.unshift(newEdu);

      profile.save().then(profile => res.json(profile));
    });
  }
);

// @route   DELETE api/profile/experience/:exp_id
// @desc    Delete experience from profile
// @access  Private
router.delete(
  "/experience/:exp_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    ProfileFarmer.findOne({ user: req.user.id })
      .then(profile => {
        // Get remove index
        const removeIndex = profile.farmerExperience
          .map(item => item.id)
          .indexOf(req.params.exp_id);

        // Splice out of array
        profile.farmerExperience.splice(removeIndex, 1);

        // Save
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route   DELETE api/profile/education/:edu_id
// @desc    Delete farmer education from profile
// @access  Private
router.delete(
  "/education/:edu_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    ProfileFarmer.findOne({ user: req.user.id })
      .then(profile => {
        // Get remove index
        const removeIndex = profile.farmerEducation
          .map(item => item.id)
          .indexOf(req.params.edu_id);

        // Splice out of array
        profile.farmerEducation.splice(removeIndex, 1);

        // Save
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => res.status(404).json(err));
  }
);


// @route   DELETE api/profile
// @desc    Delete user Farmer and profile
// @access  Private
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    ProfileFarmer.findOneAndRemove({ user: req.user.id }).then(() => {
        UserFarmer.findOneAndRemove({ _id: req.user.id }).then(() =>
        res.json({ success: true })
      );
    });
  }
);

module.exports = router;
