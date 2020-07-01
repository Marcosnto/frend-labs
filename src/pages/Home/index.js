import React, { useState, useEffect } from "react";

import Table from "../../components/Table";
import api from "../../services/api";

import { Title, Pagination } from "./styles.js";

//Variables for sort
let orderAge = false;
let orderId = false;

function Home() {
  const [data, setData] = useState([]);
  const [totalUsers, setTotalUsers] = useState([]);
  const [initialPages, setInitialPages] = useState(0);
  const [endPages, setEndPages] = useState(5);
  const postsPerPage = 5;

  useEffect(() => {
    api.get("/users").then(response => {
      setTotalUsers(response.data.length);
    });
  }, [data]);

  useEffect(() => {
    api.get(`/users?_start=${initialPages}&_end=${endPages}`).then(response => {
      setData(response.data);
    });
  }, [endPages, initialPages]);

  //Sort id/age
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

  //Table variables
  const tableHead = ["Id", "Nome", "Idade", "Email", "Ações"];
  const tableDataItem = ["id", "name", "age", "email"];

  //Pagination
  let pages = [],
    startPage = "",
    endPage = "";

  const totalPages = Math.ceil(totalUsers / postsPerPage);

  function pagination(page) {
    if (page === 1) {
      startPage = 0;
      endPage = postsPerPage;
    } else {
      endPage = page * (totalPages + 1);
      startPage = endPage - postsPerPage;
    }
    setInitialPages(startPage);
    setEndPages(endPage);
  }

  for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
    pages.push(
      <li>
        <button onClick={() => pagination(pageNumber)}>{pageNumber}</button>
      </li>
    );
  }

  return (
    <>
      <Title>Supply Labs</Title>
      <Table
        tableHead={tableHead}
        tableData={data}
        tableDataItem={tableDataItem}
        tableName={"Usuários"}
        orderFunction={order}
      />
      <Pagination>{pages}</Pagination>
    </>
  );
}

export default Home;
