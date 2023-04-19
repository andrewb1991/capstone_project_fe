import React, { useCallback, useState, useEffect } from "react";
import useFetch from "../utils/useFetch";
import { Outlet } from "react-router-dom";
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
  MDBFile
} from "mdb-react-ui-kit";
import jwt_decode from "jwt-decode";
import useSessionHook from "../utils/useSessionHook";
import jwtDecode from "jwt-decode";

const Login = () => {
  const [text, setText] = useState("");
  const [src, setSrc] = useState("");
  const [formData, setFormData] = useState({});
  const [formLogin, setFormLogin] = useState({});
  const [formEmpl, setFormEmpl] = useState({});
  const [authenticated, setAuthenticated] = useState(null);
  const navigate = useNavigate();
  const user = useSessionHook()
  console.log(user)



  const handleChange = useCallback((value) => {
    setText(value);
  });
   

  const newCustomer = {
    name: formData.nome,
    surname: formData.cognome,
    email: formData.email,
    password: formData.password,
    imageprofile: formData.imageprofile,
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
    console.log(newCustomer)
  };

  const Customer = {
    email: formLogin.email,
    password: formLogin.password,
    name: "",
    surname: ""
  };

  const loginUser = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:7070/login`, Customer)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("authCode", JSON.stringify(jwtDecode(response.data)));
          console.log(response.data)
          alert("Login!")
          navigate("/home");
        }
        else{
        return alert("Invalid Credential")
        }
      });
  };

  const Employee = {
  email: formEmpl.email,
  password: formEmpl.password
  }

  const loginEmployee = async (e) =>{
  e.preventDefault();
  await axios
  .post("http://localhost:7070/auth/employees", Employee)
  .then((response)=>{
  if(response.status === 200){
    localStorage.setItem("emplCode", JSON.stringify(jwtDecode(response.data)));  
    alert("Login Employee")
    navigate("/homeemployee")
  }
  else{
  return alert("Invalid Credential")
  }
  })
  }

  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <>
    <div className="relative h-96 overflow-hidden bg-cover bg-no-repeat p-12 text-center lg:h-screen">
        <header style={{ paddingLeft: 0 }} className="w-full">
      

      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://res.cloudinary.com/dpb7beo1e/image/upload/v1681832467/backgroundimage_mfn9bd.avif')", height: 280 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className=''>Welcome to <img className="w-25 h-25"src="https://res.cloudinary.com/dpb7beo1e/image/upload/v1681832196/white_logo_transparent_background_fwo0ia.png"></img></h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    </div>

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
              Accedi con le tue credenziali
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
                  nome: e.target.value,
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
                  cognome: e.target.value,
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
                        <MDBInput
              wrapperClass="mb-4"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  imageprofile: e.target.value,
                })
              }
              label="Image Profile"
              id="form1"
              type="text"
            />
            <div>
    </div>
            <div className="d-flex justify-content-center mb-4">
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

            <MDBInput onChange={(e) =>
                setFormEmpl({
                  ...formEmpl,
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
              setFormEmpl({
                ...formEmpl,
                password: e.target.value,
              })
            }
              wrapperClass="mb-4"
              label="Password"
              id="form1"
              type="password"
            />
            <MDBBtn onClick={loginEmployee} className="mb-4 w-100">Accesso Dipendente</MDBBtn>
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>
    </>
  );
};

export default Login;

// import {useState} from "react";

// export const FormComponent = ()=>{

//     const submit = async (e)=>{
//         e.preventDefault();

//         let data = new FormData();
//         data.append('uploadImage', e.target[0].files[0]) //il primo parametro è il name che usereme nel metodo single di multer

//         let res = await fetch("http://localhost:4040/BlogPosts/640f71e3bea275c3f3b27013/author/avatar/", {
//             method: 'POST',
//             body: data
//         }).then(res=>res.json())
//         console.log("RESPONSE", res);
//         setSrc(res.upload);
//         //aggiungere dati al backend
//     }
//     return (<form onSubmit={submit} enctype="multipart/form-data">
//         <input type="file" name="uploadImage" />
//         <button type="submit">Invia</button>

//         <img src={src} />
//     </form>)
// }
