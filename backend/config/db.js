const mongoose = require("mongoose");

mongoose.connection.on("open", () => {
  console.log("Database connected Successfully");
});

mongoose.connection.on("end", () => {
  console.log("Database disConnected");
});

const url =
  "mongodb://patientDb_user:pwd-PATIENTDB56@localhost:27017/patientdb";
// const url = "mongodb://localhost:27017/patientdb";

const startDatabase = async () => {
  try {
    await mongoose.connect(url);
  } catch (error) {
    console.log(error);
  }
};
module.exports = startDatabase;
