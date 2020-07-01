import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import api from "../../services/api";
import extractSurname from "../../utils/extractSurname";

import { BtnBackHome, Title } from "./style";
import Table from "../../components/Table";

function User() {
  const [user, setUser] = useState([]);

  const { params } = useRouteMatch("/user/:id");

  useEffect(() => {
    api.get(`users/${params.id}`).then(response => {
      let user = extractSurname([response.data]);
      setUser(user);
    });
  }, [params.id]);

  //user
  const tableUser = [
    "Id",
    "Nome",
    "Sobrenome",
    "UserName",
    "Idade",
    "Email",
    "Telefone",
    "Site",
  ];
  const dataTableUser = [
    "id",
    "name",
    "surname",
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
      <Title>Detalhes</Title>
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
      <BtnBackHome>
        <button>
          <Link key="btnBackHome" to="/">
            Voltar
          </Link>
        </button>
      </BtnBackHome>
    </>
  );
}

export default User;
