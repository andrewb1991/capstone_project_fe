import React from 'react'
import { useState } from "react";
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

export const SingleProduct = () => {
    const { data, loading, error } = useFetch(`http://localhost:6060/allproducts`);

  return (
<MDBCard>
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom"
                  >
                    {!loading && data && data.map((product)=> {
                    <MDBCardBody>
                    <a href="#!" className="text-reset">
                      <h5 className="card-title mb-3">{product.name}</h5>
                    </a>
                    <a href="#!" className="text-reset">
                      <p>{product.category}</p>
                    </a>
                    <h6 className="mb-3">€ + {product.price}</h6>
                  </MDBCardBody>
                    })}
                    <MDBCardImage
                    // thumbail
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp"
                      fluid
                      className="w-100"
                    />
                    <a href="#!">
                      <div className="mask">
                        <div className="d-flex justify-content-start align-items-end h-100">
                        </div>
                      </div>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <a href="#!" className="text-reset">
                      <h5 className="card-title mb-3">NAME</h5>
                    </a>
                    <a href="#!" className="text-reset">
                      <p>CATEGORY</p>
                    </a>
                    <h6 className="mb-3">€ + PREZZO</h6>
                  </MDBCardBody>
                </MDBCard>  )
}
