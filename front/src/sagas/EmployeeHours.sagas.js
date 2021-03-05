import { put, takeLatest, call, all } from "redux-saga/effects";

import { ACTIONS } from "../constants/actions";
import { employeeHoursApis } from "../apis/EmployeeHours.apis";

function* getEmployeeHours() {
  const payload = yield call(employeeHoursApis.getAll);
  yield put({
    type: ACTIONS.EMPLOYEE_HOURS_SET_ALL,
    payload: payload,
  });
}

function* watchRequestGetEmployeeHours() {
  yield takeLatest(ACTIONS.EMPLOYEE_HOURS_GET_ALL, getEmployeeHours);
}

export function* employeeHoursSagas() {
  yield all([watchRequestGetEmployeeHours()]);
}
