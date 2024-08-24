import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close dropdown on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle dropdown toggle
  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown if clicking outside (optional)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.dropdown') === null) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Determine if the Login button should be shown
  // const shouldShowLogin = ![
  //   '/Users/Admin/components/auth/Login',
  //   '/Users/Inventory/components/auth/InventoryLogin',
  //   '/Users/Receptionist/components/auth/ReceptionistLogin'
  // ].includes(location.pathname);

  return (
    <nav className="bg-green-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link
          to="./"
          >
            Jan Aarogya Connect
          </Link>
        </div>
        <div className="space-x-4 flex items-center">
          {/* Register Button/Link */}
          <Link
            to="/Users/Admin/components/auth/Signup"
            className="bg-white text-green-600 font-semibold py-2 px-4 rounded-md hover:bg-green-500 hover:text-white transition duration-300"
          >
            Register
          </Link>

          {/* Conditionally render Login Dropdown */}
          {/* {shouldShowLogin && ( */}
            <div className="relative inline-block text-left dropdown">
              <button
                onClick={handleDropdownToggle}
                className="bg-white text-green-600 font-semibold py-2 px-4 rounded-md hover:bg-green-500 hover:text-white transition duration-300"
              >
                Login
              </button>
              <div
                className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 ${isOpen ? 'block' : 'hidden'}`}
              >
                <div className="py-1">
                  <Link
                    to="/Users/Admin/components/auth/Login"
                    className="block px-4 py-2 text-sm text-green-700 hover:bg-green-100"
                    onClick={() => setIsOpen(false)} // Close dropdown on click
                  >
                    Admin
                  </Link>
                  <Link
                    to="/Users/Receptionist/components/auth/ReceptionistLogin"
                    className="block px-4 py-2 text-sm text-green-700 hover:bg-green-100"
                    onClick={() => setIsOpen(false)} // Close dropdown on click
                  >
                    Receptionist
                  </Link>
                  <Link
                    to="/Users/Inventory/components/auth/InventoryLogin"
                    className="block px-4 py-2 text-sm text-green-700 hover:bg-green-100"
                    onClick={() => setIsOpen(false)} // Close dropdown on click
                  >
                    Inventory
                  </Link>
                </div>
              </div>
            </div>
          {/* )} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
