import React, { useEffect, useState } from "react";

const mockCustomers = [
  { id: "1", name: "Apollo", mobile: "9000000001", email: "apollo@hosp.com" },
  { id: "2", name: "KIMS", mobile: "9000000002", email: "kims@hosp.com" },
  { id: "3", name: "Fortis", mobile: "9000000003", email: "fortis@hosp.com" },
];

const BroadcastMessage = () => {
  const [customers, setCustomers] = useState([]);
  const [message, setMessage] = useState("");
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    // You will replace this with actual API call
    const data = mockCustomers.map((c) => ({ ...c, checked: false }));
    setCustomers(data);
  }, []);

  const toggleSelectAll = () => {
    const newValue = !selectAll;
    setSelectAll(newValue);
    setCustomers((prev) =>
      prev.map((c) => ({ ...c, checked: newValue }))
    );
  };

  const toggleCheckbox = (id) => {
    setCustomers((prev) =>
      prev.map((c) => (c.id === id ? { ...c, checked: !c.checked } : c))
    );
    setSelectAll(false);
  };

  const handleSend = () => {
    const selected = customers.filter((c) => c.checked);
    if (!message.trim()) return alert("Please enter a message");
    if (selected.length === 0) return alert("Please select at least one customer");

    alert(`Message sent: "${message}"\nTo: ${selected.map((c) => c.name).join(", ")}`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Broadcast Message</h2>

      <label style={styles.label}>Message</label>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        placeholder="Enter message..."
        style={styles.textarea}
      />

      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeader}>
            <th><input type="checkbox" checked={selectAll} onChange={toggleSelectAll} /></th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td>
                <input
                  type="checkbox"
                  checked={c.checked}
                  onChange={() => toggleCheckbox(c.id)}
                />
              </td>
              <td>{c.name}</td>
              <td>{c.mobile}</td>
              <td>{c.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={styles.actions}>
        <button style={styles.buttonPrimary} onClick={handleSend}>Send</button>
        <button style={styles.buttonSecondary} onClick={() => window.location.href = "/dashboard"}>Cancel</button>
      </div>
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
  title: {
    textAlign: 'center',
    color: '#1d3557',
    marginBottom: '20px',
  },
  label: {
    fontWeight: '600',
    display: 'block',
    marginBottom: '8px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '30px',
  },
  tableHeader: {
    backgroundColor: '#f1f1f1',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonPrimary: {
    backgroundColor: '#1d3557',
    color: '#fff',
    padding: '10px 16px',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  buttonSecondary: {
    backgroundColor: '#ccc',
    padding: '10px 16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default BroadcastMessage;
