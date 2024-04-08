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
const upload = require("../middlewares/simgleFileMulterMiddleware");

userRoutes.post("/create", createUser);
userRoutes.post("/login", loginUser);
userRoutes.post("/update", verifyToken, userUpdate);
userRoutes.post(
  "/uploadPatientReport",
  upload.array("files", 3),
  uploadPatientReport
);
userRoutes.get("/getPatientReport/:filename", getPatientReport);

module.exports = userRoutes;
