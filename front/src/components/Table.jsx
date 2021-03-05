import { useState } from "react";
import styled from "styled-components";
import { DateService } from "../services/DateService";
import Button from "./Button";

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

function Table({ data, deleteById }) {
  const dateService = new DateService();
  const [month] = useState(dateService.generateMonth());

  const editRow = (row) => {
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
          data.forEach((d) => {
            const isEqual = m.day == d.day;
            if (isEqual) {
              m = d;
            }
          });
          return (
            <tr key={index}>
              <td>{dateService.formatDate(m.day, "DD/MM/YYYY")}</td>
              <td>{m.begin}</td>
              <td>{m.end}</td>
              <td>{m.lunchBegin}</td>
              <td>{m.lunchEnd}</td>
              <td>
                <Button onClick={() => editRow(m)} icon="edit" />
                <Button onClick={() => deleteById(m.id)} icon="delete" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </TableContainer>
  );
}

export default Table;
