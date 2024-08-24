import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageQueues = () => {
  const [queues, setQueues] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchQueues = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/queue/doctor-queues');
        setQueues(response.data);
      } catch (error) {
        console.error('Error fetching queues:', error);
        setMessage('Error fetching queues.');
      }
    };

    fetchQueues();
  }, []);

  const handleRemovePatient = async (doctorId) => {
    try {
      const response = await axios.post('http://localhost:5000/api/queue/remove-patient-from-front', { doctorId });
      setMessage(response.data.message);
      // Update the queue list after removal
      const updatedQueues = queues.map(queue => {
        if (queue.doctorId === doctorId) {
          const newQueue = { ...queue, patientQueue: queue.patientQueue.slice(1) };
          return newQueue;
        }
        return queue;
      });
      setQueues(updatedQueues);
    } catch (error) {
      setMessage(error.response.data.message || 'An error occurred');
    }
  };

  return (
    <div>
      <h1>Manage Doctor Queues</h1>
      {queues.length > 0 ? (
        <ul>
          {queues.map(queue => (
            <li key={queue.doctorId}>
              <h2>Doctor {queue.doctorId}</h2>
              <ul>
                {queue.patientQueue.map((patientId, index) => (
                  <li key={index}>{patientId}</li>
                ))}
              </ul>
              <button onClick={() => handleRemovePatient(queue.doctorId)}>
                Remove Patient from Front
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No queues available.</p>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default ManageQueues;