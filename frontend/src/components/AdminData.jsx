import React from 'react'

const AdminData = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-[50vh] w-full">
      <div className="bg-white shadow-lg rounded-lg flex w-full h-full p-6">
        {/* First Column: Total Beds */}
        <div className="w-1/2 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl">
              {totalBeds}
            </div>
            <p className="mt-2 text-center text-lg font-medium">Total Beds</p>
          </div>
        </div>

        {/* Second Column: Available and Occupied Beds */}
        <div className="w-1/2 flex flex-col justify-between">
          {/* Available Beds */}
          <div className="flex flex-col items-center mb-4">
            <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-white text-lg">
              {availableBeds}
            </div>
            <p className="mt-2 text-center text-lg font-medium">Available Beds</p>
          </div>

          {/* Occupied Beds */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center text-white text-lg">
              {occupiedBeds}
            </div>
            <p className="mt-2 text-center text-lg font-medium">Occupied Beds</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AdminData
