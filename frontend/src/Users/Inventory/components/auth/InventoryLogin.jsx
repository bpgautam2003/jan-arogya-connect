import React from 'react'

const InventoryLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Inventory Login</h2>
        <form>
          {/* Employee ID Field */}
          <div className="mb-4">
            <label className="block text-green-700 font-semibold mb-2" htmlFor="employeeId">
              Employee ID
            </label>
            <input
              type="text"
              id="employeeId"
              name="employeeId"
              className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your Employee ID"
            />
          </div>

          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-green-700 font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your Name"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-green-700 font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your Password"
            />
          </div>

          {/* Login Button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 w-full"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default InventoryLogin
