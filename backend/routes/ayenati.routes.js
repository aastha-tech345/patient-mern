const express = require("express");

const { createData, getData } = require("../controllers/ayenati.controller");
const ayenatiRoute = express.Router();

ayenatiRoute.post("/hl7/message", createData);
ayenatiRoute.get("/ayenatiData", getData);

module.exports = ayenatiRoute;
