// import React from 'react'

// const DoctorLandingPage = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default DoctorLandingPage

// import React, { Component } from 'react';
// import SearchField from './SearchField';
// // Import SearchField if it's a custom or third-party component
// // import SearchField from 'path-to-search-field';
// // Import TypeChecker if it's a custom utility
// // import TypeChecker from 'path-to-type-checker';
// import './DoctorList.css';
// import { Link, useNavigate } from 'react-router-dom';

// // const doctorList = [
// //   {
// //     name: 'Dr. Smith',
// //     specialization: 'Cardiologist',
// //   },
// //   {
// //     name: 'Dr. Alan Donald',
// //     specialization: 'Dermatologist',
// //   },
// //   {
// //     name: 'Dr. Emily Johnson',
// //     specialization: 'Pediatrician',
// //   },
// //   // Add more doctors as needed
// // ];

// // Function to fetch doctors from the API
// const fetchDoctors = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/doctor'); // Replace with your API URL
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       console.log(data);
//       return data;
//     } catch (error) {
//       console.error('Failed to fetch doctors:', error);
//       return []; // Return an empty array or handle the error as needed
//     }
//   };
//   // navigateToDoctorDetails

//   const navigate = useNavigate();

//   const navigateToDoctorDetails = () => {
//     // Clear user authentication data (e.g., remove JWT token)
//     // localStorage.removeItem('token'); // Adjust this based on where your token is stored

//     // Redirect to login page
    
//     navigate('/Users/Admin/components/auth/Login');
//   };

//   const getMatchedDoctors = (searchText, doctorList) => {
//     if (!searchText) return doctorList;
//     return doctorList.filter((doctor) =>
//       doctor.name.toLowerCase().includes(searchText.toLowerCase())
//     );
//   };

//   const DoctorList = (props) => (
//     // <div className="doctor-carousel">
//     //   <div className="carousel-header">
//     //     <h2>Our Doctors</h2>
//     //   </div>
//     //   <div className="carousel-body">
//     //     {props.list.map((doctor, index) => (
//     //       <div key={index} className="doctor-card">
//     //         <div className="doctor-card-content">
//     //           <h3 className="doctor-name">{doctor.name}</h3>
//     //           <p className="doctor-specialization">{doctor.speciality}</p>
//     //         </div>
//     //       </div>
//     //     ))}
//     //   </div>
//     // </div>
//     <div className="doctor-carousel">
//   <div className="carousel-header">
//     <h2>Our Doctors</h2>
//   </div>
//   <div className="carousel-body">
//     {props.list.map((doctor, index) => (
//       <div key={index} className="doctor-card">
//         <div className="doctor-card-content">
//           <h3 className="doctor-name">{doctor.name}</h3>
//           <p className="doctor-specialization">{doctor.speciality}</p>
//         </div>
//         <div className="doctor-card-footer">
//           <button onClick={navigateToDoctorDetails} className="details-button">Details</button>
//           <button className="contact-button">Contact</button>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>

//   );

//   class Newdashboard extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         doctorList: [],
//         filteredDoctorList: [],
//         loading: true,
//         error: null,
//       };
//       this.onDoctorSearch = this.onDoctorSearch.bind(this);
//     }
  
//     async componentDidMount() {
//       try {
//         const doctors = await fetchDoctors();
//         this.setState({
//           doctorList: doctors,
//           filteredDoctorList: doctors,
//           loading: false,
//         });
//       } catch (error) {
//         this.setState({
//           loading: false,
//           error: 'Failed to load doctors',
//         });
//       }
//     }
  
//     onDoctorSearch(value) {
//       const { doctorList } = this.state;
//       const filteredDoctors = getMatchedDoctors(value, doctorList);
//       this.setState({
//         filteredDoctorList: filteredDoctors,
//       });
//     }
  
//     render() {
//       const { loading, error, filteredDoctorList } = this.state;
  
//       if (loading) return <p>Loading...</p>;
//       if (error) return <p>{error}</p>;
  
//       return (
//         <div className="react-search-field-demo container">
//           <div>
//             <h3>Doctor Availability</h3>
//             <SearchField
//               placeholder="Search doctor"
//               onChange={this.onDoctorSearch}
//             />
//             <DoctorList list={filteredDoctorList} />
//           </div>
//         </div>
//       );
//     }
//   }

// export default Newdashboard;



import React, { useState, useEffect, useCallback } from 'react';
import SearchField from './SearchField'; // Import your SearchField component
import './DoctorList.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

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

const DoctorList = ({ list, navigateToDoctorDetails }) => (
  <div className="doctor-carousel">
    <div className="carousel-header">
      <h2>Our Doctors</h2>
    </div>
    <div className="carousel-body">
      {list.map((doctor, index) => (
        <div key={index} className="doctor-card">
          <div className="doctor-card-content">
            <h3 className="doctor-name">{doctor.name}</h3>
            <p className="doctor-specialization">{doctor.speciality}</p>
          </div>
          <div className="doctor-card-footer">
            <button onClick={navigateToDoctorDetails} className="details-button">Details</button>
            <button className="contact-button">Contact</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);


const Newdashboard = () => {
  const [doctorList, setDoctorList] = useState([]);
  const [filteredDoctorList, setFilteredDoctorList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

  const navigateToDoctorDetails = () => {
    navigate('/doctor-profile/:reg_no');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="react-search-field-demo container">
      <div>
        <h3>Doctor Availability</h3>
        <SearchField
          placeholder="Search doctor"
          onChange={onDoctorSearch}
        />
        <DoctorList 
          list={filteredDoctorList} 
          navigateToDoctorDetails={navigateToDoctorDetails} // Pass the function as a prop
        />
      </div>
    </div>
  );
};

export default Newdashboard;

