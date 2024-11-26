import React from "react";
import { Form, Input, Select, DatePicker, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import GlobalHeader from "./GlobalHeader"; // Barra de navegación
import "../styles/NuevoUsuario.css";
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

// Configuración global para manejar errores en Axios
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

const NuevoUsuario = () => {
  const navigate = useNavigate(); // Hook para navegación

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
        const idUsuario = response.data.patient.id_usuario; // Extraer id_usuario
        message.success("Usuario registrado exitosamente.");
        navigate(`/nuevo-usuario/agregar-acudiente/${idUsuario}`); // Redirigir con id_usuario
      }
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.error("Error en el formulario:", errorInfo);
    message.error("Por favor, complete todos los campos obligatorios.");
  };

  const validateDate = (_, value) => {
    if (!value || value.isBefore(moment())) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("La fecha debe ser anterior a hoy."));
  };

  return (
    <div>
      <GlobalHeader />
      <div className="nuevo-usuario-page">
        <div className="card-legacy">
          <div className="head">
            <div className="title-wrapper">
              <h3 className="title">Nuevo Usuario</h3>
            </div>
          </div>
          <div className="body">
            <Form
              name="nuevo-usuario"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              initialValues={{
                tipoUsuario: "Recurrente",
                genero: "Masculino",
                estadoCivil: "Casado",
                ocupacion: "Pensionado",
              }}
            >
              <div className="form-section">
                <h4>Datos básicos</h4>
                <div className="form-row">
                  <Form.Item
                    name="tipoUsuario"
                    label="Tipo de usuario"
                    className="form-item"
                  >
                    <Select>
                      <Option value="Recurrente">Recurrente</Option>
                      <Option value="Nuevo">Nuevo</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="nDocumento"
                    label="N° Documento"
                    className="form-item"
                    rules={[{ required: true, message: "Este campo es obligatorio" }]}
                  >
                    <Input placeholder="44567890" />
                  </Form.Item>
                </div>
                <div className="form-row">
                  <Form.Item
                    name="apellidos"
                    label="Apellidos"
                    className="form-item"
                    rules={[{ required: true, message: "Este campo es obligatorio" }]}
                  >
                    <Input placeholder="LOPEZ ORREGO" />
                  </Form.Item>
                  <Form.Item
                    name="nombres"
                    label="Nombres"
                    className="form-item"
                    rules={[{ required: true, message: "Este campo es obligatorio" }]}
                  >
                    <Input placeholder="JUAN ANTONIO" />
                  </Form.Item>
                  <Form.Item
                    name="genero"
                    label="Género"
                    className="form-item"
                    rules={[{ required: true, message: "Este campo es obligatorio" }]}
                  >
                    <Select>
                      <Option value="Masculino">Masculino</Option>
                      <Option value="Femenino">Femenino</Option>
                    </Select>
                  </Form.Item>
                </div>
                <div className="form-row">
                  <Form.Item
                    name="fechaNacimiento"
                    label="Fecha de nacimiento"
                    className="form-item"
                    rules={[
                      { required: true, message: "Este campo es obligatorio" },
                      { validator: validateDate },
                    ]}
                  >
                    <DatePicker format="YYYY-MM-DD" />
                  </Form.Item>
                  <Form.Item
                    name="estadoCivil"
                    label="Estado civil"
                    className="form-item"
                  >
                    <Select>
                      <Option value="Casado">Casado</Option>
                      <Option value="Soltero">Soltero</Option>
                      <Option value="Divorciado">Divorciado</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="ocupacion"
                    label="Ocupación"
                    className="form-item"
                  >
                    <Select>
                      <Option value="Pensionado">Pensionado</Option>
                      <Option value="Empleado">Empleado</Option>
                      <Option value="Independiente">Independiente</Option>
                    </Select>
                  </Form.Item>
                </div>
                <Form.Item
                  name="fotografia"
                  label="Fotografía"
                  valuePropName="fileList"
                  className="form-item upload-item"
                >
                  <Upload
                    name="fotografia"
                    listType="picture"
                    beforeUpload={() => false}
                  >
                    <Button icon={<UploadOutlined />}>Subir Fotografía</Button>
                  </Upload>
                </Form.Item>
              </div>
              <div className="form-section">
                <h4>Datos de localización</h4>
                <div className="form-row">
                  <Form.Item
                    name="direccion"
                    label="Dirección"
                    className="form-item"
                    rules={[{ required: true, message: "Este campo es obligatorio" }]}
                  >
                    <Input placeholder="CLL 45 - 60-20 INT 101" />
                  </Form.Item>
                  <Form.Item
                    name="telefono"
                    label="Teléfono"
                    className="form-item"
                  >
                    <Input placeholder="315 6789 6789" />
                  </Form.Item>
                  <Form.Item
                    name="correoElectronico"
                    label="Correo electrónico"
                    className="form-item"
                  >
                    <Input placeholder="juanantonio@gmail.com" />
                  </Form.Item>
                </div>
              </div>
              <div className="form-footer">
                <Button type="default" htmlType="reset">
                  Restablecer
                </Button>
                <Button type="primary" htmlType="submit">
                  Guardar y continuar
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoUsuario;
