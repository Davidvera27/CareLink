import React from "react";
import {
  Layout,
  Breadcrumb,
  Form,
  Input,
  Select,
  DatePicker,
  Button,
  Upload,
  message,
  Card,
  Row,
  Col,
  Menu,
  Badge,
} from "antd";
import moment from "moment";
import {
  UploadOutlined,
  HomeOutlined,
  UserOutlined,
  CheckCircleOutlined,
  CalendarOutlined,
  SettingOutlined,
  SearchOutlined,
  QuestionCircleOutlined,
  BellOutlined,
  LogoutOutlined,
  SettingFilled,
} from "@ant-design/icons"; // Importa íconos correctamente
import axios from "axios";

const { Header, Content, Sider } = Layout;
const { Option } = Select;

// Configuración global de Axios
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      message.error("Error de red. Verifica tu conexión.");
    } else {
      message.error(error.response.data?.message || "Error en el servidor.");
    }
    return Promise.reject(error);
  }
);

const validateDate = (_, value) => {
  if (!value || value.isBefore(moment())) {
    return Promise.resolve();
  }
  return Promise.reject(new Error("La fecha debe ser anterior a hoy."));
};

const NuevoUsuario = () => {
  const onFinish = async (values) => {
    try {
      const response = await axios.post("http://localhost:5000/api/patients", {
        tipo_usuario: values.tipoUsuario,
        n_documento: values.nDocumento,
        apellidos: values.apellidos,
        nombres: values.nombres,
        genero: values.genero,
        fecha_nacimiento: values.fechaNacimiento.format("YYYY-MM-DD"),
        estado_civil: values.estadoCivil,
        ocupacion: values.ocupacion,
        direccion: values.direccion,
        telefono: values.telefono,
        correo_electronico: values.correoElectronico,
      });

      if (response.status === 201) {
        message.success("Usuario registrado exitosamente.");
      }
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Cabecera Global */}
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#22075E",
          padding: "0 16px",
          color: "#fff",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "16px" }}>
          Sistema de Gestión
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <SearchOutlined style={{ fontSize: "16px", color: "#fff" }} />
          <QuestionCircleOutlined style={{ fontSize: "16px", color: "#fff" }} />
          <Badge count={11} style={{ backgroundColor: "#FF4D4F" }}>
            <BellOutlined style={{ fontSize: "16px", color: "#fff" }} />
          </Badge>
          <SettingFilled style={{ fontSize: "16px", color: "#fff" }} />
          <LogoutOutlined style={{ fontSize: "16px", color: "#fff" }} />
        </div>
      </Header>

      <Layout>
        {/* Menú lateral */}
        <Sider collapsible style={{ backgroundColor: "#F1E6F5" }}>
  <div
    className="logo"
    style={{
      color: "#7F34B4",
      textAlign: "center",
      padding: "16px 0",
      fontWeight: "bold",
      fontSize: "16px",
    }}
  >

  </div>
  <Menu
    theme="light"
    defaultSelectedKeys={["1"]}
    mode="inline"
    style={{
      backgroundColor: "#FFFFFF",
      color: "#000000",
      fontWeight: "500",
    }}
  >
    <Menu.Item
      key="1"
      icon={<HomeOutlined style={{ color: "#7F34B4" }} />}
      style={{
        color: "#7F34B4",
        backgroundColor: "#EAD9F2",
      }}
    >
      Tablero de Inicio
    </Menu.Item>

    <Menu.SubMenu
      key="2"
      icon={<UserOutlined style={{ color: "#7F34B4" }} />}
      title={<span style={{ color: "#7F34B4" }}>Usuarios</span>}
    >
      <Menu.Item key="2.1" style={{ color: "#000000" }}>
        Nuevo Usuario
      </Menu.Item>
      <Menu.Item key="2.2" style={{ color: "#000000" }}>
        Nuevo Reporte Clínico
      </Menu.Item>
      <Menu.Item key="2.3" style={{ color: "#000000" }}>
        Lista de Usuarios
      </Menu.Item>
    </Menu.SubMenu>

    <Menu.Item
      key="3"
      icon={<CheckCircleOutlined style={{ color: "#7F34B4" }} />}
      style={{
        color: "#7F34B4",
        backgroundColor: "#EAD9F2",
      }}
    >
      Gestión de Actividades
    </Menu.Item>

    <Menu.SubMenu
      key="4"
      icon={<CalendarOutlined style={{ color: "#7F34B4" }} />}
      title={<span style={{ color: "#7F34B4" }}>Visitas Domiciliarias</span>}
    >
      <Menu.Item key="4.1" style={{ color: "#000000" }}>
        Visitas Programadas
      </Menu.Item>
      <Menu.Item key="4.2" style={{ color: "#000000" }}>
        Historial de Visitas
      </Menu.Item>
    </Menu.SubMenu>

    <Menu.SubMenu
      key="5"
      icon={<SettingOutlined style={{ color: "#7F34B4" }} />}
      title={<span style={{ color: "#7F34B4" }}>Administración</span>}
    >
      <Menu.Item key="5.1" style={{ color: "#000000" }}>
        Configuración General
      </Menu.Item>
      <Menu.Item key="5.2" style={{ color: "#000000" }}>
        Auditoría
      </Menu.Item>
    </Menu.SubMenu>
  </Menu>
</Sider>


        {/* Contenido */}
        <Content style={{ margin: "16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Inicio</Breadcrumb.Item>
            <Breadcrumb.Item>Nuevo Usuario</Breadcrumb.Item>
          </Breadcrumb>

          {/* Tarjetas con estructura basada en Figma */}
          <Row gutter={[16, 16]}>
            {/* Tarjeta 1: Datos Básicos */}
            <Col span={24}>
<Card title="Datos Básicos" bordered={false}>
  <Form layout="vertical" onFinish={onFinish} initialValues={{ genero: "Masculino" }}>
    <Row gutter={16}>
      {/* Campo: Id. Usuario */}
      <Col span={8}>
        <Form.Item name="idUsuario" label="Id. Usuario">
          <Input placeholder="0001" disabled />
        </Form.Item>
      </Col>

      {/* Campo: Tipo de usuario */}
      <Col span={8}>
        <Form.Item name="tipoUsuario" label="Tipo de usuario" rules={[{ required: true }]}>
          <Select>
            <Option value="Recurrente">Recurrente</Option>
            <Option value="Nuevo">Nuevo</Option>
          </Select>
        </Form.Item>
      </Col>

      {/* Campo: N° Documento */}
      <Col span={8}>
        <Form.Item name="nDocumento" label="N° Documento" rules={[{ required: true }]}>
          <Input placeholder="Número de documento" />
        </Form.Item>
      </Col>
    </Row>

    <Row gutter={16}>
      {/* Campo: Apellidos */}
      <Col span={8}>
        <Form.Item name="apellidos" label="Apellidos" rules={[{ required: true }]}>
          <Input placeholder="Apellidos" />
        </Form.Item>
      </Col>

      {/* Campo: Nombres */}
      <Col span={8}>
        <Form.Item name="nombres" label="Nombres" rules={[{ required: true }]}>
          <Input placeholder="Nombres" />
        </Form.Item>
      </Col>

      {/* Campo: Género */}
      <Col span={8}>
        <Form.Item name="genero" label="Género" rules={[{ required: true }]}>
          <Select>
            <Option value="Masculino">Masculino</Option>
            <Option value="Femenino">Femenino</Option>
          </Select>
        </Form.Item>
      </Col>
    </Row>

    <Row gutter={16}>
      {/* Campo: Fecha de nacimiento */}
      <Col span={8}>
        <Form.Item
          name="fechaNacimiento"
          label="Fecha de nacimiento"
          rules={[
            { required: true, message: "Este campo es obligatorio" },
            { validator: validateDate },
          ]}
        >
          <DatePicker style={{ width: "100%" }} format="YYYY-MM-DD" />
        </Form.Item>
      </Col>

      {/* Campo: Estado civil */}
      <Col span={8}>
        <Form.Item name="estadoCivil" label="Estado civil" rules={[{ required: true }]}>
          <Select>
            <Option value="Casado">Casado</Option>
            <Option value="Soltero">Soltero</Option>
            <Option value="Divorciado">Divorciado</Option>
          </Select>
        </Form.Item>
      </Col>

      {/* Campo: Ocupación */}
      <Col span={8}>
        <Form.Item name="ocupacion" label="Ocupación" rules={[{ required: true }]}>
          <Select>
            <Option value="Pensionado">Pensionado</Option>
            <Option value="Empleado">Empleado</Option>
            <Option value="Independiente">Independiente</Option>
          </Select>
        </Form.Item>
      </Col>
    </Row>

    <Row>
      {/* Campo: Fotografía */}
      <Col span={24}>
        <Form.Item name="fotografia" label="Fotografía" valuePropName="fileList">
          <Upload name="fotografia" listType="picture" beforeUpload={() => false}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
      </Col>
    </Row>
  </Form>
</Card>

            </Col>

{/* Tarjeta 2: Datos de Localización */}
<Col span={24}>
<Card title="Datos de Localización" bordered={false}>
    <Form layout="vertical">
      <Row gutter={16}>
        {/* Campo: Dirección */}
        <Col span={24}>
          <Form.Item
            name="direccion"
            label="Dirección"
            rules={[{ required: true, message: "La dirección es obligatoria" }]}
          >
            <Input placeholder="CLL 45 - 60-20 INT 101" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        {/* Campo: Teléfono */}
        <Col span={12}>
          <Form.Item
            name="telefono"
            label="Teléfono"
            rules={[{ required: true, message: "El teléfono es obligatorio" }]}
          >
            <Input placeholder="315 6789 6789" />
          </Form.Item>
        </Col>

        {/* Campo: Correo Electrónico */}
        <Col span={12}>
          <Form.Item
            name="correoElectronico"
            label="Correo Electrónico"
            rules={[
              { required: true, message: "El correo electrónico es obligatorio" },
              { type: "email", message: "Ingresa un correo válido" },
            ]}
          >
            <Input placeholder="juanantonio@gmail.com" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
</Card>
</Col>

{/* Tarjeta 3: Botones */}
<Col span={24}>
  <Card
    bordered={false}
    style={{
      background: "#FFFFFF",
      border: "1px solid rgba(0, 0, 0, 0.06)",
      borderRadius: "2px",
      padding: "24px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <Row justify="end" gutter={16}>
      <Col>
        <Button
          type="default"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "4px 15px",
            width: "106px",
            height: "32px",
            border: "1px solid #D9D9D9",
            boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.016)",
            borderRadius: "2px",
          }}
        >
          Restablecer
        </Button>
      </Col>
      <Col>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "4px 15px",
            width: "155px",
            height: "32px",
            background: "#7F34B4",
            border: "1px solid #7F34B4",
            boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.043)",
            borderRadius: "2px",
            color: "#FFFFFF",
          }}
        >
          Guardar y continuar
        </Button>
      </Col>
    </Row>
  </Card>
</Col>

          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default NuevoUsuario;
