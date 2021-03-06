import React from "react";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import MomentUtils from "@date-io/moment";
import createSagaMiddleware from "redux-saga";
import ReduxToastr from "react-redux-toastr";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import reducers from "../reducers/index";
import { sagas } from "../sagas/index";
import theme from "../theme";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);

function Providers(props) {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Provider store={store}>
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-right"
          getState={(state) => state.toastr}
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        />
        <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
      </Provider>
    </MuiPickersUtilsProvider>
  );
}

export default Providers;
