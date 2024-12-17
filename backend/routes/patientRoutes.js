const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  getAllPatients,
  createPatient,
  getPatientById,
} = require("../controllers/patientController");

const { getNextPatientId } = require("../controllers/patientController");

// Configurar almacenamiento de Multer
const storage = multer.memoryStorage(); // Opcionalmente puedes usar diskStorage
const upload = multer({ storage: storage });

// Ruta GET: Obtener el próximo ID
router.get("/next-id", getNextPatientId);

// Ruta POST: Crear un nuevo paciente
router.post("/", upload.single("fotografia"), createPatient);

// Ruta para obtener todos los pacientes
router.get("/", getAllPatients);

// Ruta para crear un nuevo paciente
router.post("/", createPatient);

// Ruta para obtener un paciente por ID
router.get("/:id", getPatientById);

module.exports = router;
