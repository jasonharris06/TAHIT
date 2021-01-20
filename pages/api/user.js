import nextConnect from "next-connect";
import auth from "../../middleware/auth";
import { deleteUser, updateUserByEmail } from "../../lib/db";
import User from "../../models/User";

const handler = nextConnect();

handler
  .use(auth)
  .get((req, res) => {
    // You do not generally want to return the whole user object
    // because it may contain sensitive field such as !!password!! Only return what needed
    //const { _id, email, modules, feelingThermometer, firstName } = req.user
    //console.log(_id, email, modules, feelingThermometer)
    //res.json({ user: { _id, email, modules, feelingThermometer, firstName } });
    res.json({ user: req.user });
  })
  .use((req, res, next) => {
    // handlers after this (PUT, DELETE) all require an authenticated user
    // This middleware to check if user is authenticated before continuing
    if (!req.user) {
      res.status(401).send("unauthenticated");
    } else {
      next();
    }
  })
  .put((req, res) => {
    const { name } = req.body;
    const user = updateUserByEmail(req, req.user.username, { name });
    res.json({ user });
  })
  .delete((req, res) => {
    deleteUser(req);
    req.logOut();
    res.status(204).end();
  });

export default handler;
