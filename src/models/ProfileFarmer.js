const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "usersFarmer"
  },
  username: {
    type: String,
    required: true,
    max: 40
  },
  company: {
    type: String
  },
  farmerWebsite: {
    type: String
  },
  location: {
    type: String
  },
  gender: {
    type: String,
    required: true
  },
  products: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  addProduct: [
    {
      productName: {
        type: String,
        required: true
      },
      productImage: {
        type: String,
        required: true
      },
      productPrice: {
        type: String,
        required: true
      },
      productDescription: {
        type: String,
        required: true
      }
    }
  ],
  farmerExperience: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  farmerEducation: [
    {
      school: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      fieldofstudy: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

var ProfileFarmer = module.exports = mongoose.model("profileFarmer", ProfileSchema);

