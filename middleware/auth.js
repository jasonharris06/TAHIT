import nextConnect from 'next-connect'
import { use } from 'passport'
import passport from '../lib/passport'
import session from '../lib/session'
import { dbConnect, createBlob } from '../utils/dbConnect'

const auth = nextConnect().use(dbConnect)
  .use(
    session({
      name: 'reset_session',
      secret: 'some_not_random_password_that_is_at_least_32_characters', // This should be kept securely, preferably in env vars
      cookie: {
        maxAge: 60 * 60 * 8, // 8 hours,
        httpOnly: true,
        //secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax',
      },
    })
  ).use(passport.initialize())
  .use(passport.session())

export default auth
