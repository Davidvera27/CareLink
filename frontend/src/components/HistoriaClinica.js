import React from "react";
import GlobalHeader from "./GlobalHeader"; // Importa el componente de encabezado global.
import "../styles/HistoriaClinica.css"; // Importa los estilos específicos para esta página.
import { Card, Button, Avatar, Row, Col, Input, Select, Typography, Table, Checkbox, Space, Divider, Form } from "antd"; // Importa componentes de Ant Design.
import { PlusOutlined } from "@ant-design/icons"; // Importa el ícono "PlusOutlined" de Ant Design.

const { Title, Text } = Typography; // Desestructuración para usar componentes tipográficos de Ant Design.

const HistoriaClinica = () => {
  return (
    <div className="historia-clinica-page">
      {/* Encabezado global */}
      <GlobalHeader />
      
      {/* Contenedor principal de la página */}
      <div className="historia-clinica-container">

        {/* Tarjeta principal de información del paciente */}
        <Card className="principal-card" bordered>
          <Row align="middle" gutter={16}>
            {/* Columna para el avatar del paciente */}
            <Col span={4}>
              <Avatar
                className="avatar"
                size={72}
                src="https://via.placeholder.com/72" // URL de ejemplo para el avatar - puede cambiarse por una ruta del disco local.
                alt="Avatar"
              />
            </Col>

            {/* Columna con la información personal del paciente */}
            <Col span={10}>
              <Title level={5}>JUAN ANTONIO LOPEZ ORREGO</Title> {/* Nombre del paciente */}
              <Text>44567890 - Masculino - 1956/11/08 - 68 años</Text> {/* Identificación y detalles */}
              <br />
              <Text>Casado - Pensionado</Text> {/* Estado civil */}
            </Col>

            {/* Columna con la información de contacto del paciente */}
            <Col span={10}>
              <Text>CLL 45 - 60-20 INT 101</Text> {/* Dirección */}
              <br />
              <Text>315 6789 6789 - juanantonio@gmail.com</Text> {/* Teléfono y correo */}
            </Col>
          </Row>
        </Card>

        {/* Tarjeta para servicios de emergencias médicas */}
        <Card
          className="servicio-emergencias-card"
          title="Servicio externo para emergencias médicas"
          bordered
        >
          <Row gutter={16}>
            {/* Campo: ¿Cuenta con servicio externo? */}
            <Col span={8}>
              <label>
                ¿Cuenta con servicio externo para emergencias?
                <Select placeholder="Seleccione" style={{ width: "100%" }}>
                  <Select.Option value="si">Sí</Select.Option>
                  <Select.Option value="no">No</Select.Option>
                </Select>
              </label>
            </Col>

            {/* Campo: ¿Cuál? */}
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

            {/* Campo: Teléfono para emergencias */}
            <Col span={8}>
              <label>
                Teléfono para servicio emergencia médica
                <Input placeholder="Número de contacto" />
              </label>
            </Col>
          </Row>
        </Card>

        {/* Tarjeta de datos básicos de ingreso */}
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

        {/* Tarjeta de datos básicos de salud */}
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

        {/* Exploración física inicial */}
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

        {/* Tratamientos o medicamentos temporales o permanentes */}
        <Card
          className="tratamientos-card"
          title={<Title level={4}>Tratamientos o medicamentos temporales o permanentes que requieren apoyo</Title>}
          bordered
        >
          {/* Checkboxes */}
          <div>
            <Title level={5} className="checkbox-title">Tratamientos o medicamentos</Title>
            <Checkbox.Group style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
              <Checkbox value="farmaco" defaultChecked>
                Régimen farmacoterapéutico
              </Checkbox>
              <Checkbox value="enfermeria" defaultChecked>
                Plan de cuidados de enfermería
              </Checkbox>
              <Checkbox value="fisioterapia" defaultChecked>
                Intervención fisioterapéutica
              </Checkbox>
            </Checkbox.Group>
          </div>

          {/* Régimen Farmacoterapéutico */}
          <div>
            <div className="table-header">
              <Title level={5}>Régimen farmacoterapéutico</Title>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                className="add-button"
              >
                Agregar
              </Button>
            </div>
            <Table
              columns={[
                { title: "Fecha de inicio", dataIndex: "startDate", key: "startDate" },
                { title: "Medicamento", dataIndex: "medicine", key: "medicine" },
                { title: "Dosis", dataIndex: "dose", key: "dose" },
                {
                  title: "Vía de administración",
                  dataIndex: "administration",
                  key: "administration",
                },
                { title: "Frecuencia", dataIndex: "frequency", key: "frequency" },
                { title: "Duración", dataIndex: "duration", key: "duration" },
                { title: "Indicaciones", dataIndex: "instructions", key: "instructions" },
                {
                  title: "Acciones",
                  key: "actions",
                  render: (_, record) => (
                    <Space>
                      <Button type="link" style={{ color: "#1890ff" }}>
                        Desactivar
                      </Button>
                      <Button type="link" danger>
                        Eliminar
                      </Button>
                    </Space>
                  ),
                },
              ]}
              dataSource={[
                {
                  key: "1",
                  startDate: "10/09/2024",
                  medicine: "Enalapril",
                  dose: "5 mg",
                  administration: "Oral",
                  frequency: "Cada 12 horas",
                  duration: "Indefinida",
                  instructions:
                    "Administrar con alimentos. Controlar presión arterial antes de cada dosis.",
                },
              ]}
              pagination={false}
            />
          </div>

          <Divider />

          {/* Plan de Cuidados de Enfermería */}
          <div>
            <div className="table-header">
              <Title level={5}>Plan de cuidados de enfermería</Title>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                className="add-button"
              >
                Agregar
              </Button>
            </div>
            <Table
              columns={[
                { title: "Diagnóstico", dataIndex: "diagnosis", key: "diagnosis" },
                { title: "Intervención", dataIndex: "intervention", key: "intervention" },
                { title: "Frecuencia", dataIndex: "frequency", key: "frequency" },
                {
                  title: "Acciones",
                  key: "actions",
                  render: (_, record) => (
                    <Space>
                      <Button type="link" style={{ color: "#1890ff" }}>
                        Finalizar
                      </Button>
                      <Button type="link" danger>
                        Eliminar
                      </Button>
                    </Space>
                  ),
                },
              ]}
              dataSource={[
                {
                  key: "1",
                  diagnosis: "Piel alterada relacionada con herida en la pierna.",
                  intervention: "Limpiar herida, secar con gasas sin frotar.",
                  frequency: "Diaria",
                },
              ]}
              pagination={false}
            />
          </div>
        </Card>
{/* Tarjeta: Condiciones especiales permanentes preexistentes de cuidado */}
<Card
  className="condiciones-card"
  title={<Title level={4}>Condiciones especiales permanentes preexistentes de cuidado</Title>}
  bordered
>
  {/* Head: Checkboxes */}
  <div className="condiciones-head">
    <Title level={5} className="checkbox-title">Condición especial</Title>
    <Checkbox.Group style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      <Checkbox value="discapacidad" defaultChecked>
        Persona con discapacidad
      </Checkbox>
      <Checkbox value="apoyos" defaultChecked>
        Limitaciones o apoyos
      </Checkbox>
      <Checkbox value="medicamentos" defaultChecked>
        Alergias a medicamentos
      </Checkbox>
      <Checkbox value="cirugias" defaultChecked>
        Cirugías
      </Checkbox>
      <Checkbox value="alergias">
        Otras alergias
      </Checkbox>
      <Checkbox value="dieta">
        Dieta especial
      </Checkbox>
    </Checkbox.Group>
  </div>

  <Divider />

  {/* Body */}
  <div className="condiciones-body">
    {/* Formulario 1: Tipos de discapacidad */}
    <Card
      className="terciaria-card"
      bordered
      title={
        <div className="table-header">
          <Title level={5}>Tipos de discapacidad del paciente</Title>
          <Button type="primary" icon={<PlusOutlined />} className="add-button">
            Agregar
          </Button>
        </div>
      }
    >
      {/* Tabla de datos */}
      <Table
        className="discapacidad-table"
        columns={[
          {
            title: "Discapacidades",
            dataIndex: "discapacidad",
            key: "discapacidad",
            align: "center",
          },
          {
            title: "Observación",
            dataIndex: "observacion",
            key: "observacion",
            align: "center",
          },
          {
            title: "Acciones",
            key: "acciones",
            align: "center",
            render: (_, record) => (
              <Button type="link" danger>
                Eliminar
              </Button>
            ),
          },
        ]}
        dataSource={[
          {
            key: "1",
            discapacidad: "Física",
            observacion: "N/A",
          },
        ]}
        pagination={false}
      />

      <Divider />

      {/* Estructura del Formulario */}
      <Form layout="vertical">
        <Form.Item
          label={<span className="form-title">Seleccione los tipos de discapacidad</span>}
          className="vertical-form-item"
        >
          {/* Checkboxes agrupados en frames */}
          <Checkbox.Group style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div className="frame">
              <Checkbox value="fisica">
                <span className="checkbox-label">Física</span>
              </Checkbox>
              <Checkbox value="sensorial">
                <span className="checkbox-label">Sensorial</span>
              </Checkbox>
              <Checkbox value="intelectual">
                <span className="checkbox-label">Intelectual</span>
              </Checkbox>
            </div>
            <div className="frame">
              <Checkbox value="psiquica">
                <span className="checkbox-label">Psíquica</span>
              </Checkbox>
              <Checkbox value="multiple">
                <span className="checkbox-label">Múltiple</span>
              </Checkbox>
              <Checkbox value="otra">
                <span className="checkbox-label">Otra</span>
              </Checkbox>
            </div>
          </Checkbox.Group>
        </Form.Item>

        {/* Campos de entrada adicionales */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Discapacidad específica"
              name="discapacidadEspecifica"
              rules={[{ required: true, message: "Ingrese la discapacidad específica" }]}
            >
              <Input placeholder="Ejemplo: Parálisis cerebral" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Observación"
              name="observacion"
              rules={[{ required: false }]}
            >
              <Input.TextArea placeholder="Ejemplo: Requiere asistencia permanente" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>

    <Divider />

    {/* Formulario 2: Limitaciones permanentes */}
    <Card
      className="terciaria-card"
      bordered
      title={
        <div className="table-header">
          <Title level={5}>Limitaciones permanentes que requieren apoyos o cuidados</Title>
          <Button type="primary" icon={<PlusOutlined />} className="add-button">
            Agregar
          </Button>
        </div>
      }
    >
      <Row gutter={16}>
        <Col span={12}>
          <label>
            Limitación
            <Input placeholder="Ejemplo: Incontinencia urinaria" />
          </label>
        </Col>
        <Col span={12}>
          <label>
            Observación
            <Input.TextArea placeholder="Detalles adicionales" />
          </label>
        </Col>
      </Row>
    </Card>

    <Divider />

    {/* Formulario 3: Alergias a medicamentos */}
    <Card
      className="terciaria-card"
      bordered
      title={
        <div className="table-header">
          <Title level={5}>Alergias a medicamentos</Title>
          <Button type="primary" icon={<PlusOutlined />} className="add-button">
            Agregar
          </Button>
        </div>
      }
    >
      <Row gutter={16}>
        <Col span={12}>
          <label>
            Medicamento
            <Input placeholder="Ejemplo: Penicilina" />
          </label>
        </Col>
        <Col span={12}>
          <label>
            Observación
            <Input.TextArea placeholder="Ejemplo: Reemplazar con azitromicina" />
          </label>
        </Col>
      </Row>
    </Card>
  </div>
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
