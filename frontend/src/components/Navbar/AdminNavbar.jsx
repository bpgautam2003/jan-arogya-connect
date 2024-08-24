import React from 'react'

const AdminNavbar = () => {
  return (
    <div>
       <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Website Name */}
        <h1 className="text-white text-2xl font-bold">Healthcare System</h1>

        {/* Login and Signup Buttons */}
        <div className="space-x-4">
          <button className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-200">
            Login
          </button>
          <button className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-200">
            Signup
          </button>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default AdminNavbar
