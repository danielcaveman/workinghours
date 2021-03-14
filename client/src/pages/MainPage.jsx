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
  const dispatch = useDispatch();
  const employeeHours = useSelector((state) => state.employeeHours);
  const datePanel = useSelector((state) => state.datePanel);
  const [month, setMonth] = useState(dateService.generateMonth());
  const [gridData, setGridData] = useState([]);
  const [expectedHours] = useState(8);

  const editComponent = (props) => (
    <TimeInput
      label="time"
      inputValue={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  useEffect(() => {
    setMonth(dateService.generateMonth(datePanel.date));
  }, [datePanel.date]);

  useEffect(() => {
    setGridData(dateService.createTableData(month, employeeHours.data));
  }, [employeeHours.data, month]);

  return (
    <Layout>
      <DatePanel />
      <Table
        data={gridData}
        deleteById={(data) => dispatch(deleteById(data))}
        updateById={(data) => dispatch(updateById(data, expectedHours))}
        isDeletable={(data) => data._id}
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
          {
            title: "Balance",
            field: "total",
            editable: "never",
          },
        ]}
        title={dateService.formatDate(
          datePanel.date || new Date(),
          "MMMM YYYY"
        )}
        subTitle={`Expected working hours - ${8} hours`}
      />
    </Layout>
  );
}

export default MainPage;
