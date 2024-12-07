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

      <Form layout="vertical">
        <Form.Item
          label={<span className="form-title">Seleccione los tipos de discapacidad</span>}
          className="vertical-form-item"
        >
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
      {/* Tarjeta secundaria dentro del formulario */}
      <Card
        className="secondary-card"
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
        <Table
          className="limitaciones-table"
          columns={[
            {
              title: "Limitaciones",
              dataIndex: "limitacion",
              key: "limitacion",
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
              limitacion: "Incontinencia urinaria",
              observacion: "Requiere uso de pañal",
            },
            {
              key: "2",
              limitacion: "Debilidad muscular",
              observacion: "Requiere ayuda para comer",
            },
          ]}
          pagination={false}
        />
      </Card>
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
      <Table
        className="alergias-table"
        columns={[
          {
            title: "Medicamentos a los que presenta alergia",
            dataIndex: "medicamento",
            key: "medicamento",
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
            medicamento: "Penicilina",
            observacion: "Reemplazar con azitromicina",
          },
        ]}
        pagination={false}
      />
    </Card>

    <Divider />

        {/* Formulario 4: Historial de cirugías, traumatismos o accidentes */}
        <Card
      className="terciaria-card"
      bordered
      title={
        <div className="table-header">
          <Title level={5}>Historial de cirugías, traumatismos o accidentes</Title>
          <Button type="primary" icon={<PlusOutlined />} className="add-button">
            Agregar
          </Button>
        </div>
      }
    >
      <Table
        className="historial-table"
        columns={[
          {
            title: "Fecha de ocurrencia",
            dataIndex: "fecha",
            key: "fecha",
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
            fecha: "10/11/1998",
            observacion: "Apendicectomía",
          },
        ]}
        pagination={false}
      />
    </Card>
  </div>
</Card>


{/* Esquema de vacunación */}
<Card className="vacunacion-card" bordered>
  {/* Head: Título */}
  <div className="table-header">
    <Title level={5}>Esquema de vacunación</Title>
    <Button type="primary" icon={<PlusOutlined />} className="add-button">
      Agregar Vacuna
    </Button>
  </div>

  {/* Body */}
  <div className="vacunacion-body">
    {/* Tabla dentro de la tarjeta */}
    <Table
      className="vacunacion-table"
      columns={[
        {
          title: "Vacuna",
          dataIndex: "vacuna",
          key: "vacuna",
          align: "center",
        },
        {
          title: "Fecha administración",
          dataIndex: "fechaAdministracion",
          key: "fechaAdministracion",
          align: "center",
        },
        {
          title: "Próxima aplicación (Si aplica)",
          dataIndex: "proximaAplicacion",
          key: "proximaAplicacion",
          align: "center",
        },
        {
          title: "Efectos secundarios (Si reporta)",
          dataIndex: "efectosSecundarios",
          key: "efectosSecundarios",
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
          vacuna: "Influenza",
          fechaAdministracion: "05/07/2024",
          proximaAplicacion: "Anual",
          efectosSecundarios: "Ninguno",
        },
        {
          key: "2",
          vacuna: "Hepatitis B",
          fechaAdministracion: "NO REGISTRA",
          proximaAplicacion: "No requiere",
          efectosSecundarios: "Ninguno",
        },
      ]}
      pagination={false}
    />
  </div>
</Card>


{/* Habilidades biofísicas */}
<Card className="habilidades-biofisicas-card" bordered>
  {/* Head: Título */}
  <div className="table-header">
    <Title level={5}>Habilidades biofísicas</Title>
  </div>

  {/* Body */}
  <div className="habilidades-biofisicas-body">
    <Form layout="vertical">
      {/* Primer formulario */}
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label="Tipo de alimentación" name="tipoAlimentacion" rules={[{ required: true }]}>
            <Select placeholder="Seleccione" style={{ width: "100%" }}>
              <Select.Option value="normal">Normal</Select.Option>
              <Select.Option value="especial">Especial</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Tipo de sueño" name="tipoSueno" rules={[{ required: true }]}>
            <Select placeholder="Seleccione" style={{ width: "100%" }}>
              <Select.Option value="regular">Regular</Select.Option>
              <Select.Option value="interrumpido">Interrumpido</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Continencia" name="continencia" rules={[{ required: true }]}>
            <Select placeholder="Seleccione" style={{ width: "100%" }}>
              <Select.Option value="si">Sí</Select.Option>
              <Select.Option value="no">No</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      {/* Segundo formulario */}
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label="Tipo de movilidad" name="tipoMovilidad" rules={[{ required: true }]}>
            <Select placeholder="Seleccione" style={{ width: "100%" }}>
              <Select.Option value="independiente">Independiente</Select.Option>
              <Select.Option value="con-ayuda">Con ayuda</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Cuidado personal" name="cuidadoPersonal" rules={[{ required: true }]}>
            <Select placeholder="Seleccione" style={{ width: "100%" }}>
              <Select.Option value="independiente">Independiente</Select.Option>
              <Select.Option value="con-ayuda-parcial">Con ayuda parcial</Select.Option>
              <Select.Option value="con-ayuda-completa">Con ayuda completa</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Apariencia personal" name="aparienciaPersonal" rules={[{ required: true }]}>
            <Select placeholder="Seleccione" style={{ width: "100%" }}>
              <Select.Option value="buena">Buena</Select.Option>
              <Select.Option value="descuidada">Descuidada</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  </div>
</Card>



{/* Hábitos o antecedentes toxicológicos */}
<Card className="habitos-toxicologicos-card" bordered>
  {/* Head: Título */}
  <div className="table-header">
    <Title level={5}>Hábitos o antecedentes toxicológicos</Title>
  </div>

  {/* Body */}
  <div className="habitos-toxicologicos-body">
    <Form layout="vertical">
      {/* Primer formulario */}
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            label="Tabaquismo"
            name="tabaquismo"
            rules={[{ required: true, message: "Seleccione una opción" }]}
          >
            <Select placeholder="Seleccione" style={{ width: "100%" }}>
              <Select.Option value="si">Sí</Select.Option>
              <Select.Option value="no">No</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Sustancias Psicoactivas"
            name="sustanciasPsicoactivas"
            rules={[{ required: true, message: "Seleccione una opción" }]}
          >
            <Select placeholder="Seleccione" style={{ width: "100%" }}>
              <Select.Option value="si">Sí</Select.Option>
              <Select.Option value="no">No</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      {/* Segundo formulario */}
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            label="Alcoholismo"
            name="alcoholismo"
            rules={[{ required: true, message: "Seleccione una opción" }]}
          >
            <Select placeholder="Seleccione" style={{ width: "100%" }}>
              <Select.Option value="si">Sí</Select.Option>
              <Select.Option value="no">No</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Cafeína"
            name="cafeina"
            rules={[{ required: true, message: "Seleccione una opción" }]}
          >
            <Select placeholder="Seleccione" style={{ width: "100%" }}>
              <Select.Option value="si">Sí</Select.Option>
              <Select.Option value="no">No</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  </div>
</Card>


{/* Habilidades de percepción social */}
<Card
        className="habilidades-percepcion-social"
        title="Habilidades de percepción social"
        bordered
      >
        <Form layout="vertical">
          <div className="form-row">
            <Form.Item
              label="Comunicación verbal"
              name="comunicacionVerbal"
              rules={[{ required: true, message: "Seleccione una opción" }]}
            >
              <Select placeholder="Seleccione una opción">
              <Select.Option value="activa">Activa</Select.Option>
              <Select.Option value="pasiva">Pasiva</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Comunicación no verbal"
              name="comunicacionNoVerbal"
              rules={[{ required: true, message: "Seleccione una opción" }]}
            >
              <Select placeholder="Seleccione una opción">
                <Select.Option value="activa">Activa</Select.Option>
                <Select.Option value="pasiva">Pasiva</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <Divider />
          <div className="form-row">
            <Form.Item
              label="Estado de ánimo"
              name="estadoAnimo"
              rules={[{ required: true, message: "Seleccione una opción" }]}
            >
              <Select placeholder="Seleccione una opción">
                <Select.Option value="alegre">Alegre</Select.Option>
                <Select.Option value="triste">Triste</Select.Option>
                <Select.Option value="ansioso">Ansioso</Select.Option>
                <Select.Option value="calmado">Calmado</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="¿Ha sufrido maltrato?"
              name="haSufridoMaltrato"
              rules={[{ required: true, message: "Seleccione una opción" }]}
            >
              <Select placeholder="Seleccione una opción">
                <Select.Option value="si">Sí</Select.Option>
                <Select.Option value="no">No</Select.Option>
              </Select>
            </Form.Item>
          </div>
        </Form>
</Card>

{/* Diagnóstico inicial */}
<Card
  className="diagnostico-card"
  title={<Title level={4}>Diagnóstico inicial</Title>}
  bordered
>
  {/* Formulario para diagnóstico inicial */}
  <Form layout="vertical" className="diagnostico-form">
    <Form.Item
      label="Observaciones"
      name="diagnosticoObservaciones"
      rules={[
        {
          required: true,
          message: "Por favor, ingrese las observaciones del diagnóstico inicial",
        },
      ]}
    >
      <Input.TextArea
        placeholder="Describa el diagnóstico inicial..."
        rows={4}
        className="diagnostico-textarea"
      />
    </Form.Item>
  </Form>
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
