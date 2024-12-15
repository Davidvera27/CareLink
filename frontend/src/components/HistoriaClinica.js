import React from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Card,
  Button,
  Avatar,
  Row,
  Col,
  Input,
  Select,
  Typography,
  Table,
  Checkbox,
  Space,
  Divider,
  Form,
} from "antd";
import { PlusOutlined, UserOutlined, FileOutlined, TeamOutlined } from "@ant-design/icons";
import "../styles/Home.css"



const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;

const HistoriaClinica = () => {
  const [form] = Form.useForm();
  const [collapsed, setCollapsed] = React.useState(false);

  const handleReset = () => {
    form.resetFields();
  };

  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Datos guardados:", values);
      })
      .catch((errorInfo) => {
        console.error("Errores al guardar:", errorInfo);
      });
  };

  const items = [
    { key: "/home", icon: <UserOutlined />, label: "Tablero de Inicio" },
    {
      key: "sub1",
      icon: <UserOutlined />,
      label: "Usuarios",
      children: [
        { key: "/nuevo-usuario", label: "Nuevo usuario" },
        { key: "/nuevo-reporte-clinico", label: "Nuevo reporte clínico" },
        { key: "/lista-usuarios", label: "Lista de usuarios" },
      ],
    },
    {
      key: "sub2",
      icon: <TeamOutlined />,
      label: "Gestión Actividades",
      children: [
        { key: "/actividades-diarias", label: "Actividades Diarias" },
        { key: "/visitas-domiciliarias", label: "Visitas Domiciliarias" },
      ],
    },
    {
      key: "sub3",
      icon: <FileOutlined />,
      label: "Administración",
      children: [
        { key: "/configuracion", label: "Configuración" },
        { key: "/reportes", label: "Reportes" },
      ],
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["/lista-usuarios"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "#fff" }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Inicio</Breadcrumb.Item>
            <Breadcrumb.Item>Historia Clínica</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: "#fff" }}>
            <div className="historia-clinica-page">
              <div className="historia-clinica-container">
<Card className="principal-card" bordered>
  <Row align="middle" gutter={16}>
    {/* Columna para el avatar del paciente */}
    <Col span={4}>
      <Avatar size={72} src="https://via.placeholder.com/72" alt="Avatar" />
    </Col>
    {/* Columna con la información personal del paciente */}
    <Col span={10}>
      <Title level={5}>JUAN ANTONIO LOPEZ ORREGO</Title>
      <Text>44567890 - Masculino - 1956/11/08 - 68 años</Text>
      <br />
      <Text>Casado - Pensionado</Text>
    </Col>
    {/* Columna con la información de contacto del paciente */}
    <Col span={10}>
      <Text>CLL 45 - 60-20 INT 101</Text>
      <br />
      <Text>315 6789 6789 - juanantonio@gmail.com</Text>
    </Col>
  </Row>
</Card>

      <Divider />

<Card
  className="servicio-emergencias-card"
  title={<Title level={4}>Servicio externo para emergencias médicas</Title>}
  bordered
>
  <Row gutter={16}>
    {/* Campo: ¿Cuenta con servicio externo? */}
    <Col span={8}>
      <Form.Item
        label="¿Cuenta con servicio externo para emergencias?"
        name="servicioExternoEmergencias"
        rules={[{ required: true, message: 'Seleccione una opción' }]}
      >
        <Select placeholder="Seleccione" style={{ width: "100%" }}>
          <Select.Option value="si">Sí</Select.Option>
          <Select.Option value="no">No</Select.Option>
        </Select>
      </Form.Item>
    </Col>

    {/* Campo: ¿Cuál? */}
    <Col span={8}>
      <Form.Item
        label="¿Cuál?"
        name="cualServicio"
        rules={[{ required: true, message: 'Seleccione un servicio' }]}
      >
        <Select placeholder="Seleccione un servicio" style={{ width: "100%" }}>
          <Select.Option value="emi">EMI</Select.Option>
          <Select.Option value="colsanitas">Colsanitas</Select.Option>
          <Select.Option value="medilink">Medilink</Select.Option>
          <Select.Option value="cruz-roja">Cruz Roja</Select.Option>
          <Select.Option value="sura">SURA</Select.Option>
          <Select.Option value="otra">Otro</Select.Option>
        </Select>
      </Form.Item>
    </Col>

    {/* Campo: Teléfono para emergencias */}
    <Col span={8}>
      <Form.Item
        label="Teléfono para servicio emergencia médica"
        name="telefonoEmergencias"
        rules={[
          { required: true, message: 'Ingrese un número de contacto' },
          { pattern: /^[0-9]+$/, message: 'Solo se permiten números' },
        ]}
      >
        <Input placeholder="Número de contacto" />
      </Form.Item>
    </Col>
  </Row>
</Card>

      <Divider />
      <Card
  className="datos-basicos-ingreso-card"
  title={<Title level={4}>Datos básicos de ingreso</Title>}
  bordered
>
  <Form layout="vertical">
    <Row gutter={16}>
      {/* Campo: Fecha de registro */}
      <Col span={12}>
        <Form.Item
          label="Fecha de registro"
          name="fechaRegistro"
          rules={[{ required: true, message: 'Por favor seleccione una fecha' }]}
        >
          <Input type="date" />
        </Form.Item>
      </Col>

      {/* Campo: Motivo de ingreso */}
      <Col span={12}>
        <Form.Item
          label="Motivo de ingreso"
          name="motivoIngreso"
          rules={[{ required: true, message: 'Por favor ingrese un motivo' }]}
        >
          <Input placeholder="Motivo" />
        </Form.Item>
      </Col>
    </Row>
  </Form>
</Card>

      <Divider />
<Card
  className="datos-basicos-salud-card"
  title={<Title level={4}>Datos básicos de salud</Title>}
  bordered
>
  <Form layout="vertical">
    <Row gutter={16}>
      {/* Campo: EPS */}
      <Col span={12}>
        <Form.Item
          label="EPS"
          name="eps"
          rules={[{ required: true, message: 'Por favor ingrese la EPS' }]}
        >
          <Input placeholder="Ingrese la EPS" />
        </Form.Item>
      </Col>

      {/* Campo: Tipo de Sangre */}
      <Col span={12}>
        <Form.Item
          label="Tipo de Sangre"
          name="tipoSangre"
          rules={[{ required: true, message: 'Por favor seleccione el tipo de sangre' }]}
        >
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
        </Form.Item>
      </Col>
    </Row>
  </Form>
</Card>

      <Divider />
                
<Card
  className="exploracion-fisica-card"
  title={<Title level={4}>Exploración física inicial</Title>}
  bordered
>
  <Form layout="vertical">
    <Row gutter={16}>
      {/* Campo: Estatura */}
      <Col span={8}>
        <Form.Item
          label="Estatura"
          name="estatura"
          rules={[
            { required: true, message: "Por favor ingrese la estatura" },
            { pattern: /^\d+$/, message: "Debe ser un número válido" },
          ]}
        >
          <Input placeholder="Ingrese en cm" />
        </Form.Item>
      </Col>

      {/* Campo: Peso */}
      <Col span={8}>
        <Form.Item
          label="Peso"
          name="peso"
          rules={[
            { required: true, message: "Por favor ingrese el peso" },
            { pattern: /^\d+$/, message: "Debe ser un número válido" },
          ]}
        >
          <Input placeholder="Ingrese en kg" />
        </Form.Item>
      </Col>

      {/* Campo: Presión Arterial */}
      <Col span={8}>
        <Form.Item
          label="Presión Arterial"
          name="presionArterial"
          rules={[
            { required: true, message: "Por favor ingrese la presión arterial" },
            { pattern: /^\d+\/\d+$/, message: "Debe seguir el formato mmHg (Ej: 120/80)" },
          ]}
        >
          <Input placeholder="Ingrese en mmHg" />
        </Form.Item>
      </Col>

      {/* Campo: Frecuencia Cardíaca */}
      <Col span={8}>
        <Form.Item
          label="Frecuencia Cardíaca"
          name="frecuenciaCardiaca"
          rules={[
            { required: true, message: "Por favor ingrese la frecuencia cardíaca" },
            { pattern: /^\d+$/, message: "Debe ser un número válido en bpm" },
          ]}
        >
          <Input placeholder="Ingrese en bpm" />
        </Form.Item>
      </Col>

      {/* Campo: Temperatura Corporal */}
      <Col span={8}>
        <Form.Item
          label="Temperatura Corporal"
          name="temperaturaCorporal"
          rules={[
            { required: true, message: "Por favor ingrese la temperatura corporal" },
            { pattern: /^\d+(\.\d+)?$/, message: "Debe ser un número válido en °C" },
          ]}
        >
          <Input placeholder="Ingrese en °C" />
        </Form.Item>
      </Col>
    </Row>
  </Form>
</Card>

      <Divider />

<Card
  className="tratamientos-card"
  title={<Title level={4}>Tratamientos o medicamentos temporales o permanentes que requieren apoyo</Title>}
  bordered
>
  {/* Checkboxes para seleccionar tratamientos */}
  <Form layout="vertical">
    <Form.Item>
      <Title level={5} className="checkbox-title">Tratamientos o medicamentos</Title>
      <Checkbox.Group style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "16px" }}>
        <Checkbox value="farmaco" defaultChecked>Régimen farmacoterapéutico</Checkbox>
        <Checkbox value="enfermeria" defaultChecked>Plan de cuidados de enfermería</Checkbox>
        <Checkbox value="fisioterapia" defaultChecked>Intervención fisioterapéutica</Checkbox>
      </Checkbox.Group>
    </Form.Item>
  </Form>

  <Divider />

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
              <Button type="link" style={{ color: "#1890ff" }}>Desactivar</Button>
              <Button type="link" danger>Eliminar</Button>
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
          instructions: "Administrar con alimentos. Controlar presión arterial antes de cada dosis.",
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
              <Button type="link" style={{ color: "#1890ff" }}>Finalizar</Button>
              <Button type="link" danger>Eliminar</Button>
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

      <Divider />
{/* Tarjeta: Condiciones especiales permanentes preexistentes de cuidado */}
<Card
  className="condiciones-card"
  title={
    <div className="title-wrapper">
      <Title level={4}>Condiciones especiales permanentes preexistentes de cuidado</Title>
    </div>
  }
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

    {/* Formulario 4: Historial de cirugías */}
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

    <Divider />
{/* Esquema de vacunación */}
<Card
  className="vacunacion-card"
  bordered
  title={
    <div className="table-header">
      <Title level={4}>Esquema de vacunación</Title>
      <Button type="primary" icon={<PlusOutlined />} className="add-button">
        Agregar Vacuna
      </Button>
    </div>
  }
>
  {/* Body */}
  <div className="vacunacion-body">
    {/* Tabla de vacunas */}
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
      style={{
        marginTop: 16, // Creates spacing between header and table
      }}
    />
  </div>
</Card>

    <Divider />
                {/* Incluye todas las demás tarjetas aquí */}
              </div>
              <div className="action-buttons" style={{ marginTop: "16px", textAlign: "right" }}>
                <Space>
                  <Button type="default" onClick={handleReset}>
                    Restablecer
                  </Button>
                  <Button type="primary" onClick={handleSave}>
                    Guardar y continuar
                  </Button>
                </Space>
              </div>
            </div>
          </div>
        </Content>

      </Layout>
    </Layout>
  );
};

export default HistoriaClinica;
