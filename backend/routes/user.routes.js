const express = require("express");
const {
  createUser,
  loginUser,
  userUpdate,
  uploadPatientReport,
  getPatientReport,
} = require("../controllers/user.controller");
const { verifyToken } = require("../utils/verifyToken");
const userRoutes = express.Router();
const multer = require("multer");
const path = require("path");

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, "../public/reports"));
    },

    filename: function (req, file, cb) {
      const originalname = file.originalname;
      // Remove whitespace characters from the filename and replace them with underscores
      const sanitizedFilename = originalname.replace(/\s+/g, "_");
      cb(null, Date.now() + "_" + sanitizedFilename);
    },
  }),
});

userRoutes.post("/create", createUser);
userRoutes.post("/login", loginUser);
userRoutes.post("/update", verifyToken, userUpdate);
userRoutes.post(
  "/uploadPatientReport",
  upload.single("file"),
  uploadPatientReport
);
userRoutes.get("/getPatientReport/:filename", getPatientReport);

module.exports = userRoutes;
