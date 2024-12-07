import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../assets/styles/style.css"
function AdminHire() {
  const [hireEnquiries, setHireEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchHireEnquiries = async () => {
      try {
        const response = await axios.get('http://localhost:3300/user/viewhire');
        setHireEnquiries(response.data.newHireEnquiry);
        console.log(response.data.newHireEnquiry)
        setLoading(false);
      } catch (err) {
        setError('An error occurred while fetching hire enquiries');
        setLoading(false);
      }
    };

    fetchHireEnquiries();
  }, []);

  if (loading) {
    return <p>Loading hire enquiries...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1 className="admin-view">Hire Enquiries</h1>
      {hireEnquiries.length > 0 ? (
        <table border="1" cellPadding="10" cellSpacing="0" className="table-admin">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Company Name</th>
              <th>Mobile Number</th>
              <th className="pos">Email</th>
              <th className='pos'>No. of Positions</th>
              <th className="exp">Designation</th>
              <th className="exp">Experience</th>
              <th>Job Location</th>
              <th className="message">Message</th>
            </tr>
          </thead>
          <tbody>
            {hireEnquiries.map((enquiry, index) => (
              <tr key={index}>
                <td>{enquiry.fullName}</td>
                <td>{enquiry.companyName}</td>
                <td>{enquiry.mobileNumber}</td>
                <td className="pos">{enquiry.email}</td>
                <td className='pos'>{enquiry.numberOfPositions}</td>
                <td className="exp">{enquiry.designation}</td>
                <td className="exp">{enquiry.fresher}</td>
                <td>{enquiry.jobLocation}</td>
                <td className="message">{enquiry.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hire enquiries found.</p>
      )}
    </div>
  );
}

export default AdminHire;
