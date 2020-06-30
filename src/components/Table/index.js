import React from "react";
import { Link } from "react-router-dom";
import { FaSortAmountUpAlt } from "react-icons/fa";

function Table({
  tableHead,
  tableData,
  tableDataItem,
  tableName,
  typeTable,
  orderFunction,
}) {
  let data = tableData;

  if (typeTable) {
    let tempo = [];
    data.forEach(single => {
      tempo.push(single[typeTable]);
    });
    data = tempo;
  }

  function order(column, orderFunction) {
    if (column === "Id" || column === "Idade") {
      let type = column === "Idade" ? "age" : "id";
      return (
        <h3>
          <FaSortAmountUpAlt
            type="button"
            onClick={() => orderFunction(type)}
          />
          {column}
        </h3>
      );
    } else {
      return column;
    }
  }

  return (
    <>
      <h1>{tableName}</h1>
      <table>
        <thead>
          <tr>
            {tableHead.map((column, index) => (
              <th key={index}>
                {orderFunction ? order(column, orderFunction) : column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(singleData => (
            <tr key={singleData.id}>
              {tableDataItem.map((nameItem, index) => (
                <td key={index}>{singleData[nameItem]}</td>
              ))}
              {tableHead.indexOf("Ações") !== -1 ? (
                <td key={"btnDetails"}>
                  <Link key={singleData.id} to={`/user/${singleData.id}`}>
                    <button typeof="button">Detalhes</button>
                  </Link>
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
