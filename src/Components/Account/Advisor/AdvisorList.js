import React, { Fragment } from "react";
import { Link, useHistory } from "react-router-dom";

import { Table, Tag, Space, Divider, Button, Tooltip, Popconfirm } from "antd";

import { PlusOutlined } from "@ant-design/icons";

const AdvisorList = () => {
  const history = useHistory(); //Habilitar histori para redireccion

  const Editar = (id) => {
    console.log(id);
    history.push(`/advisor/edit/${id}`);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Fragment>
          <Button type="link" onClick={() => Editar(record.age)}>
            Editar
          </Button>
          <Popconfirm
            title="¿Estas seguro de eliminar el registro?"
            okText="Si"
            cancelText="No"
          >
            <Button type="link" danger>
              Eliminar
            </Button>
          </Popconfirm>
        </Fragment>
      ),
    },
  ];

  //   const data = [
  //     {
  //       key: "1",
  //       name: "John Brown",
  //       age: 32,
  //       address: "New York No. 1 Lake Park",
  //       tags: ["nice", "developer"],
  //     },
  //     {
  //       key: "2",
  //       name: "Jim Green",
  //       age: 42,
  //       address: "London No. 1 Lake Park",
  //       tags: ["loser"],
  //     },
  //     {
  //       key: "3",
  //       name: "Joe Black",
  //       age: 32,
  //       address: "Sidney No. 1 Lake Park",
  //       tags: ["cool", "teacher"],
  //     },
  //   ];

  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
      tags: ["cool", "teacher"],
    });
  }

  return (
    <Fragment>
      <Tooltip title="Crear nuevo">
        <Link to="/advisor/create">
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
          ></Button>
        </Link>
      </Tooltip>
      <Divider />
      <Table
        columns={columns}
        dataSource={data}
        size="small"
        pagination={{ pageSize: 8 }}
        // scroll={{ y: 400 }}
      />
    </Fragment>
  );
};
export default AdvisorList;
