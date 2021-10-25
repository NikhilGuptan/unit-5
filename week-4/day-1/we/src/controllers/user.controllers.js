const express = require("express")
const User = require("../models/user.model")
const nodemailer = require("nodemailer");
const router = express.Router()

router.post("/" , async (req,res)=>{
    try{
        const user = await User.create(req.body);

        // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "4f939a52651f64", // generated ethereal user
      pass: "c15ee7a16385cc", // generated ethereal password
    },
  });

   // send mail with defined transport object
   let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: user.email, // list of receivers
    subject: `welcome to masai ${first_name} ${last_name}`, // Subject line
    text: `hi ${first_name},Please confirm your email address`, // plain text body
    html: "<b>Hello world?</b>", // html body
  });


        return res.status(200).json({user})
    }catch(err){
        return res.status(400).json({status:"failed",message:err})
    }
})

router.get("/", async (req,res)=>{
    try{
        const page = (+req.query.page) || 1;
        const size = (+req.query.size) || 10;

        const offset = (page-1)*size;

        const user = await User.find().skip(offset).limit(size).lean().exec()
        // const user = await User.find().lean().exec()

        // const totalPages = Math.ceil((await User.find().countDocuments())/size);

        return res.status(200).json({users:user})

    }catch(err){
        return res.status(400).json({status:"failed",message:err.message})
    }
})

module.exports = router;