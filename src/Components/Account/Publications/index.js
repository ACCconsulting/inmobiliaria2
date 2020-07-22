import React from "react";
import {
  Row,
  Col,
  Select,
  Tag,
  Typography,
  Collapse,
  InputNumber,
  Space,
} from "antd";

const options = [
  { value: 1, label: "Sinaloa" },
  { value: 2, label: "Sonora" },
  { value: 3, label: "Chihuahua" },
  { value: 4, label: "Nuevo Leon" },
];

const optionsTo = [
  { value: 1, label: "Renta" },
  { value: 2, label: "Venta" },
];

const optionsTipoInmueblew = [
  { value: 1, label: "Casa" },
  { value: 2, label: "Departamente" },
  { value: 3, label: "Bodega" },
  { value: 4, label: "Terreno" },
  { value: 5, label: "Local" },
];

const { Text, Link } = Typography;
const { Panel } = Collapse;

function tagRender(props) {
  const { label, value, closable, onClose } = props;
  return (
    <Tag
      color="red"
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
}

const index = () => {
  const { Panel } = Collapse;
  return (
    <Row>
      <Col flex="20%">
        <Text>Estado</Text>
        <Select
          //   mode="multiple"
          tagRender={tagRender}
          //   defaultValue={[1]}
          defaultValue={1}
          style={{ width: "100%" }}
          options={options}
        />
        <Row>
          <Text>Municipio/Delegacion</Text>
          <Select
            //   mode="multiple"
            tagRender={tagRender}
            //   defaultValue={[1]}
            defaultValue={1}
            style={{ width: "100%" }}
            options={options}
          />
        </Row>
        <Row>
          <Text>Tipo de operación</Text>
          <Select
            style={{ width: "100%" }}
            mode="multiple"
            tagRender={tagRender}
            defaultValue={[1]}
            options={optionsTo}
          />
        </Row>
        <Row>
          <Text>Tipo de Inmueble</Text>
          <Select
            style={{ width: "100%" }}
            mode="multiple"
            tagRender={tagRender}
            defaultValue={[1]}
            options={optionsTipoInmueblew}
          />
        </Row>

        <Row>
          <Collapse accordion style={{ width: "100%" }}>
            <Panel header="Precio" key="1">
              <Space>
                <InputNumber
                  style={{ width: "100%" }}
                  size="small"
                  defaultValue={100000}
                  placeholder="$Min"
                  formatter={(value) =>
                    `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  // onChange={onChange}
                />
                <InputNumber
                  style={{ width: "100%" }}
                  size="small"
                  defaultValue={400000}
                  placeholder="$Min"
                  formatter={(value) =>
                    `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  // onChange={onChange}
                />
              </Space>
            </Panel>

            <Panel header="Superficie" key="2">
              <Text>Metros cuadrados</Text>
              <Select
                //   mode="multiple"
                tagRender={tagRender}
                //   defaultValue={[1]}
                defaultValue={1}
                style={{ width: "100%" }}
                options={options}
              />
              <Text>Metros frente</Text>
              <Select
                //   mode="multiple"
                tagRender={tagRender}
                //   defaultValue={[1]}
                defaultValue={1}
                style={{ width: "100%" }}
                options={options}
              />
              <Text>Metros lado</Text>
              <Select
                //   mode="multiple"
                tagRender={tagRender}
                //   defaultValue={[1]}
                defaultValue={1}
                style={{ width: "100%" }}
                options={options}
              />
            </Panel>
          </Collapse>
        </Row>
      </Col>
      <Row></Row>
      <Col flex="auto">Publicaciones</Col>
    </Row>
  );
};

export default index;
