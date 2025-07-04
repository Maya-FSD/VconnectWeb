import React from 'react';

const styles = {
  container: {
    maxWidth: '480px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  },
  heading: {
    color: '#1d3557',
    textAlign: 'center',
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    color: '#1d3557',
    fontSize: '16px',
    fontWeight: 600,
    marginBottom: '4px',
    marginTop: '16px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #dee2e6',
    borderRadius: '10px',
    marginBottom: '8px',
    fontSize: '16px',
    backgroundColor: '#fff',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    gap: '16px',
  },
  button: {
    flex: 1,
    padding: '14px',
    border: 'none',
    borderRadius: '12px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
  },
  submitButton: {
    backgroundColor: '#00b4d8',
  },
  cancelButton: {
    backgroundColor: '#e63946',
  },
};

const RegistrationWeb = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Register</h2>
      <form>
        <label style={styles.label}>First Name</label>
        <input style={styles.input} type="text" placeholder="First Name" />

        <label style={styles.label}>Last Name</label>
        <input style={styles.input} type="text" placeholder="Last Name" />

        <label style={styles.label}>Location (Branch UUID)</label>
        <input style={styles.input} type="text" placeholder="Location Id" />

        <label style={styles.label}>Phone Number</label>
        <input style={styles.input} type="tel" placeholder="Enter 10-digit Phone Number" maxLength={10} />

        <label style={styles.label}>Pin</label>
        <input style={styles.input} type="password" placeholder="6–20 digit Pin number" />

        <label style={styles.label}>Confirm Pin</label>
        <input style={styles.input} type="password" placeholder="Confirm Pin" />

        <div style={styles.buttonRow}>
          <button type="submit" style={{ ...styles.button, ...styles.submitButton }}>Submit</button>
          <button type="button" style={{ ...styles.button, ...styles.cancelButton }}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationWeb;
