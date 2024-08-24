import React from 'react'

const DoctorProfile = () => {
    return (
        <div className="max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden">
          <div className="flex">
            {/* Left Section: Photo */}
            <div className="w-1/2 bg-green-200 flex items-center justify-center">
              <img
                className="w-24 h-24 rounded-full border-2 border-green-400"
                src="https://via.placeholder.com/100"
                alt="Doctor Profile"
              />
            </div>
    
            {/* Right Section: Information */}
            <div className="w-1/2 p-4">
              <h2 className="text-xl font-bold text-green-800">Dr. John Doe</h2>
              <p className="text-green-600">Cardiologist</p>
              <div className="mt-4">
                <h3 className="text-green-700 font-semibold">Contact Information</h3>
                <p className="text-green-600">Phone: (123) 456-7890</p>
                <p className="text-green-600">Registration Number: DR12045</p>
              </div>
              <div className="mt-4">
                <h3 className="text-green-700 font-semibold">Experience</h3>
                <p className="text-green-600">10+ Years</p>
              </div>
                <div className='mt-4'>
                    <h3 className="text-green-700 font-semibold">Address</h3>
                    <p className="text-green-600">XYZ</p>
                </div>
            </div>
          </div>
        </div>
      );
}

export default DoctorProfile;
