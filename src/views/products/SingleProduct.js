import React from "react";
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
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export const SingleProduct = (props) => {
  const { product, thumbnail, description, category, price } = props;
  return (
    <MDBCol md="6" lg="3" className="mb-4">
      <MDBCard className="h-100">
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image rounded hover-zoom"
        >
          <MDBCardBody>
            <MDBCardImage src={thumbnail} fluid className="w-50 mb-5" />
            <h5 className="card-title mb-3">{product}</h5>
            <p>{category}</p>
            <h6 className="mb-3">{price} €</h6>
            <MDBBtn color='warning'>Aggiungi <i class="fa-solid fa-cart-shopping fa-xl"></i></MDBBtn>
            {/* <h6 className="mb-3">{description}</h6> */}
          </MDBCardBody>
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
        </MDBRipple>
      </MDBCard>
    </MDBCol>
  );
};
