import React from 'react'
// import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <div>
      <nav className="bg-green-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Website Name */}
          <h1 className="text-white text-2xl font-bold">Healthcare System</h1>

          {/* Login and Signup Buttons */}
          <div className="space-x-4">
            {/* <Link to="/login"> */}
              <button className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-200">
                Login
              </button>
            {/* </Link> */}
            {/* <Link to="/signup"> */}
              <button className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-200">
                Signup
              </button>
            {/* </Link> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default AdminNavbar
