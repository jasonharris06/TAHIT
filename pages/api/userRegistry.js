import nextConnect from "next-connect";
import auth from "../../middleware/auth";
import User from "../../models/User";

import { dbConnect } from "../../utils/dbConnect"
const handler = nextConnect();

handler.use(dbConnect).get(async (req, res) => {

  console.log(" ln 10 I ran")
  const registry = []
  const users = await User.find({}).exec()
  var certs = []
  for (var i = 0; users.length > i; i++) {
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
  console.log(registry)
  res.json(registry);

}).put(async (req, res) => {

})
  .delete((req, res) => {

  });

export default handler;