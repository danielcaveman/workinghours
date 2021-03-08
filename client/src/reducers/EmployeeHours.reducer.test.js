import reducer from "./EmployeeHours.reducer";
import { ACTIONS } from "../constants/actions";

describe("EmployeeHours Reducer", () => {
  it("Should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({ data: [] });
  });

  it("Should handle EMPLOYEE_HOURS_SET_ALL", () => {
    expect(
      reducer([], {
        type: ACTIONS.EMPLOYEE_HOURS_SET_ALL,
        payload: [
          {
            day: "2021-03-01T03:00:00.000Z",
            begin: "08:15",
            end: "17:12",
            lunchBegin: "12:00",
            lunchEnd: "13:00",
            total: "-1:57",
            id: 11,
          },
        ],
      })
    ).toEqual({
      data: [
        {
          day: "2021-03-01T03:00:00.000Z",
          begin: "08:15",
          end: "17:12",
          lunchBegin: "12:00",
          lunchEnd: "13:00",
          total: "-1:57",
          id: 11,
        },
      ],
    });
  });
});
