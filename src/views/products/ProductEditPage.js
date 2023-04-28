import React from "react";
import useFetch from "./useFetch";
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
const ProductEditPage = () => {
  const navigate = useNavigate();
  const [fullscreenXlModal, setFullscreenXlModal] = useState(false);
  const toggleShow = () => setFullscreenXlModal(!fullscreenXlModal);
  const [newProductFrom, setNewProductForm] = useState({});
  const [editProductForm, setEditProductForm] = useState({});
  const [basicModal, setBasicModal] = useState(false);
  const [singleProduct, setSingleProduct] = useState(null)
  const { id } = useParams();
  console.log(id);

  const getSingleProduct = async () => {
  const data = await fetch(`http://localhost:7070/allproducts/${id}`)
  const response = await data.json()
  setSingleProduct(response)
  console.log(response)
}
  useEffect(()=>{
  getSingleProduct()
  },[])


  const editProductSubmit = (_id, e) =>{
  confirmAlert({
    title: `Modifica`,
    message: `Vuoi modificare il prodotto ${singleProduct._id}?`,
    className: "text-primary",
    buttons: [
      {
        label: "Yes",
        onClick: () => editProduct(_id, e),
      },
      {
        label: "No",
        onClick: () => alert("Click No"),
      },
    ],
  })
  }

  const editProduct = async (e, _id) => {
    const editProduct = {
      product: editProductForm.product,
      thumbnail: editProductForm.thumbnail,
      category: editProductForm.category,
      price: editProductForm.price,
      description: editProductForm.description,
    };
    await axios
      .patch(`http://localhost:7070/allproducts/${_id}`, editProduct)
      .then((response) => {
        if (response.status === 200) {
          alert("Prodotto modificato con successo!")
          navigate("/manageproducts");
        } else {
          return alert("Invalid Product Form");
        }
      });
  };
  return (
    <>
         <h1 className="text-primary">Modifica {singleProduct && singleProduct.product}</h1>

     <MDBContainer className="d-flex col-1">
      <div>
        <form>
          <label className="text-success">
          Prodotto:
         <input className="mb-2 text-primary" type="text" defaultValue={singleProduct && singleProduct.product} onChange={(e) =>
                setEditProductForm({
                  ...editProductForm,
                  product: e.target.value,
                })
              }/>
              </label>
              <label className="text-success">
                Immagine:
         <input type="text" defaultValue={singleProduct && singleProduct.thumbnail} onChange={(e) =>
                setEditProductForm({
                  ...editProductForm,
                  thumbnail: e.target.value,
                })
              }/>
              </label>
              <label className="text-success">
                Categoria: 
         <input type="text" defaultValue={singleProduct && singleProduct.category} onChange={(e) =>
                setEditProductForm({
                  ...editProductForm,
                  category: e.target.value,
                })
              }/>
</label>
<label className="text-success">
  Prezzo:
         <input type="text" defaultValue={singleProduct && singleProduct.price} onChange={(e) =>
                setEditProductForm({
                  ...editProductForm,
                  price: e.target.value,
                })
              }/>
              </label>
              <label className="text-success">
                Descrizione:
         <input type="text" defaultValue={singleProduct && singleProduct.description} onChange={(e) =>
                setEditProductForm({
                  ...editProductForm,
                  description: e.target.value,
                })
              }/>
              </label>
        </form>
        <MDBBtn onClick={(e) => editProductSubmit(e, id)}>Modifica</MDBBtn>
      </div>
     </MDBContainer>

    </>
  );
};

export default ProductEditPage;
