import React, { useState } from 'react';
//import './CodeMasterWeb.css'; // if you want styles separately

const initialCodes = [
  { id: 1, code_name: 'Red', code_color: '#ff0000', code_purpose: 'Fire Emergency', code_icon: '🔥' },
  { id: 2, code_name: 'Blue', code_color: '#0000ff', code_purpose: 'Medical Help', code_icon: '💉' },
];

const CodeMaster = () => {
  const [codes, setCodes] = useState(initialCodes);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    code_name: '',
    code_color: '#000000',
    code_purpose: '',
    code_icon: '❓',
  });

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleAddCode = () => {
    if (!form.code_name.trim()) {
      alert('Code name is required!');
      return;
    }
    const newCode = {
      id: codes.length + 1,
      ...form,
    };
    setCodes([...codes, newCode]);
    setShowModal(false);
    setForm({
      code_name: '',
      code_color: '#000000',
      code_purpose: '',
      code_icon: '❓',
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this code?')) {
      setCodes(codes.filter((c) => c.id !== id));
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Emergency Code Master</h2>

      <button style={styles.addButton} onClick={() => setShowModal(true)}>➕ Add Code</button>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Color</th>
            <th>Code Name</th>
            <th>Purpose</th>
            <th>Icon</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {codes.map(code => (
            <tr key={code.id}>
              <td>
                <div style={{ backgroundColor: code.code_color, width: 24, height: 24, borderRadius: 4 }} />
              </td>
              <td>{code.code_name}</td>
              <td>{code.code_purpose}</td>
              <td style={{ fontSize: '20px' }}>{code.code_icon}</td>
              <td>
                <button style={styles.deleteButton} onClick={() => handleDelete(code.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div style={styles.modalBackdrop}>
          <div style={styles.modal}>
            <h3>Add New Emergency Code</h3>

            <label>Code Name</label>
            <input
              type="text"
              value={form.code_name}
              onChange={(e) => handleChange('code_name', e.target.value)}
              style={styles.input}
            />

            <label>Purpose</label>
            <textarea
              value={form.code_purpose}
              onChange={(e) => handleChange('code_purpose', e.target.value)}
              style={styles.input}
            />

            <label>Icon</label>
            <input
              type="text"
              placeholder="e.g. 🔥 or 🏥"
              value={form.code_icon}
              onChange={(e) => handleChange('code_icon', e.target.value)}
              style={styles.input}
            />

            <label>Color</label>
            <input
              type="color"
              value={form.code_color}
              onChange={(e) => handleChange('code_color', e.target.value)}
              style={{ ...styles.input, padding: 0, height: 40 }}
            />

            <div style={styles.modalActions}>
              <button onClick={() => setShowModal(false)} style={styles.cancelButton}>Cancel</button>
              <button onClick={handleAddCode} style={styles.saveButton}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '30px',
    fontFamily: "'Segoe UI', sans-serif",
  },
  header: {
    textAlign: 'center',
    color: '#1d3557',
    marginBottom: '20px',
  },
  addButton: {
    backgroundColor: '#1d3557',
    color: 'white',
    padding: '10px 16px',
    border: 'none',
    borderRadius: '6px',
    marginBottom: '20px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '40px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  deleteButton: {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
  },
  modalBackdrop: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '400px',
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0px 4px 12px rgba(0,0,0,0.2)',
  },
  modalActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cancelButton: {
    padding: '10px 20px',
    backgroundColor: '#ccc',
    border: 'none',
    borderRadius: '6px',
  },
  saveButton: {
    padding: '10px 20px',
    backgroundColor: '#1d3557',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
  },
};

export default CodeMaster;
