import nextConnect from "next-connect";
import auth from "../../middleware/auth";
import _ from "lodash"
import formidable from 'formidable'
import sharp from "sharp";
import fs from "fs"
import path from "path";
import multer from "multer";

import User from "../../models/User";


export const config = {
  api: {
    bodyParser: false


  },
}
//let upload = multer({ dest: "upload/" });
const handler = nextConnect();
// const storage = multer.diskStorage({
//   destination: "./public/uploads/",
//   filename: function (req, file, cb) {
//     cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 1000000 },
// }).single("avatar");
let upload = multer({ dest: "upload/" });

handler
  .use(auth).post(upload.single('avatar'), async (req, res) => {
    console.log("i posted")
    const id = req.user._id
    console.log(req.file)
    console.log(process.cwd())
    console.log(path.join(process.cwd(), `./upload/${req.file.filename}`),)
    const buffer = await sharp(
      path.join(process.cwd(), `./upload/${req.file.filename}`),
    ).png().toBuffer();

    const user = await User.findByIdAndUpdate({ _id: id }, { $set: { "profile.profilePic": buffer } })
    console.log(user)


    // var form = new formidable.IncomingForm()
    // form.uploadDir = "./";
    // form.keepExtensions = true;
    // form.parse(req, (err, fields, files) => {
    //   for (const file of Object.entries(files)) {
    //     //       console.log(file)
    //     //       resolve(User.findByIdAndUpdate({ _id: id }, { $set: { "profile.profilePic": file } }, function (err, item) { console.log(item) }))
    //     //     }
    //     console.log(err, fields, file);
    //   }
    // });

    // console.log(form)
    // var videoFile = await new Promise(function (resolve, reject) {
    //   form.parse(req, (err, fields, files) => {
    //     console.log(files)
    //     if (err) {
    //       console.error('Error', err)
    //       reject(err)
    //     }
    //     for (const file of Object.entries(files)) {
    //       console.log(file)
    //       resolve(User.findByIdAndUpdate({ _id: id }, { $set: { "profile.profilePic": file } }, function (err, item) { console.log(item) }))
    //     }
    //   })
    // })
    // if (videoFile) {

    //   return res.status(200).end()
    // }
    // return res.status(404).end()
  })
  .get((req, res) => {

  })
  .put((req, res) => {
    const id = req.user._id
    const user = req.user.profile
    console.log(id)
    const profile = req.body[0].profile
    console.log(profile)
    for (const property in profile) {
      const item = `profile.${property}`
      const value = profile[property]

      if (
        property == "address"
        || property == "socialMedia") {
        console.log(`${property}: ${profile[property]}`)
        User.findOneAndUpdate({ _id: id },
          { $set: { [item]: value } }, { upsert: true }, function (err, item) { })
      } else if (property == "certifications") {
        if (profile[property].length === 0) return

        //Checks if the user removed a certification and deletes from DB
        if (profile[property].length < user.certifications.length) {
          let certs = profile[property]
          user.certifications.forEach(item => {
            if (certs.includes(item.title)) return
            console.log(item)
            User.findOneAndUpdate({ _id: id }, { $pull: { "profile.certifications": { _id: item._id } } }, function (err, item) { console.log(item) })
          })
        }
        profile[property].forEach(item => {
          if (_.find(user.certifications, { title: item })) return
          User.findOneAndUpdate({ _id: id }, { $push: { "profile.certifications": { title: item } } }, function (err, item) { console.log(item) })
        })
      } else {
        User.findOneAndUpdate({ _id: id },
          { $set: { [item]: value } }, { upsert: true }, function (err, item) { })
      }
    }
    // User.findByIdAndUpdate({ _id: id },
    //   { $set: { profile.firstName } })
  })
  .delete((req, res) => {

  });

export default handler;