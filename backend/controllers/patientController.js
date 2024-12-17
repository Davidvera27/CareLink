const Patient = require("../models/patientModel");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

// Configura Multer para almacenar archivos en "frontend/src/assets/Pacientes"
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, "../../frontend/src/assets/Pacientes");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Obtener todos los pacientes
const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener pacientes.", error });
  }
};

// Crear un nuevo paciente
const createPatient = async (req, res) => {
  try {
    const {
      tipo_usuario,
      n_documento,
      apellidos,
      nombres,
      genero,
      fecha_nacimiento,
      estado_civil,
      ocupacion,
      direccion,
      telefono,
      correo_electronico,
    } = req.body;

    const fotografia = req.file ? req.file.filename : null;

    const newPatient = await Patient.create({
      tipo_usuario,
      n_documento,
      apellidos,
      nombres,
      genero,
      fecha_nacimiento,
      estado_civil,
      ocupacion,
      fotografia,
      direccion,
      telefono,
      correo_electronico,
    });

    return res.status(201).json({ message: "Paciente creado exitosamente", data: newPatient });
  } catch (error) {
    console.error("Error al crear paciente:", error);
    return res.status(500).json({ message: "Error al crear el paciente", error: error.message });
  }
};

// Obtener paciente por ID
const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) return res.status(404).json({ message: "Paciente no encontrado." });
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener paciente.", error });
  }
};

// Obtener el próximo ID de usuario
const getNextPatientId = async (req, res) => {
  try {
    const lastPatient = await Patient.findOne({ order: [["id", "DESC"]] });
    let nextId = "PCT-01";
    if (lastPatient) {
      const lastIdNumber = parseInt(lastPatient.id, 10);
      nextId = `PCT-${(lastIdNumber + 1).toString().padStart(2, "0")}`;
    }
    res.status(200).json({ nextId });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el próximo ID.", error });
  }
};

module.exports = {
  upload,
  getAllPatients,
  createPatient,
  getPatientById,
  getNextPatientId,
};