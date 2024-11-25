const express = require("express");
const {
  createPatientGuardian,
  getAllPatientGuardians,
  getPatientGuardianById,
  updatePatientGuardian,
  deletePatientGuardian,
} = require("../controllers/PatientGuardianController");

const router = express.Router();

// Rutas para los acudientes (PatientsGuardian)
router.post("/", createPatientGuardian); // Crear nuevo acudiente
router.get("/", getAllPatientGuardians); // Obtener todos los acudientes
router.get("/:id", getPatientGuardianById); // Obtener acudiente por ID
router.put("/:id", updatePatientGuardian); // Actualizar acudiente
router.delete("/:id", deletePatientGuardian); // Eliminar acudiente

module.exports = router;
