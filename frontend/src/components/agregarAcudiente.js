import React from "react";
import { Form, Input, Select, Button, message, Checkbox } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import GlobalHeader from "./GlobalHeader";
import axios from "axios";
import "../styles/agregarAcudiente.css";

const { Option } = Select;

const AgregarAcudiente = () => {
  const { id_usuario } = useParams(); // Obtener el ID del usuario/paciente desde la URL
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      // Enviar datos al backend con el ID del usuario
      const response = await axios.post(`http://localhost:5000/api/guardians`, {
        id_usuario, // Enviar el ID del usuario correctamente
        parentesco: values.parentesco,
        vive: values.vive === "Sí",
        n_documento: values.nDocumento,
        nombres: values.nombres,
        apellidos: values.apellidos,
        direccion: values.direccion,
        telefono: values.telefono,
        correo_electronico: values.correoElectronico,
        marcadores: {
          acudiente: values.marcadorAcudiente || false,
          facturacion: values.marcadorFacturacion || false,
        },
      });

      if (response.status === 201) {
        message.success("Acudiente registrado exitosamente.");
        navigate(`/detalle-usuario/${id_usuario}`); // Redirigir al detalle del usuario
      }
    } catch (error) {
      console.error("Error al registrar el acudiente:", error);
      message.error(
        error.response?.data?.message ||
          "Hubo un problema al registrar el acudiente."
      );
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.error("Error en el formulario:", errorInfo);
    errorInfo.errorFields.forEach((field) => {
      console.error(`Campo fallido: ${field.name}, Mensaje: ${field.errors}`);
    });
    message.error("Por favor, complete todos los campos obligatorios.");
  };

  return (
    <div>
      <GlobalHeader />
      <div className="agregar-acudiente-page">
        <div className="card-legacy">
          <div className="head">
            <h3>Agregar Acudiente o Familiar</h3>
          </div>
          <div className="body">
            <Form
              layout="vertical"
              name="agregar-acudiente"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              initialValues={{
                vive: "Sí", // Valor predeterminado para el campo 'vive'
              }}
            >
              <div className="form-section">
                <h4>Datos básicos del acudiente</h4>
                <div className="form-row">
                  <Form.Item
                    name="parentesco"
                    label="Parentesco"
                    rules={[
                      { required: true, message: "Este campo es obligatorio." },
                    ]}
                  >
                    <Select placeholder="Seleccione un parentesco">
                      <Option value="Padre/Madre">Padre/Madre</Option>
                      <Option value="Hijo">Hijo</Option>
                      <Option value="Hermano">Hermano</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="vive"
                    label="¿Vive?"
                    rules={[
                      { required: true, message: "Este campo es obligatorio." },
                    ]}
                  >
                    <Select placeholder="Seleccione una opción">
                      <Option value="Sí">Sí</Option>
                      <Option value="No">No</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="nDocumento"
                    label="N° Documento"
                    rules={[
                      { required: true, message: "Este campo es obligatorio." },
                    ]}
                  >
                    <Input placeholder="Número de documento" />
                  </Form.Item>
                </div>
                <div className="form-row">
                  <Form.Item
                    name="nombres"
                    label="Nombres"
                    rules={[
                      { required: true, message: "Este campo es obligatorio." },
                    ]}
                  >
                    <Input placeholder="Nombres" />
                  </Form.Item>
                  <Form.Item
                    name="apellidos"
                    label="Apellidos"
                    rules={[
                      { required: true, message: "Este campo es obligatorio." },
                    ]}
                  >
                    <Input placeholder="Apellidos" />
                  </Form.Item>
                </div>
              </div>
              <div className="form-section">
                <h4>Datos de localización</h4>
                <div className="form-row">
                  <Form.Item
                    name="direccion"
                    label="Dirección"
                    rules={[
                      { required: true, message: "Este campo es obligatorio." },
                    ]}
                  >
                    <Input placeholder="Dirección" />
                  </Form.Item>
                  <Form.Item name="telefono" label="Teléfono">
                    <Input placeholder="Teléfono" />
                  </Form.Item>
                  <Form.Item name="correoElectronico" label="Correo Electrónico">
                    <Input placeholder="Correo Electrónico" />
                  </Form.Item>
                </div>
              </div>
              <div className="form-section">
                <h4>Otros datos</h4>
                <Checkbox.Group>
                  <Checkbox value="acudiente" name="marcadorAcudiente">
                    Marcar como acudiente
                  </Checkbox>
                  <Checkbox value="facturacion" name="marcadorFacturacion">
                    Marcar para facturación
                  </Checkbox>
                </Checkbox.Group>
              </div>
              <div className="form-footer">
                <Button type="default" htmlType="reset">
                  Restablecer
                </Button>
                <Button type="primary" htmlType="submit">
                  Guardar
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgregarAcudiente;
