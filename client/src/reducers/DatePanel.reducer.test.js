import reducer from "./DatePanel.reducer";
import { ACTIONS } from "../constants/actions";

const INITIAL_STATE = {
  date: null,
};

describe("DatePanel Reducer", () => {
  it("Should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({ date: null });
  });

  it("Should handle DATE_PANEL_CHANGE_DATE", () => {
    const date = new Date();
    expect(
      reducer(INITIAL_STATE, {
        type: ACTIONS.DATE_PANEL_CHANGE_DATE,
        payload: date,
      })
    ).toEqual({
      date: date,
    });
  });
});
