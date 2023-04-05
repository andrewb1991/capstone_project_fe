import './App.css';
import Home from './views/Home'
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link 
} from "react-router-dom"
function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>  
    </div>
  );
}

export default App;
