import mongoose, { Schema } from 'mongoose'


const Address = {
  street: { type: String, trim: true },
  city: { type: String, trim: true },
  state: { type: String, trim: true },
  zip: { type: String, trim: true },
}

//User Schema
const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      required: true
    },
    address: Address,
    password: String,
    timeZone: { type: String, trim: true, lowercase: true },

    tahitPasswordToken: String,
    tahitPasswordExpires: Date,
    phoneNumber: {
      type: String,
    },
    createDate: {
      type: Date,
      default: Date.now,
    },
  }
)

//const User = mongoose.model("User", UserSchema);

export default mongoose.models?.User || mongoose.model("User", UserSchema)