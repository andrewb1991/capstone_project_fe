import React, { useCallback, useState, useEffect } from "react";
import useFetch from "../utils/useFetch";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import jwt_decode from "jwt-decode";
import jwtDecode from "jwt-decode";

// controlla form registrazione cliente con urgenza, non prende nome e cognome e non compaiono nel payload del token 
const Login = () => {
  const [text, setText] = useState("");
  const [formData, setFormData] = useState({});
  const [formLogin, setFormLogin] = useState({});
  const [authenticated, setAuthenticated] = useState(null);
  const navigate = useNavigate();

 
  const handleChange = useCallback((value) => {
    setText(value);
  });



  const newCustomer = {
    name: formData.nome,
    surname: formData.cognome,
    email: formData.email,
    password: formData.password,
  };

  const registerUser = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:7070/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCustomer),
    });
  };

  const Customer = {
    email: formLogin.email,
    password: formLogin.password,
  };

  const loginUser = async (e) => {
    e.preventDefault()
      await axios.post("http://localhost:7070/login/", Customer )
      .then((response)=> {
        if(response.status === 200){
          localStorage.setItem("authCode", response.data.token)
          navigate("/home")
        }
      } )
  };

  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };



  return (
    <>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50 mt-64">
        <MDBTabs
          pills
          justify
          className="mb-3 d-flex flex-row justify-content-between"
        >
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab1")}
              active={justifyActive === "tab1"}
            >
              Login
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab2")}
              active={justifyActive === "tab2"}
            >
              Registrati
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleJustifyClick("tab3")}
                active={justifyActive === "tab3"}
              >
                RISERVATO
              </MDBTabsLink>

          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane show={justifyActive === "tab1"}>
            <div className="text-center mb-3">
              <div
                className="d-flex justify-content-between mx-auto"
                style={{ width: "40%" }}
              ></div>
            </div>

            <MDBInput
              onChange={(e) =>
                setFormLogin({
                  ...formLogin,
                  email: e.target.value,
                })
              }
              wrapperClass="mb-4"
              label="Email"
              id="form1"
              type="email"
            />
            <MDBInput
              onChange={(e) =>
                setFormLogin({
                  ...formLogin,
                  password: e.target.value,
                })
              }
              wrapperClass="mb-4"
              label="Password"
              id="form2"
              type="password"
            />
            <MDBBtn onClick={loginUser} className="mb-4 w-100">
              Accedi
            </MDBBtn>
          </MDBTabsPane>

          <MDBTabsPane show={justifyActive === "tab2"}>
            <div className="text-center mb-3">
              <p>Inserisci le tue informazioni</p>

              <div
                className="d-flex justify-content-between mx-auto"
                style={{ width: "40%" }}
              ></div>
            </div>

            <MDBInput
              wrapperClass="mb-4"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              label="Nome"
              id="form1"
              type="text"
            />
            <MDBInput
              wrapperClass="mb-4"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  surname: e.target.value,
                })
              }
              label="Cognome"
              id="form1"
              type="text"
            />
            <MDBInput
              wrapperClass="mb-4"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              label="Email"
              id="form1"
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value,
                })
              }
              label="Password"
              id="form1"
              type="password"
            />

            <div className="d-flex justify-content-center mb-4">
              {/* <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' /> */}
            </div>

            <MDBBtn onClick={registerUser} className="mb-4 w-100">
              Continua
            </MDBBtn>
          </MDBTabsPane>

          <MDBTabsPane show={justifyActive === "tab3"}>
            <div className="text-center mb-3">
              <div
                className="d-flex justify-content-between mx-auto"
                style={{ width: "40%" }}
              ></div>
            </div>

            <MDBInput
          
              wrapperClass="mb-4"
              label="Email"
              id="form1"
              type="email"
            />
            <MDBInput
              
              wrapperClass="mb-4"
              label="Password"
              id="form1"
              type="password"
            />
            <MDBBtn className="mb-4 w-100">
              Accesso Dipendente
            </MDBBtn>
          </MDBTabsPane>

        </MDBTabsContent>
      </MDBContainer>
    </>
  );
};

export default Login;
