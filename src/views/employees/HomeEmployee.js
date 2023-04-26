import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSessionHookEmpl from "../../utils/useSessionHookEmpl";
import NavBarEmpl from "../../views/NavBarEmpl"
const HomeEmployee = () => {
  const employee = useSessionHookEmpl();
  console.log(employee);

      const navigate = useNavigate();
      const handleEmployesPage = () =>{
        navigate("/manageemployess")    
    }
      const handleProductPage =  () =>{
        navigate("/manageproducts")
       }
      const handleHomePage = () => {
      navigate("/")
      }
    

  return (

    <div className="w-100 h-100 mt-5 d-flex align-content-center flex-column">

      <MDBContainer className="my-5 d-flex flex-column w-50">
        <div className="m-2 d-flex flex-column justify-content-between">
          {employee && (
          <>
              <h1 className="text-primary">
                Ciao, {employee.name} {employee.surname}
              </h1>
              <h5 className="text-dark">scegli un opzione per continuare</h5>
              </>
          )}
        </div>

        <MDBBtn onClick={handleProductPage} className='m-1 btn-lg text-center' color='warning'>
          GESTIONE PRODOTTI
        </MDBBtn>
        <MDBBtn onClick={handleEmployesPage} className='m-1 btn-lg text-center' color='success'>
          GESTIONE DIPENDENTI
        </MDBBtn>
        <MDBBtn onClick={handleHomePage} className='m-1 btn-lg text-center' color='danger'>
          ESCI
        </MDBBtn>
      </MDBContainer>
    </div>
  );
};

export default HomeEmployee;
