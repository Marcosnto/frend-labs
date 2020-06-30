import React, { useState, useEffect } from "react";

import Table from "../../components/Table";
import api from "../../services/api";

let orderAge = false;
let orderId = false;

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/users").then(response => {
      setData(response.data);
    });
  }, []);

  function order(type) {
    console.log(type);
    switch (type) {
      case "id":
        if (orderId === false) {
          const order = data.sort((a, b) => a.id - b.id);
          setData([...order]);
          orderId = true;
        } else if (orderId === true) {
          const desorder = data.reverse();
          setData([...desorder]);
          orderId = false;
        }
        break;

      case "age":
        if (orderAge === false) {
          const order = data.sort((a, b) => a.age - b.age);
          setData([...order]);
          orderAge = true;
        } else if (orderAge === true) {
          const desorder = data.reverse();
          setData([...desorder]);
          orderAge = false;
        }
        break;

      default:
        console.log("Error in sort");
    }
  }

  const tableHead = ["Id", "Nome", "Idade", "Email", "Ações"];
  const tableDataItem = ["id", "name", "age", "email"];
  return (
    <>
      <h1>Supply Labs</h1>
      <Table
        tableHead={tableHead}
        tableData={data}
        tableDataItem={tableDataItem}
        tableName={"Usuários"}
        orderFunction={order}
      />
    </>
  );
}

export default Home;
