import React from 'react'


const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Admin Register</h2>
      <form>
         {/* Employee ID Field */}
         <div className="mb-4">
          <label className="block text-green-700 font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your Hospital Name"
          />
        </div>
        {/* HRN Field */}
        <div className="mb-4">
          <label className="block text-green-700 font-semibold mb-2" htmlFor="hrn">
            HRN Number
          </label>
          <input
            type="text"
            id="hrn"
            name="hrn"
            className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your HRN number"
          />
        </div>

        {/* address */}
        <div className="mb-6">
          <label className="block text-green-700 font-semibold mb-2" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your Address"
          />
        </div>

        {/* Contact Field */}
        <div className="mb-6">
          <label className="block text-green-700 font-semibold mb-2" htmlFor="contact">
            Contact
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your Contact"
          />
        </div>

        {/* email Field */}
        <div className="mb-6">
          <label className="block text-green-700 font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your email"
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
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Signup
