import React, { useState, useEffect } from 'react';
import axiosHelper from "../utils/apiHelper";

const Message = () => {
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const branchData = await axiosHelper.get("vconnect/branches");
        setBranches(branchData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setError("Failed to load branch data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading branches...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Branch ID</th>
              <th>Branch Name</th>
            </tr>
          </thead>
          <tbody>
            {branches.map((branch, index) => (
              <tr key={index}>
                <td>{branch.id}</td>
                <td>{branch.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Message;
