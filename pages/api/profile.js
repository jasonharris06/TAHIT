import nextConnect from "next-connect";
import auth from "../../middleware/auth";
import _ from "lodash"

import User from "../../models/User";

const handler = nextConnect();

handler
  .use(auth)
  .get((req, res) => {

  })
  .put((req, res) => {
    const id = req.user._id
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
          { $set: { [item]: value } }, { upsert: true }, function (err, item) { console.log(item) })
      } else if (property == "certifications") {
        if (profile[property].length === 0) return
        profile[property].forEach(item => {
          User.findOneAndUpdate({ _id: id }, { $push: { "profile.certifications": { title: item } } }, function (err, item) { console.log(item) })
        })
      } else {
        User.findOneAndUpdate({ _id: id },
          { $set: { [item]: value } }, { upsert: true }, function (err, item) { console.log(item) })
      }
    }
    // User.findByIdAndUpdate({ _id: id },
    //   { $set: { profile.firstName } })
  })
  .delete((req, res) => {

  });

export default handler;