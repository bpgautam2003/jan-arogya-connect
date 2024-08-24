import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const   HomeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Determine if the Login button should be shown
  const shouldShowLogin = !['/Reception/ReceptionistLogin', '/login/admin', '/login/inventory'].includes(location.pathname);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl" on>
          Jan Aarogya Connect
        </div>
        <div className="space-x-4 flex items-center">
          {/* Register Button/Link */}
          <Link
            to="Users/Admin/components/auth/Signup"
            className="bg-white text-green-600 font-semibold py-2 px-4 rounded-md hover:bg-green-500 hover:text-white transition duration-300"
          >
            Register
          </Link>

          {/* Conditionally render Login Dropdown */}
          {shouldShowLogin && (
            <div className="relative inline-block text-left">
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
                    to="Users/Admin/components/auth/Login"
                    className="block px-4 py-2 text-sm text-green-700 hover:bg-green-100"
                  >
                    Admin
                  </Link>
                  <Link
                    to="Users/Receptionist/components/auth/ReceptionistLogin"
                    className="block px-4 py-2 text-sm text-green-700 hover:bg-green-100"
                  >
                    Receptionist
                  </Link>
                  <Link
                    to="Users/Inventory/components/auth/InventoryLogin"
                    className="block px-4 py-2 text-sm text-green-700 hover:bg-green-100"
                  >
                    Inventory
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;