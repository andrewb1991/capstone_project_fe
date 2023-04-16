import React from "react";
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
import ProductEditModal from "./ProductEditModal";

const ManageProductsList = () => {
  const navigate = useNavigate();
  const [fullscreenXlModal, setFullscreenXlModal] = useState(false);
  const toggleShow = () => setFullscreenXlModal(!fullscreenXlModal);
  const [newProductFrom, setNewProductForm] = useState({});
  const [editProductForm, setEditProductForm] = useState({});
  const [basicModal, setBasicModal] = useState(false);
  
  const handleBackPage = () => {
    navigate("/homeemployee");
  };
  const toggleShowEdit = (_id) => {
    setBasicModal(!basicModal);
  }

  const editSubmit = (_id, e) => {
    confirmAlert({
      title: `Modifica`,
      message: `Vuoi modificare il prodotto ${_id}?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => toggleShowEdit(_id) 
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    })
  }



  const editProduct = async (_id, e) => {

    const editProduct = {
      product: newProductFrom.product,
      thumbnail: newProductFrom.thumbnail,
      category: newProductFrom.category,
      price: newProductFrom.price,
      description: newProductFrom.description,
    };
    e.preventDefault();
    await axios
      .put(`http://localhost:7070/allproducts/${_id}`, editProduct)
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

  const addNewProduct = async (e) => {
    const newProduct = {
      product: newProductFrom.product,
      thumbnail: newProductFrom.thumbnail,
      category: newProductFrom.category,
      price: newProductFrom.price,
      description: newProductFrom.description,
    };
    e.preventDefault();
    await axios
      .post("http://localhost:7070/allproducts/", newProduct)
      .then((response) => {
        if (response.status === 200) {
          window.confirm("Aggiungere il prodotto?");
          window.location.reload(true);
          navigate("/manageproducts");
        } else {
          return alert("Invalid Product Form");
        }
      });
  };

  const { data, loading } = useFetch(
    `http://localhost:7070/allproducts`
  );
  console.log(data);

  const deleteProduct = (_id, e) => {
    // e.preventDefault();
    axios.delete(`http://localhost:7070/allproducts/${_id}`).then((response) => {
      if (response.status === 200) {
        // window.confirm(`Rimuovere ${_id}?`);
        navigate("/manageproducts");
        window.location.reload(true);
      }
    });
  };


  const deleteSubmit = (_id, e) => {
    e.preventDefault()
    confirmAlert({
      title: `Elimina`,
      message: 'Vuoi eliminare il prodotto?',
      className: "text-primary",
      buttons: [
        {
          label: 'Yes',
          onClick: () => deleteProduct(_id, e) 
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    });
  }

  return (
    <>
      <h1 className="text-primary m-3">Gestione Prodotti</h1>
      <div className="d-flex flex-wrap ">
        <MDBBtn
          onClick={handleBackPage}
          className="mx-2 text-xl-left"
          color="secondary"
        >
          <i class="fa-solid fa-circle-arrow-left fa-2xl"></i>
        </MDBBtn>
        <MDBBtn
          className="mx-2 text-xl-left"
          color="secondary"
          onClick={toggleShow}
        >
          Aggiungi Nuovo
        </MDBBtn>
      </div>
      <MDBModal
        tabIndex="-1"
        show={fullscreenXlModal}
        setShow={setFullscreenXlModal}
      >
        <MDBModalDialog size="fullscreen-lg-down">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle className="text-success">
                Nuovo Prodotto
              </MDBModalTitle>
              <MDBBtn
                type="button"
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody className="text-primary">
              <form>
                <MDBInput
                  onChange={(e) =>
                    setNewProductForm({
                      ...newProductFrom,
                      product: e.target.value,
                    })
                  }
                  className="text-primary"
                  wrapperClass="mb-4"
                  id="form6Example3"
                  label="Prodotto"
                />
                <MDBInput
                  onChange={(e) =>
                    setNewProductForm({
                      ...newProductFrom,
                      thumbnail: e.target.value,
                    })
                  }
                  wrapperClass="mb-4"
                  id="typeURL"
                  type="url"
                  label="URL Immagine"
                />
                <MDBInput
                  onChange={(e) =>
                    setNewProductForm({
                      ...newProductFrom,
                      category: e.target.value,
                    })
                  }
                  className="text-primary"
                  wrapperClass="mb-4"
                  type="email"
                  id="form6Example5"
                  label="Categoria"
                />
                <MDBInput
                  onChange={(e) =>
                    setNewProductForm({
                      ...newProductFrom,
                      price: e.target.value,
                    })
                  }
                  className="text-primary"
                  wrapperClass="mb-4"
                  type="tel"
                  id="form6Example6"
                  label="Prezzo"
                />

                <MDBInput
                  onChange={(e) =>
                    setNewProductForm({
                      ...newProductFrom,
                      description: e.target.value,
                    })
                  }
                  className="text-primary"
                  wrapperClass="mb-4"
                  textarea
                  id="form6Example7"
                  rows={4}
                  label="Aggiungi una descrizione"
                />
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn className="mx-2" color="success" onClick={addNewProduct}>
                Aggiungi
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <MDBTable align="middle">
        <MDBTableHead>
          <tr className="text-primary">
            <th scope="col" className="mw-50">
              PRODOTTO
            </th>
            <th scope="col">CATEGORIA</th>
            <th scope="col">PREZZO</th>
            <th scope="col">MODIFICA</th>
            <th scope="col">ELIMINA</th>
          </tr>
        </MDBTableHead>
        {!loading &&
          data &&
          data.map((product) => {
            return (
              <>
                <MDBTableBody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={product.thumbnail}
                          alt=""
                          style={{ width: "60px", height: "60px" }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p className="fw-bold mb-1">{product.product}</p>
                          <p className="text-muted mb-0">id: {product._id}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">{product.category}</p>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">{product.price} €</p>
                    </td>
                    <td>
                      <MDBBtn onClick={toggleShowEdit} color="primary" rounded size="sm">
                        <i class="fa-solid fa-pen-to-square fa-xl"></i>
                      </MDBBtn>
                    </td>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modifica {product.product}</MDBModalTitle>
              <MDBBtn className='btn-close' color='none'></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody><form>
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
              </form></MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShowEdit}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
                    <td>
                      <MDBBtn
                        onClick={(e) =>deleteSubmit(product._id, e)}
                        color="danger"
                        rounded
                        size="sm"
                      >
                        <i class="fa-solid fa-trash fa-xl"></i>
                      </MDBBtn>
                    </td>{" "}
                  </tr>
                </MDBTableBody>
              </>
            );
          })}
      </MDBTable>
    </>
  );
};

export default ManageProductsList;
