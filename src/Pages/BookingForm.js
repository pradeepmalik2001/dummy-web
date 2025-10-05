import React, { useState } from 'react';
import './BookingForm.css'; // Import the CSS for styling

const BookingForm = () => {
  // const formatDate = (date) => {
  //   const d = new Date(date);
  //   const day = String(d.getDate()).padStart(2, '0');
  //   const month = String(d.getMonth() + 1).padStart(2, '0');
  //   const year = d.getFullYear();
  //   return `${day}/${month}/${year}`;
  // };

  //const today = formatDate(new Date());
  const today = new Date().toISOString().split("T")[0]; 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    typeOfCancer: '',
    remarks: '',
    scheduleDate: today // Set today's date as the default value
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://3.109.150.21:8081/booking/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.Status == 200) {
        alert("Data Saved Successfully");
        console.log('Success:', result);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          postalCode: '',
          typeOfCancer: '',
          remarks: '',
          scheduleDate: today
        });
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="formm">
        <div className="form-group">
          <label htmlFor="firstName">First Name * </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder='Enter your first name'
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name * </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder='Enter your last name'
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter your email'
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone *</label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder='Enter your phone number'
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="scheduleDate">Date *</label>
          <input
            type="date"
            id="scheduleDate"
            name="scheduleDate"
            value={formData.scheduleDate}
            onChange={handleChange}
            placeholder='Enter you schedule date'
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address * </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder='Enter your address'
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City * </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder='Enter your city'
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State * </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder='Enter your state'

            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">Postal Code * </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            placeholder='Enter your postal code'

            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="typeOfCancer">Type of cancer and stage * </label>
          <input
            type="text"
            id="typeOfCancer"
            name="typeOfCancer"
            value={formData.typeOfCancer}
            onChange={handleChange}
            placeholder='Enter your type of cancer and stage'

            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="remarks">Please share anything that will help prepare for our meeting.</label>
          <input
            type="text"
            id="remarks"
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            placeholder='Enter any remarks'
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
