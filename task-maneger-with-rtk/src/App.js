import Home from './pages/Home';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import "./styles/main.css"

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path= "/create" element={<AddTask/>}/>
        <Route path= "/edit/:taskId" element={<EditTask/>}/>
      </Routes>

    </Router>
  

  
  );
}

export default App;
