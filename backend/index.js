require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectMongoDB, connectPostgreSQL, syncPostgreSQL } = require("./db");
const patientRoutes = require("./routes/patientRoutes");
const authRoutes = require("./routes/authRoutes");
const patientGuardianRoutes = require('./routes/PatientGuardianRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Conexiones a bases de datos
(async () => {
  await connectMongoDB(); // Conexión a MongoDB
  await connectPostgreSQL(); // Conexión a PostgreSQL
  await syncPostgreSQL(); // Sincronizar esquemas en PostgreSQL (opcional)
})();

// Rutas
app.use("/api/auth", authRoutes); // Rutas para autenticación
app.use("/api/patients", patientRoutes); // Rutas para pacientes
app.use("/api/guardians", patientGuardianRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
