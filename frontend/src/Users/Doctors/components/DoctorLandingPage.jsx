import React, { useState, useEffect, useCallback } from 'react';
import SearchField from './SearchField'; // Import your SearchField component
import './DoctorList.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';
import DoctorNavbar from './DoctorNavbar';

// Function to fetch doctors from the API
const fetchDoctors = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/doctor'); // Replace with your API URL
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch doctors:', error);
    return []; // Return an empty array or handle the error as needed
  }
};

const getMatchedDoctors = (searchText, doctorList) => {
  if (!searchText) return doctorList;
  return doctorList.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchText.toLowerCase())
  );
};

// const DoctorList = ({ list, navigateToDoctorDetails }) => (
//   <div className="doctor-carousel">
//     <div className="carousel-header">
//       <h2>Our Doctors</h2>
//     </div>
//     <div className="carousel-body">
//       {list.map((doctor, index) => (
//         <div key={index} className="doctor-card">
//           <div className="doctor-card-content">
//             <h3 className="doctor-name">{doctor.name}</h3>
//             <p className="doctor-specialization">{doctor.speciality}</p>
//           </div>
//           <div className="doctor-card-footer">
//             <button onClick={navigateToDoctorDetails} className="details-button">Details</button>
//             <button className="contact-button">Contact</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// latest commited
const DoctorList = ({ list, navigateToDoctorDetails }) =>(
  <div className="doctor-carousel">
    <div className="carousel-header">
      <h2>Our Doctors</h2>
    </div>
    <div className="carousel-body ml-5">
      {list.map((doctor) => (
        <div key={doctor.reg_no} className="doctor-card">
          <div className="doctor-card-content">
            <h3 className="doctor-name">{doctor.name}</h3>
            <p className="doctor-specialization">{doctor.speciality}</p>
          </div>
          <div className="doctor-card-footer">
            <button 
             
              onClick={() => navigateToDoctorDetails(doctor.reg_no)} // Pass the doctor ID
              className="details-button"
            >
              Details
            </button>
            <button className="contact-button">Contact</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// const DoctorList = ({ list, navigateToDoctorDetails }) => (
//   <div className="doctor-carousel">
//     <div className="carousel-header">
//       <h2>Our Doctors</h2>
//     </div>
//     <div className="carousel-body ml-5">
//       {list.map((doctor) => (
//         <div key={doctor.reg_no} className="doctor-card">
//           <div className="doctor-card-content">
//             <h3 className="doctor-name">{doctor.name}</h3>
//             <p className="doctor-specialization">{doctor.speciality}</p>
//           </div>
//           <div className="doctor-card-footer">
//             {/* Use the navigateToDoctorDetails prop to handle navigation */}
//             <button 
//               onClick={() => navigateToDoctorDetails(doctor._id)}
//               className="details-button"
//             >
//               Details
//             </button>
//             <button className="contact-button">Contact</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default DoctorList;


const Newdashboard = () => {
  const [doctorList, setDoctorList] = useState([]);
  const [filteredDoctorList, setFilteredDoctorList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleClick = async(id) => {    
    navigate(`/doctor-profile/${id}`)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const doctors = await fetchDoctors();
        setDoctorList(doctors);
        setFilteredDoctorList(doctors);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError('Failed to load doctors');
      }
    };
    fetchData();
  }, []);

  const onDoctorSearch = useCallback((value) => {
    const filteredDoctors = getMatchedDoctors(value, doctorList);
    setFilteredDoctorList(filteredDoctors);
  }, [doctorList]);

  const navigateToDoctorDetails = (regNo) => {
    navigate(`/doctor-profile/${regNo}`); // Use the doctor ID to navigate
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="react-search-field-demo container">
      <DoctorNavbar/>
      <div>
        {/* <h3>Doctor Availability</h3>
        <SearchField
          placeholder="Search doctor"
          onChange={onDoctorSearch}
        /> */}
        <DoctorList 
          list={filteredDoctorList} 
          navigateToDoctorDetails={navigateToDoctorDetails} // Pass the function as a prop
        />
      </div>
    </div>
  );
};

export default Newdashboard;



// const Newdashboard = () => {
//   const [doctorList, setDoctorList] = useState([]);
//   const [filteredDoctorList, setFilteredDoctorList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const doctors = await fetchDoctors();
//         setDoctorList(doctors);
//         setFilteredDoctorList(doctors);
//         setLoading(false);
//       } catch (error) {
//         setLoading(false);
//         setError('Failed to load doctors');
//       }
//     };
//     fetchData();
//   }, []);

//   const onDoctorSearch = useCallback((value) => {
//     const filteredDoctors = getMatchedDoctors(value, doctorList);
//     setFilteredDoctorList(filteredDoctors);
//   }, [doctorList]);

//   const navigateToDoctorDetails = () => {
//     navigate('/doctor-profile/:reg_no');
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="react-search-field-demo container">
//       <div>
//         <h3>Doctor Availability</h3>
//         <SearchField
//           placeholder="Search doctor"
//           onChange={onDoctorSearch}
//         />
//         <DoctorList 
//           list={filteredDoctorList} 
//           navigateToDoctorDetails={navigateToDoctorDetails} // Pass the function as a prop
//         />
//       </div>
//     </div>
//   );
// };

// export default Newdashboard;

