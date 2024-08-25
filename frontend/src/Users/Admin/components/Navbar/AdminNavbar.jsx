import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dashboardRef = useRef(null);
  const navigate = useNavigate();

  const toggleDashboard = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dashboardRef.current && !dashboardRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  
  const handleLogout = () => {
    // Clear user authentication data (e.g., remove JWT token)
    localStorage.removeItem('token'); // Adjust this based on where your token is stored

    // Redirect to login page
    navigate('/Users/Admin/components/auth/Login');
  };


  // const navigateToDoctor = () => {
  //   // Clear user authentication data (e.g., remove JWT token)
  //   // localStorage.removeItem('token'); // Adjust this based on where your token is stored

  //   // Redirect to login page
  //   navigate('/Users/Doctors/components/DoctorLandingPage');
  // };

  return (
    <div>
      <nav className="bg-green-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">My App</h1>
          <button
            onClick={toggleDashboard}
            className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-200"
          >
            Open Dashboard
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </nav>

      <div
        ref={dashboardRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Dashboard</h2>
          <ul>
            <li className="mb-2">
              <Link
                to="/Users/Doctors/components/DoctorLandingPage"
                className="text-green-600 hover:underline"
                // onClick={navigateToDoctor} // Close dashboard on click
              >
                Doctor
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-green-600 hover:underline"
                onClick={() => setIsOpen(false)} // Close dashboard on click
              >
                Inventory
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
