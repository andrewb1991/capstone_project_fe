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
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { SingleProduct } from "./SingleProduct";
const session = localStorage.getItem("authCode")

function ProductsList() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const limit = 8;

  const { data, loading, error } = useFetch(`http://localhost:7070/allproductspagination?page=${page}&limit=${limit}`);
  console.log(data);


  useEffect(()=>{
  if(session){
  //  const auth =  jwt_decode(session)
   console.log(session)
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

  return (
    <>
    {loading && <h1>Loading Products...</h1>}

                <MDBContainer fluid className="my-5 text-center">

                <MDBRow>
                <h4 className="mt-4 mb-5">
                      <strong>Smartphone, Tablet e Accessori</strong>
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
  .map((post, i) => (
    <SingleProduct key={post.id}{...post}/>
  ))}               
   
                        </MDBRow>
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
export default ProductsList;
