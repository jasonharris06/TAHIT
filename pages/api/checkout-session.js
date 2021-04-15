import nextConnect from 'next-connect'
import auth from '../../middleware/auth'
import Stripe from 'stripe'
import { dbConnect } from '../../utils/dbConnect'

import User from "../../models/User";
import { ContactSupportOutlined } from '@material-ui/icons';


const stripe = Stripe("sk_test_ekaNcygzrDO5HaiufY05xPAw")

const handler = nextConnect()

handler.use(dbConnect).get(async (req, res) => {
  console.log(req.query.id)
  var oneYearFromNow = new Date(new Date().setFullYear(new Date().getFullYear() + 1))

  const session = await stripe.checkout.sessions.retrieve(req.query.id, { expand: ['line_items'] });
  console.log(session.customer_details.email.toLowerCase())
  const exists = await User.exists({ email: session.customer_details.email.toLowerCase() })

  if (!exists && session.payment_status === "paid") {
    createNewUser()

  } else if (exists && session.payment_status === "paid") {

    updateExistingUserMemebership(session)
  }

  //This function creates a new user in the DB after they paid using Stripe
  async function createNewUser() {


    const newUser = await new User({
      email: session.customer_details.email.toLowerCase(),
      stripeCustomerNumber: session.customer,
      subsription: session.mode === "subscription" ? true : false,
      paidThrough: oneYearFromNow,
      profile: {
        salutations: "",
        phoneNumber: '',
        firstName: '',
        lastName: '',
        middleName: "",
        workNumber: "",
        address: {
          street: "",
          street2: "",
          city: "",
          state: "",
          zip: "",
          country: ""
        },
        workCity: "",
        language: [],
        proAffiliations: [],
        certifications: [],
        languagePair: [],
        serviceType: "",
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

    });
    const user = await newUser.save()
      .then((user) => {
        console.log(user);
        // Object.assign(user, update)
        return user
        //req.session.users.push(user);
      })
      .catch((err) => console.log(err));
    console.log(newUser)
    res.json({ session, user })
  }

  //Update existing user with stripe checkout data  **This will only happen in very rare occasions**
  async function updateExistingUserMemebership(session) {

    User.findOneAndUpdate(
      { email: session.customer_details.email.toLowerCase() },
      {
        stripeCustomerNumber: session.customer,
        subsription: session.mode === "subscription" ? true : false,
        paidThrough: oneYearFromNow
      },
      { new: true },
      function (err, user) {
        console.log(user)
        if (err) return res.status(400).send("Network Error.  Please try again later")
        if (user) {
          res.json(session)
        }
      })

  }
  console.log(exists)
  console.log(session)


})

export default handler
