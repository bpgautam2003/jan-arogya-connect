import "./App.css";
import Admin from "./Users/Admin/components/Admin";
import ReceptionistLogin from "./Users/Receptionist/components/auth/ReceptionistLogin";
import Login from "./Users/Admin/components/auth/Login";
import Signup from "./Users/Admin/components/auth/Signup";
import HomeNavbar from "./Users/Admin/components/Navbar/HomeNavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InventoryLogin from "./Users/Inventory/components/auth/InventoryLogin";
import DoctorProfile from "./Users/Doctors/components/DoctorProfile.js"
import ReceptionistDashboard from "./Users/Receptionist/components/ReceptionistDashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <HomeNavbar />
        <Routes >
          <Route path="Users/Admin/components/auth/Login" element={<Login/>}/>
          <Route path="Users/Admin/components/auth/Signup" element={<Signup/>}/>
          <Route path="Users/Inventory/components/auth/InventoryLogin" element={<InventoryLogin/>}/>
          <Route path="Users/Receptionist/components/auth/ReceptionistLogin" element={<ReceptionistLogin/>}/>
          <Route path="/receptionist-dashboard" element={<ReceptionistDashboard/>}/>
          <Route path="/doctor-profile/:reg_no" element={<DoctorProfile/>} />
        </Routes>
        {/* <Admin />
        <ReceptionistLogin />
        <Login />
        <Signup /> */}
      </div>
    </Router>
  );
}

export default App;
