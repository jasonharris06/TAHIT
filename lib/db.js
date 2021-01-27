import User from "../models/User";

export function getAllUsers(req) {
  // For demo purpose only. You are not likely to have to return all users.
  return req.session.users;
}

export async function createUser(req, email, hashedPass) {
  // Here you should insert the user into the database

  const { firstName, lastName, phone } = req.body;
  var cleanNumber = "+1" + phone.replace(/(?![0-9])./gim, "");
  const newUser = await new User({
    email: email,
    profile: {
      phoneNumber: cleanNumber,
      firstName: firstName,
      lastName: lastName,
      workNumber: "",
      address: {
        street: "",
        street2: "",
        city: "",
        state: "",
        zip: "",
        country: ""
      },
      language: [],
      certifications: [],
      employer: "",
      jobTitle: "",
      almaMater: "",
      honorifics: "",
      socialMedia: {
        facebook: "",
        linkedIn: "",
        twitter: "",
        instagram: ""
      }

    },
    password: hashedPass,
  });
  console.log("I am the new User" + newUser)
  const user = await newUser.save()
    .then((user) => {
      console.log(user);
      // Object.assign(user, update)
      return user
      //req.session.users.push(user);
    })
    .catch((err) => console.log(err));
  // console.log(user)
  return user
  console.log("in the CreateUser FUnction " + newUser);

  // await db.createUser(user)
  // req.session.users.push(user)
}

export async function findUserByEmail(req, email) {
  // Here you find the user based on id/username in the database
  console.log(email);
  const user = await User.find({ email: email }).exec();
  console.log("I am the user " + user.length);
  console.log(user.length > 0 ? true : false)
  return user.length > 0 ? true : false;
  //return req.session.users.find((user) => user.username === username);
}

export async function updateUserByEmail(req, username, update) {
  // Here you update the user based on id/username in the database
  //const user = await db.updateUserById(id, update);
  const user = req.session.users.find((u) => u.username === username);
  Object.assign(user, update);
  return user;
}

export function deleteUser(req, username) {
  // Here you should delete the user in the database
  // await db.deleteUser(req.user)
  req.session.users = req.session.users.filter(
    (user) => user.username !== req.user.username
  );
}

