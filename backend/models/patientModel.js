const { DataTypes } = require("sequelize");
const { sequelize } = require("../db"); // Importa conexión de PostgreSQL

const Patient = sequelize.define(
  "Patient",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tipo_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    n_documento: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z0-9]+$/, // Solo letras y números
      },
    },
    apellidos: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    nombres: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    genero: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    estado_civil: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ocupacion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fotografia: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING, // Cambiado a STRING para almacenar números telefónicos completos
      allowNull: false,
    },
    correo_electronico: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    tableName: "Patients",
    timestamps: false,
  }
);

module.exports = Patient;
