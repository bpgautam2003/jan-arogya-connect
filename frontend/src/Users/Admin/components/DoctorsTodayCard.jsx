import React from 'react';

const DoctorsTodayCard = ({ doctors }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center text-green-600">Doctors Today</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* First Column: Timings */}
        <div className="space-y-4">
          {doctors.map((doctor, index) => (
            <div key={index} className="text-lg font-medium text-green-600">
              {doctor.time}
            </div>
          ))}
        </div>

        {/* Second Column: Doctor Names */}
        <div className="space-y-4">
          {doctors.map((doctor, index) => (
            <div key={index} className="text-lg font-medium text-green-600">
              {doctor.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsTodayCard;
