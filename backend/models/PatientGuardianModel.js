const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const PatientGuardian = sequelize.define("PatientsGuardian", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    references: {
      model: "Patients",
      key: "id", // <- Clave primaria correcta en la tabla Patients
    },
    allowNull: false,
    onDelete: "CASCADE", // Elimina los registros relacionados si se borra el paciente
  },
  
  parentesco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  n_documento: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  nombres: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellidos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  correo_electronico: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  marcadores: {
    type: DataTypes.JSON,
    allowNull: true,
  },
});

module.exports = PatientGuardian;
