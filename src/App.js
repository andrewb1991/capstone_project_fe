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
function App() {

  return (

    <div className="App">
     <Router>
     <NavbarPage/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
          <Route path="/home" element={<ProductsList/>}/>
          <Route path="/home" element={<NavbarPage/>}/>
        </Routes>
    </Router>  
    </div>
  );
}

export default App;
