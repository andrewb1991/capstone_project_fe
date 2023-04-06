import React from "react";
import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { SingleProduct } from "./SingleProduct";
const session = localStorage.getItem("authCode")


function ProductsList() {
  const [search, setSearch] = useState("");
  const { data, loading, error } = useFetch(`http://localhost:6060/allproducts`);
  console.log(data);


  useEffect(()=>{
  if(session){
  //  const auth =  jwt_decode(session)
   console.log(session)
  }
  }, [])

  return (
    <>
          <Form>
          <InputGroup className='my-3'>
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search Blogs'
            />
          </InputGroup>
        </Form>
                <MDBContainer fluid className="my-5 text-center">
                <MDBRow>
                  <MDBCol md="12" lg="4" className="mb-4">
                    <h4 className="mt-4 mb-5">
                      <strong>Smartphone, Tablet e Accessori</strong>
                    </h4>

                <SingleProduct/>
   
                        </MDBCol>
                        </MDBRow>
                      </MDBContainer>
                      </>
              )}
export default ProductsList;
