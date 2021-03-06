const expressValidator = require("express-validator");
//const Catagory = require("./../Model/Catagory");

exports.userSignupValidator = (req, res, next) => {
  req.check("name", "Name is required").notEmpty();

  req
    .check("email", "Email must be between 3 to 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage("Email must contain @")
    .isLength({
      min: 4,
      max: 32,
    });
  req.check("password", "Password is required").notEmpty();
  req
    .check("password")
    .isLength({ min: 6 })
    .withMessage("Password must contain at least 6 characters")
    .matches(/\d/)
    .withMessage("Password must contain a number");
  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};

// exports.catagroyValidation = (req, res, next) => {
//   req.check("name", "Name is required").custom((value) => {
//     return Catagory.findOne({ where: { name: value } }).then(() => {
//       return Promise.reject("Name already taken");
//     });
//   });
//   console.log("VAlidation Checking");
//   const error = req.validationErrors();
//   if (error) {
//     const firstError = error.map((errors) => errors.msg)[0];
//     return res.status(400).json({ errors: firstError });
//   }
//   next();
// };
