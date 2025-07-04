import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ApiHelper from '../utills/apiHelper';
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  },
  heading: {
    textAlign: 'center',
    color: '#1d3557',
    marginBottom: '20px',
  },
  dropdown: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '20px',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'center',
  },
  codeButton: {
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#0077b6',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    flex: '1 1 calc(33.333% - 32px)',
    cursor: 'pointer',
    minWidth: '150px',
    maxWidth: '200px',
  },
  codePurpose: {
    marginTop: '8px',
    fontSize: '14px',
    fontStyle: 'italic',
  },
  loading: {
    textAlign: 'center',
    marginTop: '40px',
    fontSize: '18px',
  },
};

const Selectcode = () => {
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState('');
  const [codes, setCodes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate fetch branches
    console.log('Fetching branches...');
    const fetchBranches = async () => {
      try {
        const res = await ApiHelper.get('vconnect/branches');
        console.log('Branches fetched:', res.data);
        setBranches(res.data);
        if (res.data.length > 0) setSelectedBranch(res.data[0].id);
      } catch (err) {
        console.error('Failed to load branches', err);
      }
    };
    fetchBranches();
  }, []);

  useEffect(() => {
    if (selectedBranch) {
      setLoading(true);
      // Simulate fetch codes
      axios.get(`/api/branches/${selectedBranch}/codes`)
        .then((res) => {
          setCodes(res.data);
        })
        .catch((err) => {
          console.error('Failed to load codes', err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [selectedBranch]);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Select Emergency Code</h2>

      <select
        style={styles.dropdown}
        value={selectedBranch}
        onChange={(e) => setSelectedBranch(e.target.value)}
      >
        {branches.map((branch) => (
          <option key={branch.id} value={branch.id}>{branch.location}</option>
        ))}
      </select>

      {loading ? (
        <div style={styles.loading}>Loading codes...</div>
      ) : (
        <div style={styles.grid}>
          {codes.length === 0 ? (
            <div style={styles.loading}>No codes found for selected branch.</div>
          ) : (
            codes.map((code) => (
              <div
                key={code.id}
                style={{ ...styles.codeButton, backgroundColor: code.code_color || '#0077b6' }}
                onClick={() => alert(`Initiate ${code.display_name}`)}
              >
                <div>{code.display_name || code.code_name}</div>
                <div style={styles.codePurpose}>{code.code_purpose}</div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Selectcode;