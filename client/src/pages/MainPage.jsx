import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../components/Layout";
import Table from "../components/Table";
import DatePanel from "../components/DatePanel";
import {
  getAll,
  deleteById,
  updateById,
} from "../actions/EmployeesHours.actions";
import { DateService } from "../services/DateService";
import TimeInput from "../components/TimeInput";

function MainPage() {
  const dateService = new DateService();
  const [month] = useState(dateService.generateMonth());
  const dispatch = useDispatch();
  const employeeHours = useSelector((state) => state.employeeHours);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  const editComponent = (props) => (
    <TimeInput
      type="text"
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );

  const getTableData = () => {
    return month.map((m, index) => {
      employeeHours.data.forEach((d) => {
        const isEqual = m.day === d.day;
        if (isEqual) {
          m = d;
        }
      });
      return m;
    });
  };

  return (
    <Layout>
      <DatePanel />
      <Table
        data={getTableData()}
        deleteById={(id) => dispatch(deleteById(id))}
        updateById={(data) => dispatch(updateById(data))}
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
        title="Month and Year"
      />
    </Layout>
  );
}

export default MainPage;
