import React from 'react'
import useFetch from "./useFetch";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
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
  const {_id} = useParams()

  const editProductSubmit = async (e, _id) => {
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
          window.confirm(`Modificare il prodotto ${_id}`);
          window.location.reload(true);
          navigate("/manageproducts");
        } else {
          return alert("Invalid Product Form");
        }
      });
  };
  return (
    <>
<div>Modifica {}</div>
<div>
<form>
                <MDBInput onChange={(e) =>
                    setEditProductForm({
                      ...editProductForm,
                      product: e.target.value,
                    })
                  }
                  className="text-primary"
                  wrapperClass="mb-4"
                  id="form6Example3"
                  label="Prodotto"
                  name="product"
                />
                <MDBInput onChange={(e) =>
                    setEditProductForm({
                      ...editProductForm,
                      thumbnail: e.target.value,
                    })
                  }
                  wrapperClass="mb-4"
                  id="typeURL"
                  type="url"
                  label="URL Immagine"
                  name="thumbnail"
                />
                <MDBInput onChange={(e) =>
                    setEditProductForm({
                      ...editProductForm,
                      category: e.target.value,
                    })
                  }
                  className="text-primary"
                  wrapperClass="mb-4"
                  type="email"
                  id="form6Example5"
                  label="Categoria"
                  name="category"
                />
                <MDBInput onChange={(e) =>
                    setEditProductForm({
                      ...editProductForm,
                      price: e.target.value,
                    })
                  }
                  className="text-primary"
                  wrapperClass="mb-4"
                  type="tel"
                  id="form6Example6"
                  label="Prezzo"
                  name="price"
                />

                <MDBInput onChange={(e) =>
                    setEditProductForm({
                      ...editProductForm,
                      description: e.target.value,
                    })
                  }
                  className="text-primary"
                  wrapperClass="mb-4"
                  textarea
                  id="form6Example7"
                  rows={4}
                  label="Aggiungi una descrizione"
                  name="description"
                />
              </form>
              <MDBBtn onClick={(e)=>editProductSubmit(e, _id)} >Modifica</MDBBtn>
              </div>
              </>
              )
}

export default ProductEditPage