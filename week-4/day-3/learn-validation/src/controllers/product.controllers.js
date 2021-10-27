const express = require("express")
const { body, validationResult } = require("express-validator")

const Product = require("../models/product.models")

const router = express.Router()

router.post(
    "/",
     body("first_name").isLength({min:3}).withMessage("first name is require"),
     body("last_name").isLength({min:3}).withMessage("Last name is require"),
     body("email").isEmail().withMessage("Email need to be correct"),
     body("pincode").isLength({min:6,max:6}).withMessage("Pincode need to be 6 digit."),
     body("age").isLength({min:1}).withMessage("Age need to be 1 to 100"),
     body("gender").isLength({min:3}).withMessage("Gender Need to be male or female"),
      async (req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(404).json({errors:errors.array()})
    }

    const product = await Product.create(req.body);

    return res.status(201).send(product)

})


module.exports = router;
