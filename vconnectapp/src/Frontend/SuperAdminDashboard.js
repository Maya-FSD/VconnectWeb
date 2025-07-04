import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    padding: '20px',
    fontFamily: "'Segoe UI', sans-serif",
  },
  welcomeBox: {
    marginBottom: '30px',
  },
  welcomeTitle: {
    fontSize: '24px',
    color: '#1d3557',
    fontWeight: '600',
    marginBottom: '5px',
  },
  welcomeSub: {
    fontSize: '16px',
    color: '#6c757d',
  },
  section: {
    marginBottom: '30px',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#1d3557',
    marginBottom: '10px',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
  },
  linkItem: {
    backgroundColor: '#f1f1f1',
    padding: '12px 16px',
    marginBottom: '8px',
    borderRadius: '8px',
    color: '#1d3557',
    textDecoration: 'none',
    display: 'block',
    fontWeight: '500',
    transition: 'background 0.3s',
  },
  linkItemHover: {
    backgroundColor: '#d9ecf2',
  },
};

const SuperAdminDashboard = () => {
  return (
    <div style={styles.container}>
      <div style={styles.welcomeBox}>
        <h2 style={styles.welcomeTitle}>Welcome back, Super Admin</h2>
        <p style={styles.welcomeSub}>What would you like to do today?</p>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Tenant Management</h3>
        <ul style={styles.linkList}>
          <li><Link to="/tenant/add" style={styles.linkItem}>Add Tenant</Link></li>
          <li><Link to="/tenant/manage" style={styles.linkItem}>Manage Tenants</Link></li>
          <li><Link to="/tenant/settings" style={styles.linkItem}>Tenant Settings</Link></li>
          <li><Link to="/tenant/admins" style={styles.linkItem}>Tenant Admins</Link></li>
          <li><Link to="/tenant/sync-tsl" style={styles.linkItem}>TSL-Original</Link></li>
          <li><Link to="/tenant/speech" style={styles.linkItem}>Speech to Text</Link></li>
          <li><Link to="/tenant/approve" style={styles.linkItem}>Approve Tenant Admin</Link></li>
        </ul>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>TSL Management</h3>
        <ul style={styles.linkList}>
          <li><Link to="/tsl/tenant-mapping" style={styles.linkItem}>TSL Tenant Mapping</Link></li>
          <li><Link to="/tsl/branch-mapping" style={styles.linkItem}>Tenant-Branch Mapping</Link></li>
          <li><Link to="/tsl/vc-mapping" style={styles.linkItem}>VC TSL Branch Mapping</Link></li>
          <li><Link to="/tsl/code-mapping" style={styles.linkItem}>TSL Code Mapping</Link></li>
          <li><Link to="/tsl/data" style={styles.linkItem}>TSL Data</Link></li>
          <li><Link to="/tsl/tenant-wise" style={styles.linkItem}>Tenant Wise View</Link></li>
          <li><Link to="/tsl/branch-view" style={styles.linkItem}>Branch Code View</Link></li>
        </ul>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Emergency Code Management</h3>
        <ul style={styles.linkList}>
          <li><Link to="/codes/master" style={styles.linkItem}>Code Master</Link></li>
          <li><Link to="/codes/mapping" style={styles.linkItem}>Code Mapping</Link></li>
        </ul>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Communication</h3>
        <ul style={styles.linkList}>
          <li><Link to="/communication/reminders" style={styles.linkItem}>Payment Reminders</Link></li>
          <li><Link to="/communication/broadcast" style={styles.linkItem}>Broadcast Message</Link></li>
        </ul>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Master Reports</h3>
        <ul style={styles.linkList}>
          <li><Link to="/reports/tenant" style={styles.linkItem}>Tenant Reports</Link></li>
          <li><Link to="/reports/branch" style={styles.linkItem}>Branch Reports</Link></li>
          <li><Link to="/reports/users" style={styles.linkItem}>User Reports</Link></li>
        </ul>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Reports & Analytics</h3>
        <ul style={styles.linkList}>
          <li><Link to="/reports/charts" style={styles.linkItem}>Graphical Report</Link></li>
          <li><Link to="/reports/summary" style={styles.linkItem}>Code Summary Report</Link></li>
          <li><Link to="/reports/activate-deactivate" style={styles.linkItem}>Activate vs Deactivate</Link></li>
          <li><Link to="/reports/consolidated" style={styles.linkItem}>Consolidated Reports</Link></li>
          <li><Link to="/reports/frequency" style={styles.linkItem}>Frequency Reports</Link></li>
          <li><Link to="/reports/total" style={styles.linkItem}>Total Reports</Link></li>
          <li><Link to="/reports/code-contact" style={styles.linkItem}>Code-wise Contact Report</Link></li>
          <li><Link to="/reports/activation-summary" style={styles.linkItem}>Code Activation Summary</Link></li>
          <li><Link to="/reports/user-activity" style={styles.linkItem}>User Activity Report</Link></li>
          <li><Link to="/reports/branch-activity" style={styles.linkItem}>Branch Activity Report</Link></li>
          <li><Link to="/reports/resolution-time" style={styles.linkItem}>Code Resolution Time</Link></li>
          <li><Link to="/reports/trigger" style={styles.linkItem}>Trigger Report</Link></li>
          <li><Link to="/reports/custom-filter" style={styles.linkItem}>Custom Filter Report</Link></li>
          <li><Link to="/reports/device-wise" style={styles.linkItem}>Device Wise Report</Link></li>
          <li><Link to="/reports/audio-audit" style={styles.linkItem}>Audio File Audit Report</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
