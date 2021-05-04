const router = require("express").Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));


let transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});


router.post("/api/contact", (req, res) => {

  let mailOptions = {
    from: `"${req.body.name}" <${req.body.email}>`,
    to: 'benjibob96@gmail.com',
    subject: req.body.subject,
    text: req.body.message
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId)

  });

  setTimeout(() => {
    res.redirect("/");
  }, 5000);


});


module.exports = {
  router
};