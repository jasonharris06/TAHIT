import nextConnect from 'next-connect'
import nodemailer from "nodemailer"
import axios from 'axios'

const handler = nextConnect()

//handler.use(auth)

handler.post(async (req, res) => {

  // passport.authenticate('local')


  var { email, name, message, captcha } = req.body;
  if (!email || !captcha) {
    return res.status(422).json({ message: "Unproccesable request, please provide the required fields" })
  }

  try {
    console.log("i got to the try")
    const response = await axios({
      method: "POST",
      url: `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_RECAPTCHA_SECRET}&response=${captcha}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      }
    });
    const captchaValidation = await response.data
    console.log(captchaValidation)

    if (captchaValidation.success) {
      sendSupportEmail()
    }
    return res.status(422).json({
      message: "Unproccesable request, Invalid captcha code",
    });
  } catch (error) {
    console.log(error);
    return res.status(422).json({ message: "Something went wrong" });
  }

  //;
  function sendSupportEmail() {
    var smtpTransport = nodemailer.createTransport({
      service: 'SendGrid',
      auth: {
        user: process.env.SENDGRID_API_USER,
        pass: process.env.SENDGRID_API_PASSWORD
      }
    });
    var mailOptions = {
      to: 'tlc@utah.edu',
      from: user.email,
      subject: 'Support Requested from TLC User ' + user.email,

      text:
        "User's Full Name: " +
        submitForm[0].value +
        `\nPreferred Communication: ` +
        submitForm[1].value +
        `\nContact Info: ` +
        submitForm[2].value +
        `\nUser's concern: ` +
        submitForm[3].value
    };

    // smtpTransport.sendMail(mailOptions, function (err, json) {
    //     //console.log(username);
    //     if (err) {
    //         res.status(404);
    //     } else {
    //         req.flash('success_msg', 'Your e-mail has been sent.');
    //         res.send({
    //             success_msg: 'Your e-mail has been sent.'
    //         });
    //         console.log(json);
    //     }
    // });

  }
})

export default handler