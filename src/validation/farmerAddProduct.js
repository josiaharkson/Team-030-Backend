const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateFarmerAddproduct(data) {
  let errors = {};

     data.productName = !isEmpty(data.productName) ? data.productName : "";
     data.productImage = !isEmpty(data.productImage) ? data.productImage : "";
     data.productPrice = !isEmpty(data.productPrice) ? data.productPrice : "";
     data.productDescription = !isEmpty(data.productDescription) ? data.productDescription : "";


  if (Validator.isEmpty(data.productName)) {
    errors.productName = "Your product name field is required";
  }

  if (Validator.isEmpty(data.productImage)) {
    errors.productImage = "product image field is required";
  }

  if (Validator.isEmpty(data.productPrice)) {
    errors.productPrice = "product Price field is required";
  }


  if (Validator.isEmpty(data.productDescription)) {
    errors.productDescription = "product description field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
