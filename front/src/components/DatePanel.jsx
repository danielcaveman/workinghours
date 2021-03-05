import { useReducer } from "react";
import styled from "styled-components";
import { DateRangeInput } from "@datepicker-react/styled";

const Panel = styled.div`
  display: flex;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-bottom: none;
  padding: 2rem;
  font-size: 1.6rem;
`;

const initialState = {
  startDate: null,
  endDate: null,
  focusedInput: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "focusChange":
      return { ...state, focusedInput: action.payload };
    case "dateChange":
      return action.payload;
    default:
      throw new Error();
  }
}

function DatePanel() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Panel>
      <DateRangeInput
        onDatesChange={(data) =>
          dispatch({ type: "dateChange", payload: data })
        }
        onFocusChange={(focusedInput) =>
          dispatch({ type: "focusChange", payload: focusedInput })
        }
        startDate={state.startDate} // Date or null
        endDate={state.endDate} // Date or null
        focusedInput={state.focusedInput} // START_DATE, END_DATE or null
      />
    </Panel>
  );
}

export default DatePanel;
