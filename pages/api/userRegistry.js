import nextConnect from "next-connect";
import auth from "../../middleware/auth";
import User from "../../models/User";

import { dbConnect } from "../../utils/dbConnect"
const handler = nextConnect();

handler.use(dbConnect).get(async (req, res) => {

  if (req.query.modal === "true") {

    const user = await User.findById({ _id: req.query.id }).exec()

    res.send(user.profile)
  } else {

    console.log(" ln 10 I ran")
    const registry = []
    const interpreterReg = []
    const translatorReg = []
    const users = await User.find({}).exec()
    var certs = []
    for (var i = 0; users.length > i; i++) {
      let user = users[i].profile
      let id = users[i]._id
      switch (user.serviceType) {
        case "translator":
          buildTranslator(user, id)
          break;
        case "interpreter":
          buildInterpreter(user, id)
          break;
        case "both":
          buildInterpreter(user, id)
          buildTranslator(user, id)
          break;
        default:
          break;
      }
      certs = [...users[i].profile.certifications]
      //console.log(certs[0])
      registry.push({
        id: users[i]._id,
        profile: users[i].profile,
        certificate: users[i].profile.certifications[0] ? users[i].profile.certifications[0] : { title: "NONE" },
        subRows: certs.length > 1 ? certs.slice(1).map(item => { return { certificate: item } }) : []

        // firstName: users[i].profile.firstName,
        // lastName: users[i].profile.lastName
      })
    }

    function buildInterpreter(user, id) {
      let certObj = (cert) => cert.verified === true

      if (user.language.length === 0) return
      user.language.forEach(item => {
        interpreterReg.push({
          id,
          firstMiddleName: `${user.firstName} ${user.middleName}`.trimEnd(),
          lastName: `${user.lastName}`.trimEnd(),
          language: item,
          verified: user.certifications.some(certObj) ? "Yes" : "No",
          epicQualified: user.epicQualified ? "Yes" : "No",
          workCity: user.workCity ? user.workCity : "N/A"
        })
      });
    }

    function buildTranslator(user, id) {
      let certObj = (cert) => cert.verified === true
      user.languagePair.forEach(item => {
        translatorReg.push({
          id,
          firstMiddleName: `${user.firstName} ${user.middleName}`.trimEnd(),
          lastName: `${user.lastName}`.trimEnd(),
          languageFrom: item[0],
          languageTo: item[1],
          verified: user.certifications.some(certObj) ? "Yes" : "No",
          workCity: user.workCity ? user.workCity : "N/A"
        })
      });

    }

    res.json([interpreterReg, translatorReg]);
  }

}).put(async (req, res) => {

})
  .delete((req, res) => {

  });

export default handler;