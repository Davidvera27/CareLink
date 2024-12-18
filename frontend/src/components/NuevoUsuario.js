import React, { useEffect, useState } from "react";
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
  const [form] = Form.useForm();
  const [idUsuario, setIdUsuario] = useState(""); // ID del nuevo paciente

  useEffect(() => {
    fetchNextId();
  }, []);

  // Función GET: Obtener el próximo ID de paciente
  const fetchNextId = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/patients/next-id");
      setIdUsuario(response.data.nextId); // Actualizar ID de usuario
    } catch (error) {
      console.error("Error al obtener el siguiente ID:", error);
      message.error("Error al obtener el siguiente ID.");
    }
  };

  // Función POST: Enviar los datos del formulario
  const onFinish = async (values) => {
    try {
      const formData = new FormData();
  
      // Agregar datos al FormData
      formData.append("tipo_usuario", values.tipoUsuario);
      formData.append("n_documento", values.nDocumento);
      formData.append("apellidos", values.apellidos);
      formData.append("nombres", values.nombres);
      formData.append("genero", values.genero);
      formData.append("fecha_nacimiento", values.fechaNacimiento.format("YYYY-MM-DD"));
      formData.append("estado_civil", values.estadoCivil);
      formData.append("ocupacion", values.ocupacion);
      formData.append("direccion", values.direccion);
      formData.append("telefono", values.telefono);
      formData.append("correo_electronico", values.correoElectronico);
  
      // Agregar la imagen solo si existe
      if (values.fotografia) {
        formData.append("fotografia", values.fotografia.originFileObj);
      }
  
      // Enviar los datos al backend
      await axios.post("http://localhost:5000/api/patients", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
  
      message.success("Paciente creado exitosamente.");
      form.resetFields();
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
      message.error("Error al registrar el usuario. Intente nuevamente.");
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
      <Form
        id="nuevoUsuarioForm"
        layout="vertical"
        onFinish={onFinish}
        form={form}
        initialValues={{ genero: "Masculino" }}
      >
        <Row gutter={16}>
          {/* Id. Usuario */}
          <Col span={8}>
            <Form.Item name="idUsuario" label="Id. Usuario">
              <Input value={idUsuario} placeholder={idUsuario} disabled />
            </Form.Item>
          </Col>

          {/* Tipo de usuario */}
          <Col span={8}>
            <Form.Item name="tipoUsuario" label="Tipo de usuario" rules={[{ required: true }]}>
              <Select placeholder="Selecciona el tipo de usuario">
                <Option value="Recurrente">Recurrente</Option>
                <Option value="Nuevo">Nuevo</Option>
              </Select>
            </Form.Item>
          </Col>

          {/* N° Documento */}
          <Col span={8}>
            <Form.Item name="nDocumento" label="N° Documento" rules={[{ required: true }]}>
              <Input placeholder="Número de documento" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          {/* Apellidos */}
          <Col span={8}>
            <Form.Item name="apellidos" label="Apellidos" rules={[{ required: true }]}>
              <Input placeholder="Apellidos" />
            </Form.Item>
          </Col>

          {/* Nombres */}
          <Col span={8}>
            <Form.Item name="nombres" label="Nombres" rules={[{ required: true }]}>
              <Input placeholder="Nombres" />
            </Form.Item>
          </Col>

          {/* Género */}
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
          {/* Fecha de nacimiento */}
          <Col span={8}>
            <Form.Item
              name="fechaNacimiento"
              label="Fecha de nacimiento"
              rules={[{ required: true, message: "Este campo es obligatorio" }, { validator: validateDate }]}
            >
              <DatePicker style={{ width: "100%" }} format="DD-MM-YYYY" />
            </Form.Item>
          </Col>

          {/* Estado civil */}
          <Col span={8}>
            <Form.Item name="estadoCivil" label="Estado civil" rules={[{ required: true }]}>
              <Select>
                <Option value="Casado">Casado</Option>
                <Option value="Soltero">Soltero</Option>
                <Option value="Divorciado">Divorciado</Option>
              </Select>
            </Form.Item>
          </Col>

          {/* Ocupación */}
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
          {/* Fotografía */}
          <Col span={24}>
          <Form.Item
            name="fotografia"
            label="Fotografía"
            valuePropName="file"
            getValueFromEvent={(e) => (e && e.file) || null}
          >
            <Upload beforeUpload={() => false} listType="picture">
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>

          </Col>
        </Row>

        {/* Tarjeta 2: Datos de Localización */}
        <Card title="Datos de Localización" bordered={false}>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item name="direccion" label="Dirección" rules={[{ required: true }]}>
                <Input placeholder="CLL 45 - 60-20 INT 101" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="telefono" label="Teléfono" rules={[{ required: true }]}>
                <Input placeholder="315 6789 6789" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="correoElectronico" label="Correo Electrónico" rules={[{ required: true, type: "email" }]}>
                <Input placeholder="juanantonio@gmail.com" />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        {/* Botones */}
        <Row justify="end">
          <Button
            type="default"
            onClick={() => form.resetFields()}
            style={{ marginRight: "8px", backgroundColor: "#fff", borderColor: "#7F34B4", color: "#7F34B4" }}
          >
            Restablecer
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: "#7F34B4", borderColor: "#7F34B4", color: "#fff" }}
          >
            Guardar y continuar
          </Button>
        </Row>
      </Form>
    </Card>
  </Col>
</Row>

        </Content>
      </Layout>
    </Layout>
  );
};

export default NuevoUsuario;