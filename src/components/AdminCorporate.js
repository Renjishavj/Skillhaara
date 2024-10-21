import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminCorporate() {
  const [corporateTrainings, setCorporateTrainings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCorporateTrainings = async () => {
      try {
        const response = await axios.get('http://localhost:3300/user/viewcorporate');
        setCorporateTrainings(response.data.newCorporateTraining);
        console.log(response.data.newCorporateTraining)
        setLoading(false);
      } catch (err) {
        setError('An error occurred while fetching corporate training details');
        setLoading(false);
      }
    };

    fetchCorporateTrainings();
  }, []);

  if (loading) {
    return <p>Loading corporate training details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1 className="admin-view">Corporate Training Enquiries</h1>
      {corporateTrainings.length > 0 ? (
        <table border="1" cellPadding="10" cellSpacing="0" className="table-admin">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Mobile Number</th>
              <th>Email</th>
              <th>Organization</th>
              <th>Preferred Time</th>
              <th className="message-cols">Message</th>
            </tr>
          </thead>
          <tbody>
            {corporateTrainings.map((training, index) => (
              <tr key={index}>
                <td>{training.fullName}</td>
                <td>{training.mobileNumber}</td>
                <td>{training.email}</td>
                <td>{training.organizationTime}</td>
                <td>{training.rightTime}</td>
                <td className="message-cols">{training.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No corporate training enquiries found.</p>
      )}
    </div>
  );
}

export default AdminCorporate;
