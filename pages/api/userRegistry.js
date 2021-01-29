import nextConnect from "next-connect";
import auth from "../../middleware/auth";
import User from "../../models/User";

import { dbConnect } from "../../utils/dbConnect"
const handler = nextConnect();

handler.get(async (req, res) => {

  console.log(" ln 10 I ran")
  const registry = []
  const users = await User.find({}).exec()

  for (var i = 0; users.length > i; i++) {
    console.log
    registry.push({
      id: users[i]._id,
      profile: users[i].profile
    })
  }
  console.log(registry)
  res.json({ registry }
  );

}).put(async (req, res) => {

})
  .delete((req, res) => {

  });

export default handler;