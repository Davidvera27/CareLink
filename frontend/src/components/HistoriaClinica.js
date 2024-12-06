import React from "react";
import GlobalHeader from "./GlobalHeader";
import "../styles/HistoriaClinica.css";
import { Card, Button, Avatar, Row, Col, Input, Select, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const HistoriaClinica = () => {
  return (
    <div className="historia-clinica-page">
      <GlobalHeader />
      <div className="historia-clinica-container">
        {/* Main Patient Card */}
        <Card className="principal-card" bordered>
          <Row align="middle" gutter={16}>
            <Col span={4}>
              <Avatar
                className="avatar"
                size={72}
                src="https://via.placeholder.com/72"
                alt="Avatar"
              />
            </Col>
            <Col span={10}>
              <Title level={5}>JUAN ANTONIO LOPEZ ORREGO</Title>
              <Text>44567890 - Masculino - 1956/11/08 - 68 años</Text>
              <br />
              <Text>Casado - Pensionado</Text>
            </Col>
            <Col span={10}>
              <Text>CLL 45 - 60-20 INT 101</Text>
              <br />
              <Text>315 6789 6789 - juanantonio@gmail.com</Text>
            </Col>
          </Row>
        </Card>

        {/* Emergency Service Card */}
        <Card
          className="servicio-emergencias-card"
          title="Servicio externo para emergencias médicas"
          bordered
        >
          <Row gutter={16}>
            <Col span={8}>
              <label>
                ¿Cuenta con servicio externo para emergencias?
                <Select placeholder="Seleccione" style={{ width: "100%" }}>
                  <Select.Option value="si">Sí</Select.Option>
                  <Select.Option value="no">No</Select.Option>
                </Select>
              </label>
            </Col>
            <Col span={8}>
              <label>
                ¿Cuál?
                <Select placeholder="Seleccione un servicio" style={{ width: "100%" }}>
                  <Select.Option value="emi">EMI</Select.Option>
                  <Select.Option value="colsanitas">Colsanitas</Select.Option>
                  <Select.Option value="medilink">Medilink</Select.Option>
                  <Select.Option value="cruz-roja">Cruz Roja</Select.Option>
                  <Select.Option value="sura">SURA</Select.Option>
                  <Select.Option value="otra">Otro</Select.Option>
                </Select>
              </label>
            </Col>
            <Col span={8}>
              <label>
                Teléfono para servicio emergencia médica
                <Input placeholder="Número de contacto" />
              </label>
            </Col>
          </Row>
        </Card>

        {/* Other Sections */}
        <Card title="Datos básicos de ingreso" bordered>
          <Row gutter={16}>
            <Col span={12}>
              <label>
                Fecha de registro
                <Input type="date" />
              </label>
            </Col>
            <Col span={12}>
              <label>
                Motivo de ingreso
                <Input placeholder="Motivo" />
              </label>
            </Col>
          </Row>
        </Card>

        <Card title="Datos básicos de salud" bordered>
          <Row gutter={16}>
            <Col span={12}>
              <label>
                EPS
                <Input placeholder="EPS" />
              </label>
            </Col>
            <Col span={12}>
              <label>
                Tipo de Sangre
                <Select placeholder="Seleccione" style={{ width: "100%" }}>
                  <Select.Option value="O+">O+</Select.Option>
                  <Select.Option value="O-">O-</Select.Option>
                  <Select.Option value="A+">A+</Select.Option>
                  <Select.Option value="A-">A-</Select.Option>
                  <Select.Option value="B+">B+</Select.Option>
                  <Select.Option value="B-">B-</Select.Option>
                  <Select.Option value="AB+">AB+</Select.Option>
                  <Select.Option value="AB-">AB-</Select.Option>
                </Select>
              </label>
            </Col>
          </Row>
        </Card>

        <Card title="Exploración física inicial" bordered>
          <Row gutter={16}>
            <Col span={8}>
              <label>
                Estatura
                <Input placeholder="cm" />
              </label>
            </Col>
            <Col span={8}>
              <label>
                Peso
                <Input placeholder="kg" />
              </label>
            </Col>
            <Col span={8}>
              <label>
                Presión Arterial
                <Input placeholder="mmHg" />
              </label>
            </Col>
            <Col span={8}>
              <label>
                Frecuencia Cardíaca
                <Input placeholder="bpm" />
              </label>
            </Col>
            <Col span={8}>
              <label>
                Temperatura Corporal
                <Input placeholder="°C" />
              </label>
            </Col>
          </Row>
        </Card>

        <Card
          title="Tratamientos o medicamentos temporales o permanentes"
          bordered
        >
          <Button type="primary" icon={<PlusOutlined />}>
            Agregar Tratamiento
          </Button>
        </Card>

        <Card title="Condiciones especiales permanentes preexistentes de cuidado" bordered>
          <label>
            Detalle de la condición:
            <Input.TextArea placeholder="Escribe las condiciones especiales..." />
          </label>
        </Card>

        <Card title="Esquema de vacunación" bordered>
          <Button type="primary" icon={<PlusOutlined />}>
            Agregar Vacuna
          </Button>
        </Card>

        <Card title="Habilidades biofísicas" bordered>
          <label>
            Tipo de Movilidad:
            <Select placeholder="Seleccione" style={{ width: "100%" }}>
              <Select.Option value="independiente">Independiente</Select.Option>
              <Select.Option value="con-ayuda">Con ayuda</Select.Option>
            </Select>
          </label>
        </Card>

        <Card title="Hábitos o antecedentes toxicológicos" bordered>
          <label>
            Detalle de los hábitos:
            <Input.TextArea placeholder="Ejemplo: Consumo de alcohol o tabaco..." />
          </label>
        </Card>

        <Card title="Habilidades de percepción social" bordered>
          <label>
            Estado de ánimo:
            <Input placeholder="Alegre, Triste, etc." />
          </label>
        </Card>

        <Card title="Diagnóstico inicial" bordered>
          <Input.TextArea placeholder="Describa el diagnóstico inicial..." />
        </Card>

        <Card title="Prueba y Test" bordered>
          <Button type="primary" icon={<PlusOutlined />}>
            Agregar Prueba
          </Button>
        </Card>

        <Card title="Adjuntar Documento" bordered>
          <Input type="file" />
        </Card>
      </div>
    </div>
  );
};

export default HistoriaClinica;
