import React from "react";
import useFetch from "./useFetch";
import axios from 'axios';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
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

const ManageProductsList = (props) => {
  const { id } = useParams()
    const navigate = useNavigate();
  const [fullscreenXlModal, setFullscreenXlModal] = useState(false);
  const toggleShow = () => setFullscreenXlModal(!fullscreenXlModal);
  const [newProductFrom, setNewProductForm] = useState({});

  const handleBackPage = () => {
  navigate("/homeemployee")
  }



    const addNewProduct = async (e) => {
        const newProduct = {
            product: newProductFrom.product,
            thumbnail: newProductFrom.thumbnail,
            category: newProductFrom.category,
            price: newProductFrom.price,
            description: newProductFrom.description
            }
        e.preventDefault();
        await axios
          .post("http://localhost:7070/allproducts/", newProduct)
          .then((response) => {
            if (response.status === 200) {
              window.confirm("Aggiungere il prodotto?")
              window.location.reload(true)
              navigate("/manageproducts");
            }
            else{
            return alert("Invalid Product Form")
            }
          });
      };


  const { data, loading, error } = useFetch(
    `http://localhost:7070/allproducts`
  );
  console.log(data);

  return (
    <>
      <h1 className="text-primary m-3">Gestione Prodotti</h1>
      <div className="d-flex flex-wrap ">
        <MDBBtn onClick={handleBackPage} className="mx-2 text-xl-left" color="secondary"><i class="fa-solid fa-circle-arrow-left fa-2xl"></i></MDBBtn>
        <MDBBtn className="mx-2 text-xl-left" color="secondary" onClick={toggleShow}>
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
      <MDBInput onChange={(e) =>
                setNewProductForm({
                  ...newProductFrom,
                  product: e.target.value,
                })
              } className="text-primary" wrapperClass='mb-4' id='form6Example3' label='Prodotto' />
      <MDBInput onChange={(e) =>
                setNewProductForm({
                  ...newProductFrom,
                  thumbnail: e.target.value,
                })
              } wrapperClass='mb-4' id='typeURL' type='url' label='URL Immagine' />
      <MDBInput  onChange={(e) =>
                setNewProductForm({
                  ...newProductFrom,
                  category: e.target.value,
                })
              } className="text-primary" wrapperClass='mb-4' type='email' id='form6Example5' label='Categoria' />
      <MDBInput onChange={(e) =>
                setNewProductForm({
                  ...newProductFrom,
                  price: e.target.value,
                })
              } className="text-primary" wrapperClass='mb-4' type='tel' id='form6Example6' label='Prezzo' />

      <MDBInput onChange={(e) =>
                setNewProductForm({
                  ...newProductFrom,
                  description: e.target.value,
                })
              } className="text-primary" wrapperClass='mb-4' textarea id='form6Example7' rows={4} label='Aggiungi una descrizione' />
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
            <th scope="col">MODIFICA
            </th>
            <th scope="col">ELIMINA
            </th>
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
                      <MDBBtn onClick={toggleShow} key={product._id} color="primary" rounded size="sm">
                      <i class="fa-solid fa-pen-to-square"></i>
                      </MDBBtn>
                      {toggleShow && <ProductEditModal key={product._id}/>}
                      <MDBModal
        tabIndex="-1"
        show={fullscreenXlModal}
        setShow={setFullscreenXlModal}
      >
        <MDBModalDialog size="fullscreen-lg-down">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle className="text-success">
                Modifica Prodotto {product.product}
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
      <MDBInput onChange={(e) =>
                setNewProductForm({
                  ...newProductFrom,
                  product: e.target.value,
                })
              } className="text-primary" wrapperClass='mb-4' id='form6Example3' label='Prodotto' />
      <MDBInput onChange={(e) =>
                setNewProductForm({
                  ...newProductFrom,
                  thumbnail: e.target.value,
                })
              } wrapperClass='mb-4' id='typeURL' type='url' label='URL Immagine' />
      <MDBInput  onChange={(e) =>
                setNewProductForm({
                  ...newProductFrom,
                  category: e.target.value,
                })
              } className="text-primary" wrapperClass='mb-4' type='email' id='form6Example5' label='Categoria' />
      <MDBInput onChange={(e) =>
                setNewProductForm({
                  ...newProductFrom,
                  price: e.target.value,
                })
              } className="text-primary" wrapperClass='mb-4' type='tel' id='form6Example6' label='Prezzo' />

      <MDBInput onChange={(e) =>
                setNewProductForm({
                  ...newProductFrom,
                  description: e.target.value,
                })
              } className="text-primary" wrapperClass='mb-4' textarea id='form6Example7' rows={4} label='Aggiungi una descrizione' />
    </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn className="mx-2" color="success">
                Modifica
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>


                    </td>
                    <td>
                      <MDBBtn color="danger" rounded size="sm">
                      <i class="fa-solid fa-trash"></i>
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
