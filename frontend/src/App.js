import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import NuevoUsuario from "./components/NuevoUsuario";
import AgregarAcudiente from "./components/agregarAcudiente"; // Importar el nuevo componente
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta para el Login */}
        <Route path="/" element={<Login />} />

        {/* Ruta para el Tablero de Inicio */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        {/* Ruta para crear un Nuevo Usuario */}
        <Route
          path="/nuevo-usuario"
          element={
            <PrivateRoute>
              <NuevoUsuario />
            </PrivateRoute>
          }
        />

        {/* Ruta para agregar un Acudiente o Familiar */}
        <Route
          path="/nuevo-usuario/agregar-acudiente/:id_patient"
          element={
            <PrivateRoute>
              <AgregarAcudiente />
            </PrivateRoute>
          }
        />

      </Routes>
    </Router>
  );
};

export default App;
