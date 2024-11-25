const express = require("express");
const router = express.Router();
const {
  createPatientGuardian,
  getAllPatientGuardians,
  getPatientGuardianById,
  updatePatientGuardian,
  deletePatientGuardian,
} = require("../controllers/PatientGuardianController");

// Rutas para los acudientes
router.post("/", createPatientGuardian);
router.get("/", getAllPatientGuardians);
router.get("/:id", getPatientGuardianById);
router.put("/:id", updatePatientGuardian);
router.delete("/:id", deletePatientGuardian);

module.exports = router;
