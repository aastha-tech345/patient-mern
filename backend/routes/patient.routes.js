const express = require("express");
const {
  createPatient,
  searchPatient,
  updatePatient,
  getPatientById,
  getPatient,
  getPatientByDoctor,
} = require("../controllers/patient.controller");
const { verifyToken } = require("../utils/verifyToken");

const patientRoutes = express.Router();

patientRoutes.post("/create", verifyToken,createPatient);
patientRoutes.get("/doc/:doc_id", verifyToken,getPatientByDoctor);
patientRoutes.get("/:searchKey/:doctor_id", verifyToken,searchPatient);
patientRoutes.put("/update/:id", verifyToken,updatePatient);
patientRoutes.get("/:id", verifyToken,getPatientById);
// patientRoutes.get("/", getPatient);
module.exports = patientRoutes;
