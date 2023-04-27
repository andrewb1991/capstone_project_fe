import React from 'react'
import useSessionHook from '../../utils/useSessionHook';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router';
const Profile = () => {
    const user = useSessionHook()
    const navigate = useNavigate()

    const navigateBack = async(e)=>{
    return navigate("/home")
    }
    const navigateHome = async(e)=>{
    return navigate("/")
    }
  return (
<div className="vh-100" style={{ backgroundColor: '#9de2ff' }}>

      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                {user && (
                    <div className="d-flex text-black">
                    <div className="flex-shrink-0">
                      <MDBCardImage
                        style={{ width: '180px', borderRadius: '10px' }}
                        src={user.imageprofile}
                        alt='Generic placeholder image'
                        fluid />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <MDBCardTitle>{user.name} {user.surname}</MDBCardTitle>
                      <MDBCardText>Utente registrato</MDBCardText>
  
                      <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                        style={{ backgroundColor: '#efefef' }}>
                        <div>
                          <p className="small text-muted mb-1">Articles</p>
                          <p className="mb-0">41</p>
                        </div>
                        <div className="px-3">
                          <p className="small text-muted mb-1">Followers</p>
                          <p className="mb-0">976</p>
                        </div>
                        <div>
                          <p className="small text-muted mb-1">Rating</p>
                          <p className="mb-0">8.5</p>
                        </div>
                      </div>
                      <div className="d-flex pt-1">
                        <MDBBtn onClick={navigateHome} outline className="me-1 flex-grow-1">ESCI</MDBBtn>
                        <MDBBtn onClick={navigateBack} className="flex-grow-1">INDIETRO</MDBBtn>
                      </div>
                    </div>
                  </div>
                    ) 
                    
                    }
                
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
      )
}

export default Profile