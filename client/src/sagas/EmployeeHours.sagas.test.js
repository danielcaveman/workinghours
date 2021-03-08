import regeneratorRuntime from "regenerator-runtime";
import { put, call } from "redux-saga/effects";
import { getEmployeeHours } from "./EmployeeHours.sagas";
import { employeeHoursApis } from "../apis/EmployeeHours.apis";

describe("Should test EmployeeHours Sagas functions", () => {
  it("Should load the employees hours and handle them in case of success:", () => {
    const mockedHour = [
      {
        day: "2021-03-01T03:00:00.000Z",
        begin: "08:15",
        end: "17:12",
        lunchBegin: "12:00",
        lunchEnd: "13:00",
        total: "-1:57",
        id: 11,
      },
    ];
    const generator = getEmployeeHours();
    expect(generator.next().value).toEqual(call(employeeHoursApis.getAll));
    expect(generator.next(mockedHour).value).toEqual(
      put({ type: "EMPLOYEE_HOURS_SET_ALL", payload: mockedHour })
    );
  });
});
