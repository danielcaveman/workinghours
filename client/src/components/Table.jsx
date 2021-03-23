import React from "react";
import PropTypes from "prop-types";
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
          new Promise((resolve) => {
            setTimeout(() => {
              updateById(rowData);
              resolve();
            }, 1000);
          }),
        onRowDelete: (rowData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              deleteById(rowData);
              resolve();
            }, 1000);
          }),
      }}
    />
  );
}

Table.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  updateById: PropTypes.func,
  deleteById: PropTypes.func,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  isDeletable: PropTypes.func,
};

export default Table;
