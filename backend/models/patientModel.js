const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const Patient = sequelize.define("Patient", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_usuario: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  tipo_usuario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  n_documento: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  apellidos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nombres: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha_nacimiento: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  estado_civil: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ocupacion: {
    type: DataTypes.STRING,
    allowNull: true,
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
    type: DataTypes.STRING,
    allowNull: true,
  },
  correo_electronico: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Patient;
