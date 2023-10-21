/* eslint-disable */
import nextConnect from "next-connect";
import auth from "../../middleware/auth";
import _ from "lodash"


import User from "../../models/User";



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


handler
  .use(auth).post(async (req, res) => {

  }).get((req, res) => {

  }).put(async (req, res) => {
    const id = req.user._id
    const user = req.user.profile
    //console.log("ln " + id)
    //console.log(req.body)
    const profile = req.body[0].profile

    //console.log(profile)
    const completed = await updateProfile()
    if (completed) {
      const user = await User.findById({ _id: id }).exec()
      res.status(200).json(user)
    }

    async function updateProfile() {
      for (const property in profile) {
        const item = `profile.${property}`
        const value = profile[property]

        if (
          property == "address"
          || property == "socialMedia") {
          //console.log(`${property}: ${profile[property]}`)
          User.findOneAndUpdate({ _id: id },
            { $set: { [item]: value } }, { upsert: true }, function (err, item) { })
        } else if (property == "certifications") {
          if (profile[property].length === 0 && user.certifications.length > 0) {
            await User.findOneAndUpdate({ _id: id }, { "profile.certifications": [] }, { upsert: true }).exec()
          }
          if (profile[property].length === 0) continue
          //Checks if the user removed a certification and deletes from DB
          if (profile[property].length < user.certifications.length) {
            let certs = profile[property]
            console.log(user.certifications)

            await removeCert()
            async function removeCert() {
              for (const item of user.certifications) {
                if (certs.includes(item.title)) { continue }
                await User.findOneAndUpdate({ _id: id }, { $pull: { "profile.certifications": { _id: item._id } } }, function (err, item) { console.log(item) })

              }
            }
          }
          await addCert()

          async function addCert() {
            for (const item of profile[property]) {
              if (_.find(user.certifications, { title: item })) { continue }

              await User.findOneAndUpdate({ _id: id }, { $push: { "profile.certifications": { title: item } } }, { upsert: true }).exec()
            }
          }
        } else {
          User.findOneAndUpdate({ _id: id },
            { $set: { [item]: value } }, { upsert: true }, function (err, item) { })
        }
      }
      return true
    }
  })
  .delete((req, res) => {

  });

export default handler;