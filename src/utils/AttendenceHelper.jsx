import axios from "axios";
import React from "react";

export const columns = [
  { name: 'S No', selector: (row) => row.sno, width: "70px" },
  { name: 'Emp ID', selector: (row) => row.employeeId, width: "100px" },
  { name: 'Name', selector: (row) => row.name, width: "100px" },
  { name: 'Department', selector: (row) => row.department, width: "120px" },
  { name: 'Action', selector: (row) => row.action, center: true },
];

export const AttendenceHelper = ({ status, employeeId, statusChange }) => {
  const markEmployee = async (status, employeeId) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/api/attendence/update/${employeeId}`, { status }, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.data.success) {
        statusChange(); // refresh UI
      } else {
        alert("Update failed");
      }
    } catch (error) {
      console.error(error);
      alert(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      {status == null ? (
        <div className="flex" style={{ gap: '12px', flexWrap: 'wrap' }}>
          <button className="bg-green-500 text-white" style={{padding: '8px 16px', cursor: 'pointer'}} onClick={() => markEmployee("present", employeeId)}>Present</button>
          <button className="bg-red-500 text-white" style={{ padding: '8px 16px', cursor: 'pointer' }} onClick={() => markEmployee("absent", employeeId)}>Absent</button>
          <button className="bg-gray-500 text-white" style={{ padding: '8px 16px', cursor: 'pointer' }} onClick={() => markEmployee("sick", employeeId)}>Sick</button>
          <button className="bg-yellow-400 text-black" style={{ padding: '8px 16px', cursor: 'pointer' }} onClick={() => markEmployee("leave", employeeId)}>Leave</button>
        </div>
      ) : (
        <p className="bg-gray-200 text-center rounded" style={{ padding: '8px 16px', cursor: 'pointer' }}>{status}</p>
      )}
    </div>
  );
};
