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

const HomeEmployee = () => {
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
    <div className="w-100 h-100 mt-5 d-flex align-content-center">
              <MDBContainer className="my-5 d-flex w-50">
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
