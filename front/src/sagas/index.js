import { all } from "redux-saga/effects";
import { employeeHoursSagas } from "./EmployeeHours.sagas";

function* sagas() {
  yield all([employeeHoursSagas()]);
}

export { sagas };
