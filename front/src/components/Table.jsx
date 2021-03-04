import { useState } from "react";
import styled from "styled-components";
import { DateService } from "../services/DateService";

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
  const dateService = new DateService();
  const [month, setMonth] = useState(dateService.generateMonth());
  const [days, setDays] = useState([
    {
      id: "Mon Mar 08 2021 00:00:00 GMT-0300 (Horário Padrão de Brasília)",
      begin: "08:00",
      end: "18:00",
      lunchBegin: "12:00",
      lunchEnd: "13:00",
    },
    {
      id: "Tue Mar 09 2021 00:00:00 GMT-0300 (Horário Padrão de Brasília)",
      begin: "08:00",
      end: "18:00",
      lunchBegin: "12:00",
      lunchEnd: "13:00",
    },
  ]);

  const editRow = (row) => {
    console.log(row);
  };

  const removeRow = (row) => {
    console.log(row);
  };

  return (
    <TableContainer>
      <thead>
        <tr>
          <th>Date</th>
          <th>Begin</th>
          <th>End</th>
          <th>Lunch Begin</th>
          <th>Lunch End</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {month.map((m, index) => {
          days.map((d) => {
            const isEqual = m.id == d.id;
            if (isEqual) {
              m = d;
            }
          });
          return (
            <tr key={index}>
              <td>{dateService.formatDate(m.id, "DD/MM/YYYY")}</td>
              <td>{m.begin}</td>
              <td>{m.end}</td>
              <td>{m.lunchBegin}</td>
              <td>{m.lunchEnd}</td>
              <td>
                <button onClick={() => editRow(m)}>Edit</button>
                <button onClick={() => removeRow(m)}>Remove</button>
              </td>
            </tr>
          );
        })}
      </tbody>
      {/* <tbody>
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
      </tbody> */}
    </TableContainer>
  );
}

export default Table;
