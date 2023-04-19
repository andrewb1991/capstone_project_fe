import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import axios from "axios";
import useSessionHook from "../utils/useSessionHook";


export default function App() {
  const [showBasic, setShowBasic] = useState(false);
  const navigate = useNavigate();
  const user = useSessionHook()
  console.log(user)

  const navigateHome = async (e) => {
    return navigate("/home");
  };

  const handleClickHome = async (e) =>{
  alert("Sei sicuro di voler tornare alla pagina iniziale?")
  if(alert === true){
  navigate("")
  }
  }


  return (

    <MDBNavbar expand="lg" light bgColor="light" className="sticky-top">
      <MDBContainer fluid>
        <MDBNavbarBrand>
          {/* <a href="/"> */}
            {" "}
            <img onClick={handleClickHome}
              className="img-thumbnail"
              width={60}
              height={80}
              src="https://res.cloudinary.com/dpb7beo1e/image/upload/v1681290732/logo_transparent_background_rjoa2g.png"
            ></img>
          {/* </a> */}
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                Smartphone
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">Tablet</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">Accessori</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">Ordini</MDBNavbarLink>
            </MDBNavbarItem>


            <MDBNavbarItem>
              
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  {user && <div>Ciao, {user.name} {user.surname}
                  <img
              className="img-thumbnail img-fluid rounded"
              width={60}
              height={60}
              src={user.imageprofile}
            ></img></div>}
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Visualizza Account</MDBDropdownItem>
                  <MDBDropdownItem link href="/">Esci</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
