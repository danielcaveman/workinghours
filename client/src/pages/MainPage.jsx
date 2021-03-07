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

  useEffect(() => {
    const getTableData = () => {
      return month.map((m) => {
        employeeHours.data.forEach((d) => {
          const isEqual = m.day === d.day;
          if (isEqual) {
            m = d;
          }
        });
        return m;
      });
    };
    setGridData(getTableData());
  }, [employeeHours.data, month]);

  useEffect(() => {
    setMonth(dateService.generateMonth(datePanel.date));
  }, [datePanel.date]);

  return (
    <Layout>
      <DatePanel />
      <Table
        data={gridData}
        deleteById={(id) => dispatch(deleteById(id))}
        updateById={(data) => dispatch(updateById(data, expectedHours))}
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
            title: "Total",
            field: "total",
            editable: "never",
          },
        ]}
        title={dateService.formatDate(datePanel.date, "MMMM YYYY")}
        subTitle={`Expected working hours - ${8} hours`}
      />
    </Layout>
  );
}

export default MainPage;
