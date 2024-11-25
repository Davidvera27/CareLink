const PatientGuardian = require("../models/PatientGuardianModel");

// Crear un nuevo acudiente
exports.createPatientGuardian = async (req, res) => {
  try {
    const {
      id_usuario,
      parentesco,
      vive,
      n_documento,
      nombres,
      apellidos,
      direccion,
      telefono,
      correo_electronico,
      marcadores,
    } = req.body;

    // Validar campos obligatorios
    if (!id_usuario || !parentesco || typeof vive === "undefined" || !n_documento || !nombres || !apellidos || !direccion) {
      return res.status(400).json({ message: "Faltan campos obligatorios." });
    }

    // Crear el acudiente en la base de datos
    const patientGuardian = await PatientGuardian.create({
      id_usuario,
      parentesco,
      vive,
      n_documento,
      nombres,
      apellidos,
      direccion,
      telefono,
      correo_electronico,
      marcadores,
    });

    res.status(201).json({ message: "Acudiente registrado exitosamente.", patientGuardian });
  } catch (error) {
    console.error("Error al registrar el acudiente:", error);
    res.status(500).json({ message: "Error interno del servidor.", error: error.message });
  }
};

// Obtener todos los acudientes
exports.getAllPatientGuardians = async (req, res) => {
  try {
    const patientGuardians = await PatientGuardian.findAll();
    res.status(200).json(patientGuardians);
  } catch (error) {
    console.error("Error al obtener acudientes:", error);
    res.status(500).json({ message: "Error al obtener acudientes.", error: error.message });
  }
};

// Obtener un acudiente por ID
exports.getPatientGuardianById = async (req, res) => {
  try {
    const patientGuardian = await PatientGuardian.findByPk(req.params.id);
    if (!patientGuardian) {
      return res.status(404).json({ message: "Acudiente no encontrado." });
    }
    res.status(200).json(patientGuardian);
  } catch (error) {
    console.error("Error al obtener acudiente:", error);
    res.status(500).json({ message: "Error al obtener acudiente.", error: error.message });
  }
};

// Actualizar un acudiente existente
exports.updatePatientGuardian = async (req, res) => {
  try {
    const patientGuardian = await PatientGuardian.findByPk(req.params.id);
    if (!patientGuardian) {
      return res.status(404).json({ message: "Acudiente no encontrado." });
    }

    // Actualizar los datos del acudiente
    await patientGuardian.update(req.body);
    res.status(200).json({ message: "Acudiente actualizado correctamente.", patientGuardian });
  } catch (error) {
    console.error("Error al actualizar acudiente:", error);
    res.status(500).json({ message: "Error al actualizar acudiente.", error: error.message });
  }
};

// Eliminar un acudiente
exports.deletePatientGuardian = async (req, res) => {
  try {
    const patientGuardian = await PatientGuardian.findByPk(req.params.id);
    if (!patientGuardian) {
      return res.status(404).json({ message: "Acudiente no encontrado." });
    }

    await patientGuardian.destroy();
    res.status(200).json({ message: "Acudiente eliminado correctamente." });
  } catch (error) {
    console.error("Error al eliminar acudiente:", error);
    res.status(500).json({ message: "Error al eliminar acudiente.", error: error.message });
  }
};
