import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
const Footer = () => {
  return (
<MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className=''>
              <div className='d-flex row align-content-between'>
              <h6 className='text-uppercase fw-bold mb-4'>Contatti</h6> 
              <p>
                <MDBIcon icon="home" className="me-2" />
                Viale Trento, 26 Fano (PU) 61032
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
               GitHub: andrewb1991
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +39 3496820855
              </p>

              </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <a className='text-reset fw-bold'>
         errSmart®
        </a>
      </div>
    </MDBFooter>
      )
}

export default Footer