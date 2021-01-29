import passport from "passport";
import LocalStrategy from "passport-local";
import argon2 from "argon2";
import User from "../models/User";

passport.serializeUser(function (user, done) {
  console.log("I am the serialized " + user.id);
  // serialiEmail into session
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  console.log(id);
  // deserialize the username back into user object
  User.findById(id, (err, user) => {
    done(err, user);

    console.log(err);
  });
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    (req, email, password, done) => {
      console.log("In Passport " + req, email, password);
      // console.log(User.path('profile.profilePic'))
      // Here you lookup the user in your DB and compare the password/hashed password
      User.findOne({
        email: email,
      })
        .then((user) => {
          if (!user.password) {
            return done(null, false, {
              message: "Incorrect Password",
            });
          }
          if (!user) {
            console.log("Passport i got here");
            return done(null, false, {
              message: "Incorrect user name",
            });
          }
          verfiyPW();
          async function verfiyPW() {
            // Security-wise, if you hashed the password earlier, you must verify it

            try {
              if (await argon2.verify(user.password, password)) {
                done(null, user);
              } else {
                done(null, null);
              }
            } catch (err) {
              console.log(err);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  )
);

export default passport;
