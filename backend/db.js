const { Sequelize } = require("sequelize");
const mongoose = require("mongoose");

// Configuración para PostgreSQL
const sequelize = new Sequelize(
  process.env.PG_DATABASE, // Nombre de la base de datos
  process.env.PG_USER,     // Usuario de la base de datos
  process.env.PG_PASSWORD, // Contraseña
  {
    host: process.env.PG_HOST, // Host de la base de datos
    port: process.env.PG_PORT || 5432, // Puerto (por defecto: 5432)
    dialect: "postgres", // Dialecto para PostgreSQL
    logging: false, // Desactiva los logs de consultas en consola
  }
);

// Configuración para MongoDB
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión a MongoDB exitosa.");
  } catch (error) {
    console.error("Error conectando a MongoDB:", error);
    process.exit(1); // Termina el proceso si MongoDB no puede conectarse
  }
};

// Conexión a PostgreSQL
const connectPostgreSQL = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a PostgreSQL exitosa.");
  } catch (error) {
    console.error("Error conectando a PostgreSQL:", error);
    process.exit(1); // Termina el proceso si PostgreSQL no puede conectarse
  }
};

// Sincronizar el esquema de Sequelize (opcional, úsalo con precaución)
const syncPostgreSQL = async () => {
  try {
    await sequelize.sync({ alter: true }); // Ajusta las tablas según los modelos
    console.log("Esquema de PostgreSQL sincronizado.");
  } catch (error) {
    console.error("Error sincronizando esquema de PostgreSQL:", error);
  }
};

module.exports = { sequelize, connectMongoDB, connectPostgreSQL, syncPostgreSQL };
