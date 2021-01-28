import mongoose, { connect } from "mongoose";

const connection = {}; /* creating connection oject*/

export async function dbConnect(req, res, next) {

  if (connection.isConnected) {
    console.log(connection);
    return;
  }

  /* connecting to our database */
  const db = await mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    retryWrites: false,
    useUnifiedTopology: true,
  });

  connect.isConnected = db.connections[0].readyState;
  console.log(db.connections[0].readyState);
  return next();
}

