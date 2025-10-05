import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import '../Pages/DataTable.css'; // Adding a CSS file for custom styles

const DataTable = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://3.109.150.21:8081/booking/getAll'); // Replace with your API
        const result = await response.json();
        setData(result.Data);
        console.log("Result : ", result.Data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Function to download data as Excel
  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Export the Excel file
    XLSX.writeFile(workbook, "data.xlsx");
  };

  // Filter data based on search term
  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="table-container">
      <div className="header">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button className="download-button" onClick={downloadExcel}>Download Excel</button>
      </div>
      <table border="1">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Patient Name</th>
            <th>Patient Email</th>
            <th>Patient Mobile</th>
            <th>Patient Address</th>
            <th>Booking Date</th>
            <th>Cancer Stage</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstName} {item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>{item.address}</td>
              <td>{item.scheduleDate}</td>
              <td>{item.typeOfCancer}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='last'></div>
    </div>
  );
};

export default DataTable;
