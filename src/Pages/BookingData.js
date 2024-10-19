import React from 'react';
import { useState, useEffect } from "react";
//import MaterialTable from "@material-table/core";

function BookingData() {
    const [ticketDetails, setTicketDetails] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data from the API when the component mounts
        const fetchData = async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Example API
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const result = await response.json();
            setTicketDetails(result);
            setLoading(false); 
          } catch (err) {
            setError(err.message);
            setLoading(false);  
          }
        };
    
        fetchData();
      }, []); 
    
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error}</div>;
   
  return (
    <div>
     {/* <MaterialTable
          title="Work Information Record"
          data={ticketDetails}
          columns={[
            {
              title: "Work ID",
              field: "workId",
            },
            {
              title: "Employee Name",
              field: "employeeName",
            },
            {
              title: "Employment Type",
              field: "employmentType",
            },
            {
              title: "Office Branch",
              field: "officeBranch",
            },
            {
              title: "Gender",
              field: "gender",
            },
            {
              title: "Blood Group",
              field: "bloodGroup",
            },

            {
              title: "Address",
              field: "address",
            }
          ]}
        /> */}
    </div>
  ) 
}

export default BookingData
