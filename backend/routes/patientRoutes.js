const express = require("express");
const {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} = require("../controllers/patientController");

const router = express.Router();

router.post("/", createPatient); // Crear nuevo paciente
router.get("/", getAllPatients); // Obtener todos los pacientes
router.get("/:id", getPatientById); // Obtener paciente por ID
router.put("/:id", updatePatient); // Actualizar paciente
router.delete("/:id", deletePatient); // Eliminar paciente


module.exports = router;
