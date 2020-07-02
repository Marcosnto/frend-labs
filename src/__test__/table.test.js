import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Table from "../components/Table";

import Maps from "../components/Maps";

test("Create Table", () => {
  let wrapper = false;
  const tableData = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      age: 19,
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    {
      id: 2,
      name: "Leanne Graham",
      username: "Bret",
      age: 19,
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
  ];

  wrapper = render(
    <MemoryRouter>
      <Table
        tableHead={["Id", "Nome", "Sobrenome", "Idade", "Email", "Ações"]}
        tableData={tableData}
        tableDataItem={["id", "name", "surname", "age", "email"]}
        tableName={"Usuários"}
        orderFunction={[]}
      />{" "}
    </MemoryRouter>
  );
  expect(wrapper).toBeTruthy();
});

test("Create Map", () => {
  let maps = false;

  maps = render(<Maps />);

  expect(maps).toBeTruthy();
});
