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
import { useState } from "react";
import { SingleProduct } from "./views/products/SingleProduct";
import ProductEditPage from "./views/products/ProductEditPage";
import { CartProvider } from "react-use-cart";
import Cart from "./views/cart/Cart";
import SmartphoneList from "./views/products/SmartphoneList";
import AccessoriList from "./views/products/AccessoriList";
import TabletList from "./views/products/TabletList";

function App() {
  const location = useLocation();

  return (
    <>
      <div className="App">
        {location.pathname === "/home" ? (
          <NavbarPage/>
        ) : null}
        <CartProvider>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/smartphone" element={<SmartphoneList/>}/>
          <Route path="/accessori" element={<AccessoriList/>}/>
          <Route path="/tablet" element={<TabletList/>}/>
          <Route element={<Cart/>}/>
          <Route path="/homeemployee" element={<HomeEmployee />} />
          <Route path="/manageemployess" element={<EmployeesList />} />
          <Route
            path="/manageproducts"
            exact
            element={<ManageProductsList />}
          />
          <Route path="/editproduct" element={<ProductEditPage />} />
          <Route path="/home" element={<ProductsList />} />
          <Route element={<SingleProduct />} />
        </Routes>
        </CartProvider>
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
