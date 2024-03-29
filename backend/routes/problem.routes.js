const express = require("express");
const {
  createProblem,
  getProblem,
} = require("../controllers/problem.controller");
const { verifyToken } = require("../utils/verifyToken");

const problemRoutes = express.Router();

problemRoutes.post("/create", verifyToken, createProblem);
problemRoutes.get("/:id", verifyToken, getProblem);

module.exports = problemRoutes;
