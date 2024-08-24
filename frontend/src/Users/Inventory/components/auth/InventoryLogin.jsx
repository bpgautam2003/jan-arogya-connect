import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';
import HomeNavbar from '../../../Admin/components/Navbar/HomeNavbar'

const InventoryLogin = () => {
  // State to manage form input values
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/inventory-login', {
        employee_id: employeeId,
        password: password,
      });


      setSuccess('Login Successfull');
      //alert(success)
      navigate('/inventory-home')
      setError('');
    } catch (error) {
      setError('Something went wrong');
      setSuccess('');
    }
  };

  return (
    <>
    <HomeNavbar/>
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Inventory Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Employee ID Field */}
          <div className="mb-4">
            <label className="block text-green-700 font-semibold mb-2 text-left" htmlFor="employeeId">
              Employee ID
            </label>
            <input
              type="text"
              id="employee_id"
              name="employee_id"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your Employee ID"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-green-700 font-semibold mb-2 text-left" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your Password"
            />
          </div>

           {/* Error and Success Messages */}
           {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {success && <p className="text-green-500 text-center mb-4">{success}</p>}

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
    </>
  )
}

export default InventoryLogin
