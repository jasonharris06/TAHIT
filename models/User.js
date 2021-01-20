import mongoose, { Schema } from 'mongoose'
import { string } from 'prop-types'

const Notifications = {
  email: Boolean,
  text: Boolean
}

const Address = {
  street: { type: String, trim: true },
  street2: { type: String, trim: true },
  city: { type: String, trim: true },
  state: { type: String, trim: true },
  zip: { type: String, trim: true },
  country: { type: String, trim: true },
}

const Certification = {
  title: { type: String, trim: true },
  verified: Boolean,
  expireDate: Date
}

const Social = {
  facebook: { type: String, trim: true },
  linkedIn: { type: String, trim: true },
  twitter: { type: String, trim: true },
  instagram: { type: String, trim: true }
}

const Profile = {
  firstName: { type: String, trim: true },
  lastName: { type: String, trim: true },
  salutations: String,
  phoneNumber: String,
  workNumber: String,
  address: Address,
  language: Array,
  certifications: [Certification],
  employer: { type: String, trim: true },
  jobTitle: { type: String, trim: true },
  almaMater: { type: String, trim: true },
  honorifics: Array,
  socialMedia: Social,
  profilePic: {
    data: Buffer,
    contentType: String
  },
  completed: { type: Boolean, default: false },

}

//User Schema
const UserSchema = new mongoose.Schema(
  {

    email: {
      type: String,
      lowercase: true,
      trim: true,
      required: true
    },
    profile: Profile,
    memberType: { type: String, trim: true },
    password: String,
    tahitPasswordToken: String,
    tahitPasswordExpires: Date,
    acctActive: Boolean,
    paidThrough: Date,
    org: { type: String, trim: true },
    notifications: Notifications,
    PremiumAccount: { type: Boolean, default: false },
    following: Array,
    followers: Array,
    likedThread: Array,
    orgAdmin: Boolean,
    createDate: {
      type: Date,
      default: Date.now,
    },
  }
)

//const User = mongoose.model("User", UserSchema);

export default mongoose.models?.User || mongoose.model("User", UserSchema)