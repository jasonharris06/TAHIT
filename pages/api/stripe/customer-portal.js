import nextConnect from 'next-connect'
import auth from '../../../middleware/auth'
import Stripe from 'stripe'
import { dbConnect } from '../../../utils/dbConnect'

const stripe = Stripe("sk_test_ekaNcygzrDO5HaiufY05xPAw")

const handler = nextConnect()

handler.use(auth).post(async (req, res) => {
    console.log(req.user)

    const session = await stripe.billingPortal.sessions.create({
        customer: req.user.stripeCustomerNumber,
        return_url: 'http://localhost:3000/member/dashboard'

    })
    console.log(session)

    res.status(200).send(session)

})

export default handler
