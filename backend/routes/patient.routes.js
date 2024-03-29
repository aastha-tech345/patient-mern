const express = require("express");
const {
  createPatient,
  searchPatient,
  updatePatient,
  getPatientById,
  getPatient,
  getPatientByDoctor,
  getPatientAppointment,
  getPatientByDoctorCount,
} = require("../controllers/patient.controller");
const { verifyToken } = require("../utils/verifyToken");

const patientRoutes = express.Router();

patientRoutes.post("/create", verifyToken, createPatient);
// patientRoutes.get("/doc/:doc_id", verifyToken,getPatientByDoctor);
patientRoutes.get("/nextAppointmentDate", getPatientAppointment);
patientRoutes.get("/patientByDoctor", verifyToken, getPatientByDoctorCount);
// patientRoutes.get("/:searchKey/:doctor_id", verifyToken,searchPatient);
patientRoutes.get("/:searchKey", verifyToken, searchPatient);
patientRoutes.put("/update/:id", verifyToken, updatePatient);
patientRoutes.get("/", verifyToken, getPatientById);
// patientRoutes.get("/", getPatient);
module.exports = patientRoutes;
