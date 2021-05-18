import nextConnect from 'next-connect'
import nodemailer from "nodemailer"
import axios from 'axios'

const handler = nextConnect()

//handler.use(auth)

handler.post(async (req, res) => {

  // passport.authenticate('local')


  const { email, name, message, captcha, sentTo, subject } = req.body;
  console.log(req.body)
  if (!email || !captcha) {
    return res.status(422).json({ message: "Unproccesable request, please provide the required fields" })
  }

  try {

    const response = await axios({
      method: "POST",
      url: `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_RECAPTCHA_SECRET}&response=${captcha}`,

    });
    const captchaValidation = await response.data
    console.log(captchaValidation)

    if (captchaValidation.success) {
      await sendSupportEmail()
    } else {
      return res.status(422).json({
        message: "Unproccesable request, Invalid captcha code",
      });
    }

  } catch (error) {
    console.log(error);
    return res.status(422).json({ message: "Something went wrong" });
  }

  //;
  async function sendSupportEmail() {
    var smtpTransport = nodemailer.createTransport({
      service: 'SendGrid',
      auth: {
        user: process.env.SENDGRID_API_USER,
        pass: process.env.SENDGRID_API_PASSWORD
      }
    });
    console.log(sentTo)
    var mailOptions = {
      to: req.body.sentTo.toString(),
      from: email,
      subject: subject,

      text:
        `Message From: ` +
        name +
        `\nMessage: ` +
        message
    };
    console.log(mailOptions)
    smtpTransport.sendMail(mailOptions, function (err, json) {
      //console.log(username);
      console.log(err, json);
      if (err) {
        res.status(404).json({ message: "Email didn't send, Please try again" });
      } else {

        res.status(200).json({
          message: 'Your e-mail has been sent.'
        });


      }
    });

  }
})

export default handler