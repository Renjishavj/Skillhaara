import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../assets/styles/style.css"
function AdminCustomer() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:3300/user/viewcustomer');
        setCustomers(response.data.newCustomer);
        setLoading(false);
      } catch (err) {
        setError('An error occurred while fetching customer details');
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) {
    return <p>Loading customer details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1 className="admin-view">Customer Enquiries</h1>
      {customers.length > 0 ? (
        <table border="1" cellPadding="10" cellSpacing="0" className="table-admin">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Mobile Number</th>
              <th>Email</th>
              <th>State</th>
              <th>City</th>
              <th className="message-col">Message</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.fullName}</td>
                <td>{customer.mobileNumber}</td>
                <td>{customer.email}</td>
                <td>{customer.state}</td>
                <td>{customer.city}</td>
                <td className="message-col">{customer.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No customer enquiries found.</p>
      )}
    </div>
  );
}

export default AdminCustomer;
