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

function App() {
  const location = useLocation();
  return (
    <>
      <div className="App">
      {location.pathname === "/home" ? <NavbarPage/> : null}
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
          <Route path="/home" element={<ProductsList />} />
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
