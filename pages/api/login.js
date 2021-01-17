import nextConnect from 'next-connect'
import auth from '../../middleware/auth'
import passport from '../../lib/passport'

const handler = nextConnect()

//handler.use(auth)

handler.use(auth).post(passport.authenticate('local'), (req, res) => {
  console.log("Before passport local")
  // passport.authenticate('local')
  res.json({ user: req.user })
})

export default handler
