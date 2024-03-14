const express = require("express");
const {
  createUser,
  loginUser,
  userUpdate,
} = require("../controllers/user.controller");
const { verifyToken } = require("../utils/verifyToken");

const userRoutes = express.Router();

userRoutes.post("/create", createUser);
userRoutes.post("/login", loginUser);
userRoutes.post("/update", verifyToken, userUpdate);

module.exports = userRoutes;
