import nextConnect from "next-connect";
import auth from "../../middleware/auth";

import User from "../../models/User";

const handler = nextConnect();

handler
  .use(auth)
  .get((req, res) => {

  })
  .put((req, res) => {
    console.log(req.body)
  })
  .delete((req, res) => {

  });

export default handler;