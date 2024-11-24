import React from "react";
import GlobalHeader from "./GlobalHeader";
import NavMenu from "./navMenu"; // Import the modularized navigation menu
import "../styles/Home.css";

const HorizontalStatsBlock = () => {
  return (
    <div className="horizontal-stats-block">
      <div className="stat-item">
        <div className="stat-header">
          <span>Usuarios del mes</span>
        </div>
        <div className="stat-body">
          <h3 className="stat-value">100</h3>
          <span className="stat-trend">17.1</span>
        </div>
        <div className="stat-chart">{/* Placeholder for charts */}</div>
      </div>
      <div className="stat-item">
        <div className="stat-header">
          <span>Tasa de asistencia</span>
        </div>
        <div className="stat-body">
          <h3 className="stat-value">90%</h3>
          <span className="stat-trend">26.2</span>
        </div>
        <div className="stat-chart">{/* Placeholder for charts */}</div>
      </div>
    </div>
  );
};

const ScheduledActivities = () => {
  return (
    <div className="card-legacy scheduled-activities">
      <div className="card-header">
        <h5 className="card-title">Actividades programadas</h5>
      </div>
      <div className="card-body">
        <div className="table">
          <div className="table-row header">
            <div className="table-cell">Actividad</div>
            <div className="table-cell">Fecha</div>
            <div className="table-cell actions-header">Acciones</div>
          </div>
          {["Juego de Ping Pong", "Clase de Yoga", "Taller de Arte"].map(
            (activity, index) => (
              <div className="table-row" key={index}>
                <div className="table-cell">{activity}</div>
                <div className="table-cell">Dentro de 7 días</div>
                <div className="table-cell actions">
                  <span className="action-link">Editar</span>
                  <span className="divider">|</span>
                  <span className="action-link">Ver</span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home-page">
      <GlobalHeader />
      <div className="home-container">
        <NavMenu />
        <div className="content">
          <div className="card-legacy">
            <div className="card-header">
              <h5 className="card-title">Control de asistencia del día</h5>
              <button className="add-button">Agregar</button>
            </div>
            <div className="card-body">
              <div className="table">
                <div className="table-row header">
                  <div className="table-cell checkbox-header">
                    <input type="checkbox" />
                  </div>
                  <div className="table-cell">Usuario</div>
                  <div className="table-cell">Tipo servicio</div>
                  <div className="table-cell">Estado</div>
                  <div className="table-cell actions-header">Acciones</div>
                </div>
                <div className="table-row">
                  <div className="table-cell">
                    <input type="checkbox" />
                  </div>
                  <div className="table-cell">Sara Manuela Gómez</div>
                  <div className="table-cell">Centro día</div>
                  <div className="table-cell">
                    <span className="badge green">Asistió</span>
                  </div>
                  <div className="table-cell actions">
                    <span className="action-link">Ver</span>
                    <span className="divider">|</span>
                    <span className="action-link">Marcar asistencia</span>
                  </div>
                </div>
                <div className="table-row">
                  <div className="table-cell">
                    <input type="checkbox" />
                  </div>
                  <div className="table-cell">Juan Pablo Ruiz</div>
                  <div className="table-cell">Centro día</div>
                  <div className="table-cell">
                    <span className="badge gray">Pendiente</span>
                  </div>
                  <div className="table-cell actions">
                    <span className="action-link">Ver</span>
                    <span className="divider">|</span>
                    <span className="action-link">Marcar asistencia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-row">
            <div className="card-legacy">
              <div className="card-header">
                <h5 className="card-title">Flujo de usuarios</h5>
              </div>
              <div className="card-body">
                <HorizontalStatsBlock />
                <div className="table">
                  <div className="table-row header">
                    <div className="table-cell">Usuarios</div>
                    <div className="table-cell">Contratos</div>
                    <div className="table-cell">Visitas del mes</div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell">Nombre usuario</div>
                    <div className="table-cell">Ver</div>
                    <div className="table-cell">5</div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell">Nombre usuario</div>
                    <div className="table-cell">Ver</div>
                    <div className="table-cell">10</div>
                  </div>
                </div>
              </div>
            </div>
            <ScheduledActivities />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
