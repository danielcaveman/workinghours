import React from "react";
import { Provider } from "react-redux";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import configureStore from "redux-mock-store";
import { render, screen } from "@testing-library/react";
import DatePanel from "./DatePanel";

describe("<DatePanel />", () => {
  it("Should render DatePanel component correctly", () => {
    const initialState = { datePanel: { date: new Date() } };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    render(
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Provider store={store}>
          <DatePanel />
        </Provider>
      </MuiPickersUtilsProvider>
    );

    const Text = screen.getByRole("heading", { name: /Choose a Date/i });
    expect(Text).toBeInTheDocument();
  });

  it("Should match snapshot", () => {
    const initialState = { datePanel: { date: new Date() } };
    const mockStore = configureStore();
    const store = mockStore(initialState);

    const { container } = render(
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Provider store={store}>
          <DatePanel />
        </Provider>
      </MuiPickersUtilsProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
