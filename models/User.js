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
  verified: { type: Boolean, default: false },
  expireDate: {
    type: Date,
    default: () => new Date(+new Date() + 157788000000)
  },
}
const Preferences = {
  email: { type: Boolean, default: false },
  text: { type: Boolean, default: false }

}

const Social = {
  facebook: String,
  linkedIn: { type: String, trim: true },
  twitter: { type: String, trim: true },
  instagram: { type: String, trim: true }
}

const Profile = {
  firstName: { type: String, trim: true },
  lastName: { type: String, trim: true },
  middleName: { type: String, trim: true },
  serviceType: { type: String, trim: true },
  salutations: { type: String, trim: true },
  phoneNumber: { type: String, trim: true },
  workNumber: { type: String, trim: true },
  address: Address,
  workCity: { type: String, trim: true },
  language: Array,
  proAffiliations: Array,
  languagePair: Array,
  certifications: [Certification],
  serviceType: { type: String, trim: true },
  employer: { type: String, trim: true },
  jobTitle: { type: String, trim: true },
  almaMater: { type: String, trim: true },
  honorifics: { type: String, trim: true },
  epiqQualified: { type: Boolean, default: false },
  contactPreferences: Preferences,
  socialMedia: Social,
  profilePic: {
    data: Buffer,
    contentType: String
  },
  completed: { type: Boolean, default: false },

}

const Org = {
  name: { type: String, trim: true },
  admin: { type: Boolean, default: false },

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
    stripeCustomerNumber: { type: String, trim: true },
    password: String,
    tahitPasswordToken: String,
    tahitPasswordExpires: Date,
    acctActive: Boolean,
    paidThrough: Date,
    subscription: { type: Boolean, default: false },
    org: { Org },
    notifications: Notifications,
    PremiumAccount: { type: Boolean, default: false },
    following: Array,
    followers: Array,
    likedThread: Array,

    createDate: {
      type: Date,
      default: Date.now,
    },
  }
)

//const User = mongoose.model("User", UserSchema);

export default mongoose.models?.User || mongoose.model("User", UserSchema)