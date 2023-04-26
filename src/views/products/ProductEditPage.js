// import React from "react";
// import useFetch from "./useFetch";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router";
// import { useParams } from "react-router";
// import { confirmAlert } from 'react-confirm-alert';
// import 'react-confirm-alert/src/react-confirm-alert.css';
// import {
//   MDBBadge,
//   MDBBtn,
//   MDBTable,
//   MDBTableHead,
//   MDBTableBody,
//   MDBModal,
//   MDBModalDialog,
//   MDBModalContent,
//   MDBModalHeader,
//   MDBModalTitle,
//   MDBModalBody,
//   MDBModalFooter,
//   MDBRow,
//   MDBCol,
//   MDBInput,
//   MDBCheckbox,
// } from "mdb-react-ui-kit";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ProductEditModal from "./ProductEditPage";
// const ProductEditPage = (props) => {
//   const editSubmit = (_id) => {
//     confirmAlert({
//       title: `Modifica`,
//       message: `Vuoi modificare il prodotto ${_id})`,
//       className: "text-primary",
//       buttons: [
//         {
//           label: 'Yes',
//           onClick: () => toggleShowEdit(_id) 
//         },
//         {
//           label: 'No',
//           onClick: () => alert('Click No')
//         }
//       ]
//     });    }
  



//   const editProduct = async (_id) => {

//     const editProduct = {
//       product: newProductFrom.product,
//       thumbnail: newProductFrom.thumbnail,
//       category: newProductFrom.category,
//       price: newProductFrom.price,
//       description: newProductFrom.description,
//     };
//     await axios
//       .patch(`http://localhost:7070/allproducts/${_id}`, editProduct)
//       .then((response) => {
//         if (response.status === 200) {
//           window.confirm(`Modificare il prodotto ${_id}`);
//           window.location.reload(true);
//           navigate("/manageproducts");
//         } else {
//           return alert("Invalid Product Form");
//         }
//       });
//   };


//   return (
//     <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
//     <MDBModalDialog>
//       <MDBModalContent>
//         <MDBModalHeader>
//           <MDBModalTitle>Modifica {product.product}</MDBModalTitle>
//           <MDBBtn className='btn-close' color='none'></MDBBtn>
//         </MDBModalHeader>
//         <MDBModalBody><form>
//             <MDBInput onChange={(e) =>
//                 setEditProductForm({
//                   ...editProductForm,
//                   product: e.target.value,
//                 })
//               }
//               className="text-primary"
//               wrapperClass="mb-4"
//               id="form6Example3"
//               label="Prodotto"
//               name="product"
//             />
//             <MDBInput onChange={(e) =>
//                 setEditProductForm({
//                   ...editProductForm,
//                   thumbnail: e.target.value,
//                 })
//               }
//               wrapperClass="mb-4"
//               id="typeURL"
//               type="url"
//               label="URL Immagine"
//               name="thumbnail"
//             />
//             <MDBInput onChange={(e) =>
//                 setEditProductForm({
//                   ...editProductForm,
//                   category: e.target.value,
//                 })
//               }
//               className="text-primary"
//               wrapperClass="mb-4"
//               type="email"
//               id="form6Example5"
//               label="Categoria"
//               name="category"
//             />
//             <MDBInput onChange={(e) =>
//                 setEditProductForm({
//                   ...editProductForm,
//                   price: e.target.value,
//                 })
//               }
//               className="text-primary"
//               wrapperClass="mb-4"
//               type="tel"
//               id="form6Example6"
//               label="Prezzo"
//               name="price"
//             />

//             <MDBInput onChange={(e) =>
//                 setEditProductForm({
//                   ...editProductForm,
//                   description: e.target.value,
//                 })
//               }
//               className="text-primary"
//               wrapperClass="mb-4"
//               textarea
//               id="form6Example7"
//               rows={4}
//               label="Aggiungi una descrizione"
//               name="description"
//             />
//           </form></MDBModalBody>

//         <MDBModalFooter>
//           <MDBBtn color='secondary'>
//             Close
//           </MDBBtn>
//           <MDBBtn>Save changes</MDBBtn>
//         </MDBModalFooter>
//       </MDBModalContent>
//     </MDBModalDialog>
//   </MDBModal>  )
// }

// export default ProductEditPage