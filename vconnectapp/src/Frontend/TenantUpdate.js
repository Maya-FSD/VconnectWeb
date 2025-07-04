import React, { useState } from 'react';

const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '30px',
    fontFamily: 'Segoe UI, sans-serif',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '30px',
    textAlign: 'center',
    color: '#1d3557',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
  },
  cardHeader: {
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#e9ecef',
    cursor: 'pointer',
  },
  cardHeaderText: {
    marginLeft: '10px',
    fontWeight: '600',
    fontSize: '16px',
    flex: 1,
    color: '#1d3557',
  },
  cardContent: {
    padding: '16px',
    borderTop: '1px solid #ccc',
    backgroundColor: '#fff',
  },
  branchRow: {
    display: 'flex',
    borderBottom: '1px solid #eee',
    padding: '12px 0',
    alignItems: 'center',
  },
  branchColumn: {
    flex: 2,
    color: '#333',
    fontWeight: '500',
  },
  usersColumn: {
    flex: 1,
    textAlign: 'center',
    color: '#555',
  },
  editIcon: {
    marginLeft: 'auto',
    color: '#d62828',
    fontSize: '18px',
    cursor: 'pointer',
  },
};

const mockTenants = [
  {
    id: 1,
    customer_name: 'Apollo Hospital',
    branches: [
      { id: 1, location: 'Chennai', licensedUsers: 40, usedUsers: 20 },
      { id: 2, location: 'Madurai', licensedUsers: 20, usedUsers: 15 },
    ],
  },
  {
    id: 2,
    customer_name: 'KIMS Health',
    branches: [
      { id: 3, location: 'Trivandrum', licensedUsers: 50, usedUsers: 35 },
    ],
  },
];

const TenantUpdate = () => {
  const [expandedTenant, setExpandedTenant] = useState(null);

  const toggleTenant = (tenantId) => {
    setExpandedTenant((prev) => (prev === tenantId ? null : tenantId));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Tenant Management</h2>

      {mockTenants.map((tenant) => (
        <div key={tenant.id} style={styles.card}>
          <div style={styles.cardHeader} onClick={() => toggleTenant(tenant.id)}>
            <span style={{ fontSize: '18px' }}>
              {expandedTenant === tenant.id ? '▼' : '▶'}
            </span>
            <span style={styles.cardHeaderText}>{tenant.customer_name}</span>
            <span style={styles.editIcon}>✎</span>
          </div>

          {expandedTenant === tenant.id && (
            <div style={styles.cardContent}>
              {tenant.branches.length > 0 ? (
                tenant.branches.map((branch) => (
                  <div key={branch.id} style={styles.branchRow}>
                    <div style={styles.branchColumn}>🏢 {branch.location}</div>
                    <div style={styles.usersColumn}>{branch.licensedUsers}</div>
                    <div style={styles.usersColumn}>{branch.usedUsers}</div>
                  </div>
                ))
              ) : (
                <p style={{ fontStyle: 'italic', color: '#999' }}>No branches available</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TenantUpdate;
