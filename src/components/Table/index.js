import React from "react";
import { Link } from "react-router-dom";

import { TableStyle, TitleTable } from "./styles.js";
import { MdSwapVert } from "react-icons/md";

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
          <MdSwapVert type="button" onClick={() => orderFunction(type)} />
          {column}
        </h3>
      );
    } else {
      return column;
    }
  }

  return (
    <>
      <TitleTable>{tableName}</TitleTable>
      <TableStyle>
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
      </TableStyle>
    </>
  );
}

export default Table;
