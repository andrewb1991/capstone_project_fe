import './App.css';
import Home from './views/Home'
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link 
} from "react-router-dom"


import ProductsList from './views/products/ProductsList';
import NavbarPage from './views/NavBar';
import EmployeesList from './views/employees/EmployeesList';
import ManageProductsList from './views/products/ManageProductsList'
import HomeEmployee from './views/employees/HomeEmployee';
import ProductEditModal from './views/products/ProductEditModal';


function App () {

  return (

    <div className="App">
     <Router>
     <NavbarPage/>
      <Routes>
        <Route path="/homeemployee" exact element={<HomeEmployee/>}/>
        <Route path="/manageemployess" element={<EmployeesList/>}/>
        <Route path="/manageproducts" exact element={<ManageProductsList/>}/>
        <Route path="/editproduct" exact element={<ProductEditModal/>}/>
        <Route path="/" exact element={<Home/>}/>
          <Route path="/home" element={<ProductsList/>}/>
          <Route path="/home" element={<NavbarPage/>}/>
        </Routes>
    </Router>  
    </div>
  );
}

export default App;
