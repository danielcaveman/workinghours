import { useState } from "react";
import styled from "styled-components";
import { Formik } from "formik";
import Modal from "react-modal";
import { DateService } from "../services/DateService";
import Button from "./Button";
import TimeInput from "./TimeInput";

Modal.setAppElement("#root");
Modal.defaultStyles.overlay.backgroundColor = "rgb(40 40 40 / 75%)";

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

const ModalInputs = styled.div`
  margin: 2rem 0%;
  display: flex;
  justify-content: space-between;
`;

const ModalActions = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
`;

function Table({ data, updateById, deleteById }) {
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

  const deleteRow = (id) => {
    id && deleteById(id);
  };

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
              const isEqual = m.day === d.day;
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
                  <Button onClick={() => deleteRow(m.id)} icon="delete" />
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
        <Formik
          initialValues={rowActive}
          validate={(values) => {
            const errors = {};
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              updateById(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <ModalInputs>
                <TimeInput
                  id="begin"
                  onChange={handleChange}
                  label="Begin"
                  name="begin"
                  value={values.begin}
                />
                <TimeInput
                  id="end"
                  onChange={handleChange}
                  label="End"
                  name="end"
                  value={values.end}
                />
                <TimeInput
                  id="lunchBegin"
                  onChange={handleChange}
                  label="Lunch Begin"
                  name="lunchBegin"
                  value={values.lunchBegin}
                />
                <TimeInput
                  id="lunchEnd"
                  onChange={handleChange}
                  label="Lunch End"
                  name="lunchEnd"
                  value={values.lunchEnd}
                />
              </ModalInputs>
              <ModalActions>
                <Button onClick={closeModal} color="grey" icon="clear" />
                <Button color="green" icon="check" />
              </ModalActions>
            </form>
          )}
        </Formik>
      </Modal>
    </>
  );
}

export default Table;
