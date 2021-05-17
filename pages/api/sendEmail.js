import nextConnect from 'next-connect'
import nodemailer from "nodemailer"

const handler = nextConnect()

//handler.use(auth)

handler.post((req, res) => {
    console.log("Before passport local")
    // passport.authenticate('local')

    var submitForm = req.body;
    var user = req.user;

    sendSupportEmail();
    function sendSupportEmail(userEmail) {
        var smtpTransport = nodemailer.createTransport({
            service: 'SendGrid',
            auth: {
                user: process.env.NEXT_PUBLIC_SENDGRID_API_USER,
                pass: process.env.NEXT_PUBLIC_SENDGRID_API_PASSWORD
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

    })

export default handler