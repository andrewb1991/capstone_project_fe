import React from "react";
import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import Pagination from 'react-bootstrap/Pagination';
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
import axios from "axios";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from "react-bootstrap";
import { SingleProduct } from "./SingleProduct";
import jwt_decode from 'jwt-decode';
import Cart from "../cart/Cart";
import { useNavigate } from "react-router";
const session = JSON.parse(localStorage.getItem("authCode"))

function SmartphoneList(handleClick, props) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const limit = 8;

  const { data, loading, error } = useFetch(process.env.REACT_APP_SMARTPHONE_URL);
  
  useEffect(()=>{
  if(session){
    const user = jwt_decode(session)
   console.log(user)
  }
  }, [])

  useEffect(() => {
    if(data){
      setPageCount(data.pageCount)
    }
}, [data]);

const handlePrevious = () => {
  setPage((page) =>{
    if(page === 1) return page;
  return page - 1});
};
 
const handleNext = () => {
  setPage((page) => {
    if(page === pageCount) return page;
  return page +1;
  });
};
const navigate = useNavigate()

  return (
    <>
    {loading && <h1>Loading Products...</h1>}

                <MDBContainer fluid className="my-5 text-center">
                <MDBRow>
                <h4 className="mt-4 mb-5">
                      <strong>Smartphone</strong>
                    </h4>
                    <Form>
          <InputGroup className='my-3'>
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search Products'
            />
          </InputGroup>
        </Form>
                    { !loading && data && data.filter((item)=>{
        return search.toLowerCase() === ''
         ? item
         : item.product.toLowerCase().includes(search); 
  })
  .map((post, item) => (
    <SingleProduct item={post} key={item}{...post}/>
  ))}               
   
                        </MDBRow>
                        <MDBCol className="m-4">
                  <div className="">
                        <Cart/>
                <i className="fa fa-cart-plus fa-xl" />
                        </div>
                  </MDBCol>
                        <div>
    <Pagination className="justify-content-center">
      <Pagination.Prev  onClick={handlePrevious} />
      <Pagination.Item active>{page}</Pagination.Item>
      <Pagination.Next onClick={handleNext} />
      </Pagination>
  </div>
                      </MDBContainer>
                      </>
              )}
export default SmartphoneList;
