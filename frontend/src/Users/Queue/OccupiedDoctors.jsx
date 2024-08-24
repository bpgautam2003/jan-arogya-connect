import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OccupiedDoctors = () => {
    const [occupiedDoctors, setOccupiedDoctors] = useState([]);

    useEffect(() => {
        fetchOccupiedDoctors();
    }, []);

    const fetchOccupiedDoctors = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/doctor/occupied');
            setOccupiedDoctors(response.data);
        } catch (error) {
            console.error("Error fetching occupied doctors", error);
        }
    };

    const freeDoctor = async (doctorId) => {
        try {
            await axios.put(`http://localhost:5000/api/doctor/free/${doctorId}`);
            fetchOccupiedDoctors(); // Refresh the list after freeing the doctor
        } catch (error) {
            console.error("Error freeing doctor", error);
        }
    };

    return (
        <div>
            <h2>Occupied Doctors</h2>
            <ul>
                {occupiedDoctors.map(doctor => (
                    <li key={doctor._id}>
                        {doctor.name} - {doctor.speciality}
                        <button onClick={() => freeDoctor(doctor._id)}>Free Doctor</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OccupiedDoctors;