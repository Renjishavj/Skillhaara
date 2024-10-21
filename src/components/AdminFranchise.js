import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminFranchise() {
  const [franchiseEnquiries, setFranchiseEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFranchiseEnquiries = async () => {
      try {
        const response = await axios.get('http://localhost:3300/user/viewfranchise');
        setFranchiseEnquiries(response.data.newFranchiseEnquiry);
        console.log(response.data.newFranchiseEnquiry)
        setLoading(false);
      } catch (err) {
        setError('An error occurred while fetching franchise enquiries');
        setLoading(false);
      }
    };

    fetchFranchiseEnquiries();
  }, []);

  if (loading) {
    return <p>Loading franchise enquiries...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1 className="admin-view">Franchise Enquiries</h1>
      {franchiseEnquiries.length > 0 ? (
        <table border="1" cellPadding="10" cellSpacing="0" className="table-admin">
          <thead>
            <tr>
              <th>Full Name</th>
              
              <th>Mobile Number</th>
              <th className="exp">Email</th>
              <th>State</th>
              <th>City</th>
              <th className="message-cols">Message</th>
            </tr>
          </thead>
          <tbody>
            {franchiseEnquiries.map((enquiry, index) => (
              <tr key={index}>
                <td>{enquiry.fullName}</td>
               
                <td>{enquiry.mobileNumber}</td>
                <td className="exp">{enquiry.email}</td>
                <td>{enquiry.state}</td>
                <td>{enquiry.city}</td>
                <td className="message-cols">{enquiry.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No franchise enquiries found.</p>
      )}
    </div>
  );
}

export default AdminFranchise;
