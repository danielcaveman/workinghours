import regeneratorRuntime from "regenerator-runtime";
import { put, call } from "redux-saga/effects";
import {
  getEmployeeHours,
  deleteEmployeeHours,
  updateEmployeeHours,
} from "./EmployeeHours.sagas";
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

  it("Should delete the employees hours and handle them in case of success:", () => {
    const generator = deleteEmployeeHours({ id: "2" });
    expect(generator.next().value).toEqual(
      call(employeeHoursApis.deleteById, "2")
    );
  });

  it("Should update the employees hours and handle them in case of success:", () => {
    const generator = updateEmployeeHours({
      data: {
        day: "2021-03-01T03:00:00.000Z",
        begin: "08:15",
        end: "17:12",
        lunchBegin: "12:00",
        lunchEnd: "13:00",
        total: "-1:57",
        id: 11,
      },
      expectedHours: 8,
    });
    expect(generator.next().value).toEqual(
      call(
        employeeHoursApis.updateById,
        {
          day: "2021-03-01T03:00:00.000Z",
          begin: "08:15",
          end: "17:12",
          lunchBegin: "12:00",
          lunchEnd: "13:00",
          total: "-1:57",
          id: 11,
        },
        8
      )
    );
  });
});
