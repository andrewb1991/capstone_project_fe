import React, { useState } from "react";
import useSessionHookCart from "../../utils/useSessionHookCart";
import { useNavigate } from "react-router";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import Cart from "../cart/Cart";

const Orders = () => {
    const navigate = useNavigate()
    const handleBackPage = () => {
        navigate("/homeemployee");
      };
  const cart = useSessionHookCart();
  console.log(cart);



  return (
<>
<h1 className="text-primary">Ordini</h1>
<div className="container-fluid">
<MDBBtn
          onClick={handleBackPage}
          className="mx-2 text-xl-left"
          color="secondary"
        >
          <i class="fa-solid fa-circle-arrow-left fa-2xl"></i>
        </MDBBtn>
    <Cart/>
</div>

    </>
    
  );
};

export default Orders;
