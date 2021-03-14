import nextConnect from 'next-connect'
import auth from '../../middleware/auth'
import Stripe from 'stripe'

const stripe = Stripe("sk_test_ekaNcygzrDO5HaiufY05xPAw")

const handler = nextConnect()

handler.get(async (req, res) => {
    console.log(req.query.id)

    const session = await stripe.checkout.sessions.retrieve(req.query.id);


    res.json(session)

})

export default handler
