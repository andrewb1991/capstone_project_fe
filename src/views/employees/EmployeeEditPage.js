import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBContainer,
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const EmployeeEditPage = () => {
  const [singleEmployee, setSingleEmployee] = useState(null)
  const [editEmployeeForm, setEditEmployeeForm] = useState({});
  const handleBackPage = () => {
    navigate("/manageemployess");
  };

  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const getSingleEmployee = async () => {
    const data = await fetch(`http://localhost:7070/auth/employees/${id}`)
    const response = await data.json()
    setSingleEmployee(response)
    console.log(response)
  }
    useEffect(()=>{
    getSingleEmployee()
    },[])

    const editEmployee = async (e, _id) => {
      const editEmployee = {
        name: editEmployeeForm.name,
        surname: editEmployeeForm.surname,
        email: editEmployeeForm.email,
      };
      await axios
        .patch(`http://localhost:7070/auth/employees/${_id}`, editEmployee)
        .then((response) => {
          if (response.status === 200) {
            alert("Dipendente modificato con successo!")
            navigate("/manageemployess");
          } else {
            return alert("Invalid Product Form");
          }
        });
    };

    const editEmployeeSubmit = (_id, e) =>{
      confirmAlert({
        title: `Modifica`,
        message: `Vuoi modificare il dipendente ${singleEmployee._id}?`,
        className: "text-primary",
        buttons: [
          {
            label: "Yes",
            onClick: () => editEmployee(_id, e),
          },
          {
            label: "No",
            onClick: () => alert("Click No"),
          },
        ],
      })
      }


  return (
<>
<div className="d-flex container align-content-between">        <MDBBtn
          onClick={handleBackPage}
          className="mx-2 text-xl-left"
          color="secondary"
        >
          <i class="fa-solid fa-circle-arrow-left fa-2xl"></i>
        </MDBBtn>
        <h1 className="text-primary text-center">Modifica {singleEmployee && singleEmployee.name} {singleEmployee &&singleEmployee.surname}</h1>

        </div>

     <MDBContainer className="d-flex col-1">
      <div>
        <form>
          <label className="text-success">
          Nome:
         <input className="mb-2 text-primary" type="text" defaultValue={singleEmployee && singleEmployee.name} onChange={(e) =>
                setEditEmployeeForm({
                  ...editEmployeeForm,
                  name: e.target.value,
                })
              }/>
              </label>
              <label className="text-success">
          Cognome:
         <input className="mb-2 text-primary" type="text" defaultValue={singleEmployee && singleEmployee.surname} onChange={(e) =>
                setEditEmployeeForm({
                  ...editEmployeeForm,
                  surname: e.target.value,
                })
              }/>
              </label>
              <label className="text-success">
          Email:
         <input className="mb-2 text-primary" type="text" defaultValue={singleEmployee && singleEmployee.email} onChange={(e) =>
                setEditEmployeeForm({
                  ...editEmployeeForm,
                  email: e.target.value,
                })
              }/>
              </label>
        </form>
        <MDBBtn onClick={(e) => editEmployeeSubmit(e, id)}>Modifica</MDBBtn>
      </div>
     </MDBContainer>

    </>  )
}

export default EmployeeEditPage