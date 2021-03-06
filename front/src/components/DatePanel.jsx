import styled from "styled-components";

const Panel = styled.div`
  display: flex;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-bottom: none;
  padding: 2rem;
  font-size: 1.6rem;
`;

function DatePanel() {
  return <Panel></Panel>;
}

export default DatePanel;
