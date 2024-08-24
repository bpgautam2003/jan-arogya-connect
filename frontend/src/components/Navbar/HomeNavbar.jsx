import React from 'react'

const HomeNavbar = () => {
  return (
    <div>
       <div>
      <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Website Name */}
        <h1 className="text-white text-2xl font-bold">Website Name</h1>

        {/* Login and Signup Buttons */}
        <div className="space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Login
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
            Signup
          </button>
        </div>
      </div>
    </nav>
    </div>
    </div>
  )
}

export default HomeNavbar
