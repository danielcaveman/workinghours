import { changeDate } from "./DatePanel.actions";
import { ACTIONS } from "../constants/actions";

describe("DatePanelActions", () => {
  it("Should create an action to change date panel's date", () => {
    const date = new Date();
    const expectedAction = {
      type: ACTIONS.DATE_PANEL_CHANGE_DATE,
      payload: date,
    };
    expect(changeDate(date)).toEqual(expectedAction);
  });
});
