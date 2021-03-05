import { useState } from "react";
import styled from "styled-components";
import { DateService } from "../services/DateService";
import Button from "./Button";
import TimeInput from "./TimeInput";

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

function Table({ data }) {
  const dateService = new DateService();
  const [month, setMonth] = useState(dateService.generateMonth());

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

  const confirm = (row) => {
    setMonth(
      month.map((day) => {
        day.edit = false;
        return day;
      })
    );
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
          data.map((d) => {
            const isEqual = m.id == d.id;
            if (isEqual) {
              m = d;
            }
          });
          return (
            <tr key={index}>
              <td>{dateService.formatDate(m.id, "DD/MM/YYYY")}</td>
              <td>
                {<TimeInput edit={m.edit} value={m.begin} name="begin" />}
              </td>
              <td>{<TimeInput edit={m.edit} value={m.end} name="end" />}</td>
              <td>
                {<TimeInput edit={m.edit} value={m.begin} name="lunchBegin" />}
              </td>
              <td>
                {<TimeInput edit={m.edit} value={m.lunchEnd} name="lunchEnd" />}
              </td>
              <td>
                {m.edit ? (
                  <>
                    <Button
                      color="#ff3300"
                      onClick={() => cancelEditRow(m)}
                      icon="clear"
                    />
                    <Button
                      color="#33cc33"
                      onClick={() => confirm(m)}
                      icon="check"
                    />
                  </>
                ) : (
                  <>
                    <Button onClick={() => editRow(m)} icon="edit" />
                    <Button onClick={() => removeRow(m)} icon="delete" />
                  </>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </TableContainer>
  );
}

export default Table;
