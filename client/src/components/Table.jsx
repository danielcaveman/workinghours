import React from "react";
import { useState } from "react";
import MaterialTable from "material-table";
import { DateService } from "../services/DateService";
import TimeInput from "./TimeInput";

function Table({ data, updateById, deleteById }) {
  const dateService = new DateService();
  const [month] = useState(dateService.generateMonth());

  const deleteRow = (id) => {
    id && deleteById(id);
  };

  const getTableData = () => {
    return month.map((m, index) => {
      data.forEach((d) => {
        const isEqual = m.day === d.day;
        if (isEqual) {
          m = d;
        }
      });
      return m;
    });
  };

  const editComponent = (props) => (
    <TimeInput
      type="text"
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );

  return (
    <>
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
        columns={[
          {
            title: "Day",
            field: "day",
            render: (rowData) =>
              dateService.formatDate(rowData.day, "MM/DD/YYYY"),
            editable: "never",
          },
          {
            title: "Begin",
            field: "begin",
            editComponent: editComponent,
          },
          {
            title: "Lunch Begin",
            field: "lunchBegin",
            editComponent: editComponent,
          },
          {
            title: "Lunch End",
            field: "lunchEnd",
            editComponent: editComponent,
          },
          {
            title: "End",
            field: "end",
            editComponent: editComponent,
          },
        ]}
        data={getTableData()}
        title="Month and Year"
        editable={{
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
                deleteRow(rowData.id);
                resolve();
              }, 1000);
            }),
        }}
      />
    </>
  );
}

export default Table;
