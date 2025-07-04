import React, { useState } from 'react';

const TenantSettings = () => {
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [expanded, setExpanded] = useState({
    recording: true,
    buttons: true,
    appearance: true,
  });

  const [automaticRecording, setAutomaticRecording] = useState(false);
  const [autoCodeActivation, setAutoCodeActivation] = useState(false);
  const [minSeconds, setMinSeconds] = useState('');
  const [maxSeconds, setMaxSeconds] = useState('');
  const [numButtons, setNumButtons] = useState(2);
  const [buttonStyle, setButtonStyle] = useState('Square');
  const [startWith, setStartWith] = useState('Dashboard');

  const customers = [
    { id: '1', name: 'Apollo Hospitals' },
    { id: '2', name: 'KIMS Health' },
  ];

  const toggleSection = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Tenant Settings</h2>

      {/* Customer Dropdown */}
      <div style={styles.card}>
        <h3 style={styles.cardTitle}>Select Customer</h3>
        <select
          style={styles.select}
          value={selectedCustomer}
          onChange={(e) => setSelectedCustomer(e.target.value)}
        >
          <option value="">-- Select --</option>
          {customers.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {selectedCustomer && (
        <>
          {/* Recording Settings */}
          <div style={styles.card}>
            <h3 style={styles.sectionHeader} onClick={() => toggleSection('recording')}>
              ▶ Recording Settings
            </h3>
            {expanded.recording && (
              <div>
                <div style={styles.row}>
                  <label style={styles.label}>Automatic Recording:</label>
                  <input
                    type="checkbox"
                    checked={automaticRecording}
                    onChange={() => setAutomaticRecording((v) => !v)}
                  />
                </div>
                <div style={styles.row}>
                  <label style={styles.label}>Auto Code Activation:</label>
                  <input
                    type="checkbox"
                    checked={autoCodeActivation}
                    onChange={() => setAutoCodeActivation((v) => !v)}
                  />
                </div>
                <div style={styles.row}>
                  <label style={styles.label}>Min Seconds:</label>
                  <input
                    type="number"
                    value={minSeconds}
                    onChange={(e) => setMinSeconds(e.target.value)}
                    style={styles.input}
                  />
                </div>
                <div style={styles.row}>
                  <label style={styles.label}>Max Seconds:</label>
                  <input
                    type="number"
                    value={maxSeconds}
                    onChange={(e) => setMaxSeconds(e.target.value)}
                    style={styles.input}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Button Settings */}
          <div style={styles.card}>
            <h3 style={styles.sectionHeader} onClick={() => toggleSection('buttons')}>
              ▶ Button Settings
            </h3>
            {expanded.buttons && (
              <>
                <div style={styles.radioGroup}>
                  <strong>Button Quantity:</strong>
                  {[1, 2, 3].map((num) => (
                    <label key={num} style={styles.radioLabel}>
                      <input
                        type="radio"
                        value={num}
                        checked={numButtons === num}
                        onChange={() => setNumButtons(num)}
                      />
                      {num} Button{num > 1 && 's'}
                    </label>
                  ))}
                </div>

                <div style={styles.radioGroup}>
                  <strong>Button Style:</strong>
                  {['Square', 'Circle', 'Rectangle'].map((style) => (
                    <label key={style} style={styles.radioLabel}>
                      <input
                        type="radio"
                        value={style}
                        checked={buttonStyle === style}
                        onChange={() => setButtonStyle(style)}
                      />
                      {style}
                    </label>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Appearance Settings */}
          <div style={styles.card}>
            <h3 style={styles.sectionHeader} onClick={() => toggleSection('appearance')}>
              ▶ Appearance Settings
            </h3>
            {expanded.appearance && (
              <div style={styles.radioGroup}>
                <strong>Start With:</strong>
                {['Dashboard', 'Graph'].map((view) => (
                  <label key={view} style={styles.radioLabel}>
                    <input
                      type="radio"
                      value={view}
                      checked={startWith === view}
                      onChange={() => setStartWith(view)}
                    />
                    {view}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div style={styles.buttonRow}>
            <button style={styles.cancel}>Cancel</button>
            <button style={styles.save}>Save Settings</button>
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '30px',
    fontFamily: "'Segoe UI', sans-serif",
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#1d3557',
    textAlign: 'center',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
  },
  cardTitle: {
    fontSize: '18px',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  sectionHeader: {
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: '12px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  label: {
    fontWeight: '500',
    marginRight: '10px',
  },
  input: {
    width: '100px',
    padding: '6px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  select: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  radioGroup: {
    marginBottom: '12px',
  },
  radioLabel: {
    marginRight: '20px',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  cancel: {
    padding: '10px 20px',
    backgroundColor: '#ccc',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
  },
  save: {
    padding: '10px 20px',
    backgroundColor: '#1d3557',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
  },
};

export default TenantSettings;
