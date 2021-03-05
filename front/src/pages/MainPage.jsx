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

function MainPage() {
  const dispatch = useDispatch();
  const employeeHours = useSelector((state) => state.employeeHours);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return (
    <Layout>
      <DatePanel />
      <Table
        data={employeeHours.data || []}
        deleteById={(id) => dispatch(deleteById(id))}
        updateById={(data) => dispatch(updateById(data))}
      />
    </Layout>
  );
}

export default MainPage;
