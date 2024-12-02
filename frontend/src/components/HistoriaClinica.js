import React from "react";
import GlobalHeader from "./GlobalHeader";
import "../styles/HistoriaClinica.css";
import { Card, Button, Avatar } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const HistoriaClinica = () => {
  return (
    <div className="historia-clinica-page">
      <GlobalHeader />
      <div className="historia-clinica-container">

        {/* Tarjeta Principal */}
        <Card className="card-legacy" bordered={false}>
          <div className="head">
            <div className="title-wrapper">
            </div>

          </div>
          <div className="body">
            <Avatar
              className="avatar"
              size={140}
              src="https://via.placeholder.com/140"
              alt="Avatar"
            />
            <div className="datos">
              <div className="info-basica">
                <span className="nombre">JUAN ANTONIO LOPEZ ORREGO</span>
                <div className="merge">
                  <span>44567890</span>
                  <span>-</span>
                  <span>Masculino</span>
                  <span>-</span>
                  <span>1956/11/08</span>
                  <span>-</span>
                  <span>68 años</span>
                </div>
                <div className="merge">
                  <span>Casado</span>
                  <span>-</span>
                  <span>Pensionado</span>
                </div>
              </div>
              <div className="info-contacto">
                <span>CLL 45 - 60-20 INT 101</span>
                <div className="merge">
                  <span>315 6789 6789</span>
                  <span>-</span>
                  <span>juanantonio@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

{/* Servicio para Emergencias Médicas */}
<Card className="servicio-emergencias-card" bordered={false}>
  <div className="card-header">
    <h3>Servicio para emergencias médicas</h3>
  </div>
  <div className="card-body">
    <label>
      ¿Cuenta con servicio externo para emergencias?
      <select>
        <option>Sí</option>
        <option>No</option>
      </select>
    </label>
    <label>
      ¿Cuál?
      <select>
        <option value="" disabled selected>
          Seleccione un servicio
        </option>
        <option value="emi">EMI</option>
        <option value="colsanitas">Colsanitas</option>
        <option value="medilink">Medilink</option>
        <option value="cruz-roja">Cruz Roja</option>
        <option value="sura">SURA</option>
        <option value="otra">Otro</option>
      </select>
    </label>
    <label>
      Teléfono del servicio
      <input type="text" placeholder="Número de contacto" />
    </label>
  </div>
</Card>


        {/* Datos Básicos de Ingreso */}
        <Card className="card" bordered={false}>
          <div className="card-header">
            <h3>Datos básicos de ingreso</h3>
          </div>
          <div className="card-body">
            <label>
              Fecha de registro
              <input type="date" />
            </label>
            <label>
              Motivo de ingreso
              <input type="text" placeholder="Motivo" />
            </label>
          </div>
        </Card>

        {/* Datos Básicos de Salud */}
        <Card className="card" bordered={false}>
          <div className="card-header">
            <h3>Datos básicos de salud</h3>
          </div>
          <div className="card-body">
            <label>
              EPS
              <input type="text" placeholder="EPS" />
            </label>
            <label>
              Tipo de Sangre
              <select>
                <option>O+</option>
                <option>O-</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
              </select>
            </label>
          </div>
        </Card>

        {/* Exploración Física Inicial */}
        <Card className="card" bordered={false}>
          <div className="card-header">
            <h3>Exploración física inicial</h3>
          </div>
          <div className="card-body">
            <label>
              Estatura
              <input type="number" placeholder="cm" />
            </label>
            <label>
              Peso
              <input type="number" placeholder="kg" />
            </label>
            <label>
              Presión Arterial
              <input type="text" placeholder="mmHg" />
            </label>
            <label>
              Frecuencia Cardíaca
              <input type="text" placeholder="bpm" />
            </label>
            <label>
              Temperatura Corporal
              <input type="number" placeholder="°C" />
            </label>
          </div>
        </Card>

        {/* Tratamientos o Medicamentos */}
        <Card className="card" bordered={false}>
          <div className="card-header">
            <h3>Tratamientos o medicamentos temporales o permanentes</h3>
          </div>
          <div className="card-body">
            <Button type="primary" icon={<PlusOutlined />}>
              Agregar Tratamiento
            </Button>
            {/* Tabla de Tratamientos */}
          </div>
        </Card>

        {/* Condiciones Especiales Permanentes */}
        <Card className="card" bordered={false}>
          <div className="card-header">
            <h3>Condiciones especiales permanentes preexistentes de cuidado</h3>
          </div>
          <div className="card-body">
            <label>
              Detalle de la condición:
              <textarea placeholder="Escribe las condiciones especiales..." />
            </label>
          </div>
        </Card>

        {/* Esquema de Vacunación */}
        <Card className="card" bordered={false}>
          <div className="card-header">
            <h3>Esquema de vacunación</h3>
          </div>
          <div className="card-body">
            <Button type="primary" icon={<PlusOutlined />}>
              Agregar Vacuna
            </Button>
            {/* Tabla de Vacunación */}
          </div>
        </Card>

        {/* Habilidades Biofísicas */}
        <Card className="card" bordered={false}>
          <div className="card-header">
            <h3>Habilidades biofísicas</h3>
          </div>
          <div className="card-body">
            <label>
              Tipo de Movilidad:
              <select>
                <option>Independiente</option>
                <option>Con ayuda</option>
              </select>
            </label>
          </div>
        </Card>

        {/* Hábitos o Antecedentes Toxicológicos */}
        <Card className="card" bordered={false}>
          <div className="card-header">
            <h3>Hábitos o antecedentes toxicológicos</h3>
          </div>
          <div className="card-body">
            <label>
              Detalle de los hábitos:
              <textarea placeholder="Ejemplo: Consumo de alcohol o tabaco..." />
            </label>
          </div>
        </Card>

        {/* Habilidades de Percepción Social */}
        <Card className="card" bordered={false}>
          <div className="card-header">
            <h3>Habilidades de percepción social</h3>
          </div>
          <div className="card-body">
            <label>
              Estado de ánimo:
              <input type="text" placeholder="Alegre, Triste, etc." />
            </label>
          </div>
        </Card>

        {/* Diagnóstico Inicial */}
        <Card className="card" bordered={false}>
          <div className="card-header">
            <h3>Diagnóstico inicial</h3>
          </div>
          <div className="card-body">
            <textarea placeholder="Describa el diagnóstico inicial..." />
          </div>
        </Card>

        {/* Prueba y Test */}
        <Card className="card" bordered={false}>
          <div className="card-header">
            <h3>Prueba y Test</h3>
          </div>
          <div className="card-body">
            <Button type="primary" icon={<PlusOutlined />}>
              Agregar Prueba
            </Button>
          </div>
        </Card>

        {/* Adjuntar Documento */}
        <Card className="card" bordered={false}>
          <div className="card-header">
            <h3>Adjuntar Documento</h3>
          </div>
          <div className="card-body">
            <input type="file" />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HistoriaClinica;
