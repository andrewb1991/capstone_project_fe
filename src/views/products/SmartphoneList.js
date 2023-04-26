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

  const { data, loading, error } = useFetch(`http://localhost:7070/Smartphone`);
  
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

const navigateSmartphone = async (e) => {
    return navigate("/smartphone");
  };
  
  const navigateAccessori = async (e) =>{
  return navigate("/accessori")
  }
  
  const navigateTablet = async (e) =>{
    return navigate("/tablet")
    }
    const navigateHome = async (e) =>{
        return navigate("/home")
        }
  return (
    <>
    {loading && <h1>Loading Products...</h1>}

                <MDBContainer fluid className="my-5 text-center">
                <MDBRow>
                <h4 className="mt-4 mb-5">
                      <strong>Smartphone, Tablet e Accessori</strong>
                    </h4>
                    <h3>Filtra i prodotti per categoria:</h3>
                    <div>
                    <Button className="btn btn-warning m-2" onClick={navigateSmartphone}>Smartphone</Button>
                    <Button className="btn btn-info m-2" onClick={navigateAccessori}>Accessori</Button>
                    <Button className="btn btn-success m-2" onClick={navigateTablet}>Tablet</Button>
                    <Button className="btn btn-primary m-2" onClick={navigateHome}>Tutti</Button>
                    </div>
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
