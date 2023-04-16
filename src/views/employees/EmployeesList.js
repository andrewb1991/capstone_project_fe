import React from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from "axios";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "../products/useFetch";
import { useState } from "react";
const EmployeesList = () => {
  const navigate = useNavigate();
  const { data, loading } = useFetch(`http://localhost:7070/auth/employees`);
  console.log(data);
  const handleBackPage = () => {
    navigate("/homeemployee");
  };
  const [fullscreenXlModal, setFullscreenXlModal] = useState(false);
  const toggleShow = () => setFullscreenXlModal(!fullscreenXlModal);
  const [newEmployeeForm, setNewEmployeeForm] = useState({});

  const addNewEmployee = async (e) => {
    const newEmployee = {
      code: newEmployeeForm.code,
      name: newEmployeeForm.name,
      surname: newEmployeeForm.surname,
      email: newEmployeeForm.email,
      password: newEmployeeForm.password,
    };
    e.preventDefault();
    await axios
      .post("http://localhost:7070/register/employees/", newEmployee)
      .then((response) => {
        if (response.status === 200) {
          window.confirm("Aggiungere il dipendente?");
          window.location.reload(true);
          navigate("/manageemployess");
        } else {
          return alert("Invalid Product Form");
        }
      });
  };

  const deleteEmployee = (_id, e) => {
    e.preventDefault();
    axios.delete(`http://localhost:7070/auth/employees/${_id}`).then((response) => {
      if (response.status === 200) {
        navigate("/manageemployess");
        window.location.reload(true);
      }
    });
  };


  const deleteSubmit = (_id, e) => {
    confirmAlert({
      title: `Elimina`,
      message: 'Vuoi eliminare il dipendente?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => deleteEmployee(_id, e) 
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    });
  }


  return (
    <>
      <h1 className="text-primary m-3">Gestione Dipendenti</h1>
      <div className="d-flex flex-wrap ">
        <MDBBtn
          onClick={handleBackPage}
          className="mx-2 text-xl-left"
          color="secondary"
        >
          <i class="fa-solid fa-circle-arrow-left fa-2xl"></i>
        </MDBBtn>
      <MDBBtn
        className="mx-2 text-xl-left"
        color="secondary"
        onClick={toggleShow}
      >
        Aggiungi Nuovo
      </MDBBtn>
      </div>
      <MDBModal
        tabIndex="-1"
        show={fullscreenXlModal}
        setShow={setFullscreenXlModal}
      >
        <MDBModalDialog size="fullscreen-lg-down">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle className="text-success">
                Aggiungi Dipendente
              </MDBModalTitle>
              <MDBBtn
                type="button"
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody className="text-primary">
              <form>
                <MDBInput
                  onChange={(e) =>
                    setNewEmployeeForm({
                      ...newEmployeeForm,
                      code: e.target.value,
                    })
                  }
                  className="text-primary"
                  wrapperClass="mb-4"
                  id="form6Example3"
                  label="code"
                />
                <MDBInput
                  onChange={(e) =>
                    setNewEmployeeForm({
                      ...newEmployeeForm,
                      name: e.target.value,
                    })
                  }
                  wrapperClass="mb-4"
                  id="typeURL"
                  type="text"
                  label="Nome"
                />
                <MDBInput
                  onChange={(e) =>
                    setNewEmployeeForm({
                      ...newEmployeeForm,
                      surname: e.target.value,
                    })
                  }                  className="text-primary"
                  wrapperClass="mb-4"
                  type="surname"
                  id="form6Example5"
                  label="Cognome"
                />
                <MDBInput
                  onChange={(e) =>
                    setNewEmployeeForm({
                      ...newEmployeeForm,
                      email: e.target.value,
                    })
                  }                  className="text-primary"
                  wrapperClass="mb-4"
                  type="email"
                  id="form6Example6"
                  label="Email"
                />

                <MDBInput
                  onChange={(e) =>
                    setNewEmployeeForm({
                      ...newEmployeeForm,
                      password: e.target.value,
                    })
                  }                  className="text-primary"
                  wrapperClass="mb-4"
                  textarea
                  type="password"
                  id="form6Example7"
                  rows={4}
                  label="Password"
                />
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn className="mx-2" color="success" onClick={addNewEmployee}>
                Aggiungi
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <MDBTable align="middle">
        <MDBTableHead>
          <tr className="text-primary">
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Ruolo</th>
            <th scope="col">Modifica</th>
            <th scope="col">Elimina</th>
          </tr>
        </MDBTableHead>
        {!loading &&
          data &&
          data.map((employee) => {
            return (
              <>
                <MDBTableBody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="ms-3">
                          <p className="fw-bold text-center mb-1">
                            {employee.code}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">
                        {employee.name} {employee.surname}
                      </p>
                      <p className="text-muted mb-0">{employee.email}</p>
                    </td>
                    <td>
                      <h5>
                        {" "}
                        <MDBBadge color="success" pill>
                          {employee.role}
                        </MDBBadge>
                      </h5>
                    </td>
                    <td>
                      {" "}
                      <MDBBtn color='secondary' rounded size="sm">
                        <i class="fa-solid fa-pen-to-square fa-xl"></i>
                      </MDBBtn>
                    </td>
                    <td>
                      <MDBBtn color="danger"
                        rounded
                        size="sm" onClick={(e) =>deleteSubmit(employee._id, e)}>
                        <i class="fa-solid fa-trash fa-xl"></i>
                      </MDBBtn>
                    </td>
                  </tr>
                </MDBTableBody>
              </>
            );
          })}
      </MDBTable>
    </>
  );
};

export default EmployeesList;
