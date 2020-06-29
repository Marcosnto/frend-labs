import React from "react";

import Table from "../../components/Table";

const state = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    age: 19,
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    age: 23,
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    age: 49,
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
];

function User() {
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
        tableData={state}
        tableName={"Usuário"}
      />
      <Table
        tableHead={tableAdress}
        tableDataItem={dataTableAdress}
        tableData={state}
        typeTable={"address"}
        tableName={"Endereço"}
      />
      <Table
        tableHead={tableCompany}
        tableDataItem={dataTableCompany}
        tableData={state}
        typeTable={"company"}
        tableName={"Empresa"}
      />
    </>
  );
}

export default User;
