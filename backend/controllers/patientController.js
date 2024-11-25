const Patient = require("../models/patientModel");

// Crear un nuevo paciente
exports.createPatient = async (req, res) => {
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
      fotografia,
      direccion,
      telefono,
      correo_electronico,
    } = req.body;

    // Validar campos obligatorios
    if (!tipo_usuario || !n_documento || !apellidos || !nombres || !genero || !fecha_nacimiento) {
      return res.status(400).json({ message: "Faltan campos obligatorios." });
    }

    // Generar un id_usuario único
    const id_usuario = `USR-${Date.now()}`;

    // Crear el paciente en la base de datos
    const patient = await Patient.create({
      id_usuario,
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

    res.status(201).json({ message: "Paciente registrado exitosamente.", patient });
  } catch (error) {
    console.error("Error al registrar el paciente:", error);
    res.status(500).json({ message: "Error interno del servidor.", error: error.message });
  }
};

// Obtener todos los pacientes
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    res.status(200).json(patients);
  } catch (error) {
    console.error("Error al obtener pacientes:", error);
    res.status(500).json({ message: "Error al obtener pacientes.", error: error.message });
  }
};

// Obtener un paciente por ID
exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: "Paciente no encontrado." });
    }
    res.status(200).json(patient);
  } catch (error) {
    console.error("Error al obtener paciente:", error);
    res.status(500).json({ message: "Error al obtener paciente.", error: error.message });
  }
};

// Actualizar un paciente existente
exports.updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: "Paciente no encontrado." });
    }

    // Actualizar los datos del paciente
    await patient.update(req.body);
    res.status(200).json({ message: "Paciente actualizado correctamente.", patient });
  } catch (error) {
    console.error("Error al actualizar paciente:", error);
    res.status(500).json({ message: "Error al actualizar paciente.", error: error.message });
  }
};

// Eliminar un paciente
exports.deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: "Paciente no encontrado." });
    }

    await patient.destroy();
    res.status(200).json({ message: "Paciente eliminado correctamente." });
  } catch (error) {
    console.error("Error al eliminar paciente:", error);
    res.status(500).json({ message: "Error al eliminar paciente.", error: error.message });
  }
};
