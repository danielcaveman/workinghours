import React from "react";
import MaterialTable from "material-table";

function Table({
  data,
  updateById,
  deleteById,
  columns,
  title,
  subTitle,
  isDeletable,
}) {
  return (
    <MaterialTable
      options={{
        search: false,
        actionsColumnIndex: -1,
        rowStyle: (x) => {
          if (x.tableData.id % 2) {
            return { backgroundColor: "#fafafa" };
          }
        },
      }}
      columns={columns}
      data={data}
      title={`${title}: ${subTitle}`}
      editable={{
        isDeletable: isDeletable,
        onRowUpdate: (rowData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              updateById(rowData);
              resolve();
            }, 1000);
          }),
        onRowDelete: (rowData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              deleteById(rowData);
              resolve();
            }, 1000);
          }),
      }}
    />
  );
}

export default Table;
