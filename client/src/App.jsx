import './App.css'
import Navbr from "./layout/Navbar.jsx";
import Home from "./pages/home.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AddUser from "./users/AddUser.jsx";
import EditUser from "./users/EditUser.jsx";
function App() {

  return (
    <div>
        <Router>
            <Navbr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/adduser" element={<AddUser />} />
                <Route path="/edituser/:id" element={<EditUser />} />
            </Routes>
        </Router>x
    </div>
  )
}

export default App
