import mongoose, { Schema } from 'mongoose'


//Thermometer Object
const Thermometer = {
  feeling: String,
  intensity: Number,
  feelingBeforeExercise: String,
  feelingAfterExercise: String,
  intensityBeforeExercise: Number,
  intensityAfterExercise: Number,
  createDate: {
    type: Date,
    default: Date.now,
  },
}

//Modules Object
const Modules = {
  title: { type: String, trim: true },
  week: Number,
  moduleNumber: Number,
  started: Date,
  completedDate: {
    type: Date,
    default: Date.now,
  },
  completedByPatient: Boolean,
  completedByTherapist: Boolean,
  covidModule: Boolean,
  thermometer: [Thermometer]

}
// homework object 
const Homework = {
  title: { type: String, trim: true },
  week: Number,
  completedByTherapist: Boolean,
  completedByPatient: Boolean,
  completeDate: Date
}

//Meeting Object
const Meeting = {
  startTime: Date,
  endTime: Date,
  link: { type: String, trim: true },
  patientName: { type: String, trim: true },
  patientID: { type: String, trim: true },
  therapistID: { type: String, trim: true },
  meetingNotes: { type: String, trim: true },
  reminderSentSms: { type: Boolean, default: false },
  reminderSentEmail: { type: Boolean, default: false },
  patientMissed: { type: Boolean, default: false },
  rescheduled: { type: Boolean, default: false },
  createDate: {
    type: Date,
    default: Date.now,
  },
}

//Background Color Object
const BackgroundColor = {
  purple: Boolean,
  orange: Boolean,
  red: Boolean,
  blue: Boolean,
  aqua: Boolean
}
//Patient info to their Therapist
const PatientTherapist = {
  therapistId: Number,
  therapistName: String,
  therapistPhone: String,
  therapistEmail: String
}

const Messages = {
  message: { type: String, trim: true },
  senderId: String,
  receiverId: String,
  senderName: String,
  receiverName: String,
  patientSent: Boolean,
  createDate: {
    type: Date,
    default: Date.now,
  },
}

const Video = {
  videoTitle: { type: String, trim: true },
  azureTitle: { type: String, trim: true },
  selfTitle: { type: String, trim: true },
  createDate: {
    type: Date,
    default: Date.now,
  },
}

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
    redCapID: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    phoneNumber: {
      type: String,
    },
    covidUser: Boolean,
    activeUser: Boolean,
    therapist: Boolean,
    patient: Boolean,
    patientWeek: Number,
    modulesCompleted: Number,
    patientTherapist: PatientTherapist,
    messages: [Messages],
    appointment: [Meeting],
    patientList: [],
    therapistSessions: [],
    patientCpss: [],
    modules: [Modules],
    feelingThermometer: [Thermometer],
    videoDiaries: [Video],
    homework: [Homework],
    theme: BackgroundColor,
    createDate: {
      type: Date,
      default: Date.now,
    },
  }
)

//const User = mongoose.model("User", UserSchema);

export default mongoose.models?.User || mongoose.model("User", UserSchema)