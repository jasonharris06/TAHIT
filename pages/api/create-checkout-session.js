import nextConnect from 'next-connect'
import auth from '../../middleware/auth'
import Stripe from 'stripe'

const stripe = Stripe("sk_test_ekaNcygzrDO5HaiufY05xPAw")

const handler = nextConnect()

handler.post(async (req, res) => {
    console.log(stripe.checkout.sessions.create)
    console.log(req.body.price)
    const session = await stripe.checkout.sessions.create({
        success_url: "http://localhost:3000/signup?id={CHECKOUT_SESSION_ID}",
        cancel_url: 'http://localhost:3000',
        payment_method_types: ['card'],
        line_items: [{
            price: req.body.price,
            quantity: 1
        }],
        mode: req.body.mode,
    })
    console.log(session)
    res.json({ id: session.id })

})

export default handler
