import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data'); // Replace with your API
        const result = await response.json();
        setData(result);
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

  return (
    <div>
      <h1>Data Table</h1>
      <button onClick={downloadExcel}>Download Excel</button>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            {/* Add other headers according to your data */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              {/* Add other fields */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
