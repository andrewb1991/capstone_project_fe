import React from 'react'
import { useState } from 'react';
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


const ProductEditModal = (props) => {
  const [fullscreenXlModal, setFullscreenXlModal] = useState(false);
  const toggleShow = () => setFullscreenXlModal(!fullscreenXlModal);
  const [loading, setLoading] = useState(false);
  const [editProduct, setEditProduct] = useState(false)

//   const manageProduct = async (e)=>{
//     e.preventDefault()
//     setLoading(true)
//     let newcomment = {
//       comment: e.target[0].value,
//       rate: e.target[1].value,
//       elementId: e.target[2].value
        
//     }
//     console.log(newcomment);
//     return await fetch(`https://striveschool-api.herokuapp.com/api/comments/`,
//     {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlOTQ3ODE2YWI2ODAwMTVhMjVmYjkiLCJpYXQiOjE2NzcxNzIxMjQsImV4cCI6MTY3ODM4MTcyNH0.gm2F0EMXOrPwx3tq-mKWx0fg6cY5D6O6lnUoGP4MmyU"
//       },
//         body: JSON.stringify(newcomment)
//     }).then(res=>res.json()            
//       .then(
//       (res)=>{
//           let newcomments = [comments, newcomment]
//           newcomments(newcomments)
//           e.target[0].value = ""
//       },
//       (err)=>{}
//   )
//   .then((res)=> {
//     window.location.reload(true)
//   })
//   )

// }

  return (
    <MDBModal
    tabIndex="-1"
    show={fullscreenXlModal}
    setShow={setFullscreenXlModal}
  >
    <MDBModalDialog size="fullscreen-lg-down">
      <MDBModalContent>
        <MDBModalHeader>
          <MDBModalTitle className="text-success">
            Modifica Prodotto {props.key}
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
            className="text-primary" wrapperClass='mb-4' id='form6Example3' label='Prodotto' />
  <MDBInput wrapperClass='mb-4' id='typeURL' type='url' label='URL Immagine' />
  <MDBInput className="text-primary" wrapperClass='mb-4' type='email' id='form6Example5' label='Categoria' />
  <MDBInput  className="text-primary" wrapperClass='mb-4' type='tel' id='form6Example6' label='Prezzo' />

  <MDBInput className="text-primary" wrapperClass='mb-4' textarea id='form6Example7' rows={4} label='Aggiungi una descrizione' />
</form>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn className="mx-2" color="success">
            Modifica
          </MDBBtn>
        </MDBModalFooter>
      </MDBModalContent>
    </MDBModalDialog>
  </MDBModal>  )
}

export default ProductEditModal