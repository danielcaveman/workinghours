import styled from "styled-components";

const TableContainer = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  thead > tr {
    background-color: #fff;
    text-align: left;
  }

  tbody > tr {
    background-color: #fff;
  }
`;

const TimeInput = styled.input`
  border: 0;
  outline: 0;
  border-bottom: 2px solid;

  &:focus {
    border-bottom: 2px solid #5eabf2;
  }

  &::-webkit-calendar-picker-indicator {
    background: none;
    display: none;
  }
`;

function Table() {
  return (
    <TableContainer>
      <thead>
        <tr>
          <th>Date</th>
          <th>Begin</th>
          <th>End</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>03/03/2021</td>
          <td>
            <TimeInput
              type="time"
              id="arriving"
              name="arriving"
              min="09:00"
              max="18:00"
            />
          </td>
          <td>18:00</td>
          <td>8:00h</td>
        </tr>
        <tr>
          <td>04/03/2021</td>
          <td>08:00</td>
          <td>18:00</td>
          <td>8:00h</td>
        </tr>
        <tr>
          <td>05/03/2021</td>
          <td>08:00</td>
          <td>18:00</td>
          <td>8:00h</td>
        </tr>
      </tbody>
    </TableContainer>
  );
}

export default Table;
