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

const Button = styled.button`
  background-color: transparent;
  margin: 0 1rem;
  border: none;
  outline: none;
  cursor: pointer;
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
    setMonth(
      month.map((day) => {
        if (day.id == row.id) {
          row.edit = true;
          return row;
        } else {
          day.edit = false;
          return day;
        }
      })
    );
  };

  const cancelEditRow = () => {
    setMonth(
      month.map((day) => {
        day.edit = false;
        return day;
      })
    );
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
              <td>
                {m.edit ? (
                  <TimeInput type="time" id="arriving" name="arriving" />
                ) : (
                  m.begin
                )}
              </td>
              <td>{m.end}</td>
              <td>{m.lunchBegin}</td>
              <td>{m.lunchEnd}</td>
              <td>
                {!m.edit ? (
                  <Button onClick={() => editRow(m)}>
                    <span class="material-icons">edit</span>
                  </Button>
                ) : (
                  <Button onClick={() => cancelEditRow(m)}>
                    <span class="material-icons">clear</span>
                  </Button>
                )}
                <Button onClick={() => removeRow(m)}>
                  <span class="material-icons">delete</span>
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </TableContainer>
  );
}

export default Table;
