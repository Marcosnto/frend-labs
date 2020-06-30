import React, { useState, useEffect } from "react";

import Table from "../../components/Table";
import api from "../../services/api";
import { useRouteMatch } from "react-router-dom";

function User() {
  const [user, setUser] = useState([]);

  const { params } = useRouteMatch("/user/:id");

  useEffect(() => {
    api.get(`users/${params.id}`).then(response => {
      setUser([response.data]);
    });
  }, [params.id]);

  console.log(user);
  //user
  const tableUser = [
    "Id",
    "Nome",
    "UserName",
    "Idade",
    "Email",
    "Telefone",
    "Site",
  ];
  const dataTableUser = [
    "id",
    "name",
    "username",
    "age",
    "email",
    "phone",
    "website",
  ];

  //adress
  const tableAdress = ["Rua", "Número", "Cidade", "CEP"];
  const dataTableAdress = ["street", "suite", "city", "zipcode"];

  //company
  const tableCompany = ["Empresa", "Logo", "Bs"];
  const dataTableCompany = ["name", "catchPhrase", "bs"];

  return (
    <>
      <h1>Detalhes</h1>
      <Table
        tableHead={tableUser}
        tableDataItem={dataTableUser}
        tableData={user}
        tableName={"Usuário"}
      />
      <Table
        tableHead={tableAdress}
        tableDataItem={dataTableAdress}
        tableData={user}
        typeTable={"address"}
        tableName={"Endereço"}
      />
      <Table
        tableHead={tableCompany}
        tableDataItem={dataTableCompany}
        tableData={user}
        typeTable={"company"}
        tableName={"Empresa"}
      />
    </>
  );
}

export default User;
