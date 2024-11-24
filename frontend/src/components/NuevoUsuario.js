import React from "react";
import { Form, Input, Select, DatePicker, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import GlobalHeader from "./GlobalHeader"; // Importar GlobalHeader
import "../styles/NuevoUsuario.css";

const { Option } = Select;

const NuevoUsuario = () => {
  const onFinish = (values) => {
    console.log("Formulario enviado con éxito:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.error("Error en el formulario:", errorInfo);
  };

  return (
    <div>
      <GlobalHeader /> {/* Incluir la barra de navegación */}
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
                    name="idUsuario"
                    label="Id. Usuario"
                    className="form-item"
                  >
                    <Input placeholder="0001" disabled />
                  </Form.Item>
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
                  >
                    <Input placeholder="44567890" />
                  </Form.Item>
                </div>
                <div className="form-row">
                  <Form.Item
                    name="apellidos"
                    label="Apellidos"
                    className="form-item"
                  >
                    <Input placeholder="LOPEZ ORREGO" />
                  </Form.Item>
                  <Form.Item
                    name="nombres"
                    label="Nombres"
                    className="form-item"
                  >
                    <Input placeholder="JUAN ANTONIO" />
                  </Form.Item>
                  <Form.Item name="genero" label="Género" className="form-item">
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
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
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
