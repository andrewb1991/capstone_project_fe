import "./App.css";
import Home from "./views/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import ProductsList from "./views/products/ProductsList";
import NavbarPage from "./views/NavBar";
import EmployeesList from "./views/employees/EmployeesList";
import ManageProductsList from "./views/products/ManageProductsList";
import HomeEmployee from "./views/employees/HomeEmployee";
import ProductEditModal from "./views/products/ProductEditModal";
import { useState } from "react";
import { SingleProduct } from "./views/products/SingleProduct";

function App() {
  const location = useLocation();
  const [show, setShow] = useState(true)
  const [cart, setCart] = useState([])
  const handleClick = (item) => {
  console.log(item)
  }
  return (
    <>
      <div className="App">
      {location.pathname === "/home" ? <NavbarPage size={cart.length}/> : null}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/homeemployee" element={<HomeEmployee/>} />
          <Route path="/manageemployess" element={<EmployeesList />} />
          <Route
            path="/manageproducts"
            exact
            element={<ManageProductsList />}
          />
          <Route path="/editproduct" element={<ProductEditModal />} />
          <Route path="/home" element={<ProductsList handleClick={handleClick} />} />
          <Route element={          <SingleProduct/>
}/>
        </Routes>
       
      </div>
    </>
  );
}

function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Root;
