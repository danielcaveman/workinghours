import { deleteById } from "./EmployeesHours.actions";
import { ACTIONS } from "../constants/actions";

describe("actions", () => {
  it("should create an action to delete a registered hour", () => {
    const id = "2";
    const expectedAction = {
      type: ACTIONS.EMPLOYEE_HOURS_DELETE_BY_ID,
      id,
    };
    expect(deleteById(id)).toEqual(expectedAction);
  });
});
