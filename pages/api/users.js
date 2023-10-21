import nextConnect from "next-connect";
import auth from "../../middleware/auth";
import { createUser, findUserByEmail } from "../../lib/db";
import argon2 from "argon2";

const handler = nextConnect();

handler.use(auth).post(async (req, res) => {
  // console.log(req.body)

  const { password, email } = req.body;

  if (!password || !email) {
    return res.status(400).send("Missing fields");
  }
  // Here you check if the username has already been used
  const usernameExisted = await findUserByEmail(req, email);
  console.log("user" + usernameExisted)
  // console.log("ln 21 " + usernameExisted[0].password);
  console.log("i am the user" + usernameExisted)
  if (usernameExisted == false) {
    console.log("ln 22")
    // if (usernameExisted[0].password) return res.status(409).send("Account already exists.  Please go to the login page")
    //return res.status(409).send("The username has already been used");


    // Security-wise, you must hash the password before saving it
    //console.log(password, email)
    const hashedPass = await argon2.hash(password);
    console.log(hashedPass)
    const user = await createUser(req, email, hashedPass, usernameExisted);
    console.log("ln 27 " + user)
    req.logIn(user, (err) => {
      if (err) throw err;
      // Log the signed up user in
      res.status(201).json({
        user,
      });
    });
  } else {
    return res.status(409).send("This email address is associated with an account")
  }
});

export default handler;
