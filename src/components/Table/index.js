import React from "react";

function Table({ tableHead, tableData, tableDataItem, tableName, typeTable }) {
  let data = tableData;
  if (typeTable) {
    const tempo = [];
    data.map(single => {
      tempo.push(single[typeTable]);
    });
    data = tempo;
  }

  return (
    <>
      <h1>{tableName}</h1>
      <table>
        <thead>
          <tr>
            {tableHead.map((column, index) => (
              <th key={index}>{column}</th>
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
                  <button typeof="button">Detalhes</button>
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
