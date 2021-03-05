import { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { DateService } from "../services/DateService";
import Button from "./Button";

Modal.setAppElement("#root");

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
  const [modalIsOpen, setIsOpen] = useState(false);
  const [rowActive, setRowActive] = useState({});

  function openModal(row) {
    setRowActive(row);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
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
                  <Button onClick={() => openModal(m)} icon="edit" />
                  <Button onClick={() => deleteById(m.id)} icon="delete" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </TableContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
      >
        <h2>{dateService.formatDate(rowActive.day, "DD/MM/YYYY")}</h2>
        <form>
          <Button onClick={closeModal} color="grey" icon="clear" />
          <Button color="green" icon="check" />
        </form>
      </Modal>
    </>
  );
}

export default Table;
