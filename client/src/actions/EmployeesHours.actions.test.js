import { getAll, deleteById, updateById } from "./EmployeesHours.actions";
import { ACTIONS } from "../constants/actions";

describe("EmployeeHoursActions", () => {
  it("Should create an action to get a registered hours", () => {
    const expectedAction = {
      type: ACTIONS.EMPLOYEE_HOURS_GET_ALL,
    };
    expect(getAll()).toEqual(expectedAction);
  });

  it("Should create an action to delete a registered hour", () => {
    const id = "2";
    const expectedAction = {
      type: ACTIONS.EMPLOYEE_HOURS_DELETE_BY_ID,
      id,
    };
    expect(deleteById(id)).toEqual(expectedAction);
  });

  it("Should create an action to update a registered hour", () => {
    const data = {
      day: "2021-03-01T03:00:00.000Z",
      begin: "08:15",
      end: "17:12",
      lunchBegin: "12:00",
      lunchEnd: "13:00",
    };
    const expectedHours = 8;
    const expectedAction = {
      type: ACTIONS.EMPLOYEE_HOURS_UPDATE_BY_ID,
      data,
      expectedHours,
    };
    expect(updateById(data, expectedHours)).toEqual(expectedAction);
  });
});
