import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../components/Layout";
import Table from "../components/Table";
import { getAll, deleteById } from "../actions/EmployeesHours.actions";

function MainPage() {
  const dispatch = useDispatch();
  const employeeHours = useSelector((state) => state.employeeHours);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return (
    <Layout>
      <Table
        data={employeeHours.data || []}
        deleteById={(id) => dispatch(deleteById(id))}
      />
    </Layout>
  );
}

export default MainPage;
