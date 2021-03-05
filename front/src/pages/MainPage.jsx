import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../components/Layout";
import Table from "../components/Table";
import { getAll } from "../actions/EmployeesHours.actions";

function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  return (
    <Layout>
      <Table />
    </Layout>
  );
}

export default MainPage;
