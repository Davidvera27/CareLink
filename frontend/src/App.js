import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import NuevoUsuario from "./components/NuevoUsuario"; // Importar el nuevo componente
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/nuevo-usuario" // Cambiado de "nuevoUsuario" a "nuevo-usuario"
          element={
            <PrivateRoute>
              <NuevoUsuario />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
