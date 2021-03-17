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

  const session = await stripe.checkout.sessions.retrieve(req.query.id, { expand: ['line_items'] });
  console.log(session.customer_details.email.toLowerCase())
  const exists = await User.exists({ email: session.customer_details.email.toLowerCase() })
  if (!exists && session.payment_status === "paid") {
    var oneYearFromNow = new Date(new Date().setFullYear(new Date().getFullYear() + 1))

    const newUser = await new User({
      email: session.customer_details.email.toLowerCase(),
      stripeCustomerNumber: session.customer,
      subsription: session.mode === "subscription" ? true : false,
      paidThrough: oneYearFromNow,
      profile: {
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
  } else {
    res.json(session)
  }
  console.log(exists)
  console.log(session)


})

export default handler
