import React, { useState } from 'react';

const sectionStyle = {
  border: '1px solid #ccc',
  borderRadius: '10px',
  marginBottom: '20px',
  padding: '16px',
  backgroundColor: '#f9f9f9',
};

const labelStyle = {
  display: 'block',
  marginBottom: '6px',
  fontWeight: 'bold',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '12px',
  borderRadius: '6px',
  border: '1px solid #ccc',
};

const sectionHeaderStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '10px',
  cursor: 'pointer',
  color: '#1d3557',
};

const buttonRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '30px',
};

const buttonStyle = {
  padding: '12px 20px',
  fontSize: '16px',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',
};

const cancelButton = {
  ...buttonStyle,
  backgroundColor: '#ccc',
};

const submitButton = {
  ...buttonStyle,
  backgroundColor: '#00b4d8',
  color: '#fff',
};

const TenantMaster = () => {
  const [formData, setFormData] = useState({
    customer_name: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    pincode: '',
    licensed_branches: '',
    licensed_users: '',
    primary_phone: '',
    primary_email: '',
    secondary_phone: '',
    secondary_email: '',
  });

  const [expanded, setExpanded] = useState({
    tenantInfo: true,
    primaryContact: true,
    secondaryContact: false,
    additionalInfo: true,
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleSection = (key) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '30px' }}>
      <h2 style={{ textAlign: 'center', color: '#1d3557' }}>Add New Tenant</h2>

      {/* Tenant Info */}
      <div style={sectionStyle}>
        <div style={sectionHeaderStyle} onClick={() => toggleSection('tenantInfo')}>
          Tenant Info {expanded.tenantInfo ? '▲' : '▼'}
        </div>
        {expanded.tenantInfo && (
          <>
            <label style={labelStyle}>Customer Name</label>
            <input style={inputStyle} value={formData.customer_name} onChange={(e) => handleChange('customer_name', e.target.value)} />

            <label style={labelStyle}>Address 1</label>
            <input style={inputStyle} value={formData.address1} onChange={(e) => handleChange('address1', e.target.value)} />

            <label style={labelStyle}>Address 2</label>
            <input style={inputStyle} value={formData.address2} onChange={(e) => handleChange('address2', e.target.value)} />

            <label style={labelStyle}>City</label>
            <input style={inputStyle} value={formData.city} onChange={(e) => handleChange('city', e.target.value)} />

            <label style={labelStyle}>State</label>
            <input style={inputStyle} value={formData.state} onChange={(e) => handleChange('state', e.target.value)} />

            <label style={labelStyle}>Pincode</label>
            <input style={inputStyle} value={formData.pincode} onChange={(e) => handleChange('pincode', e.target.value)} />
          </>
        )}
      </div>

      {/* Primary Contact */}
      <div style={sectionStyle}>
        <div style={sectionHeaderStyle} onClick={() => toggleSection('primaryContact')}>
          Primary Contact {expanded.primaryContact ? '▲' : '▼'}
        </div>
        {expanded.primaryContact && (
          <>
            <label style={labelStyle}>Phone</label>
            <input style={inputStyle} value={formData.primary_phone} onChange={(e) => handleChange('primary_phone', e.target.value)} />

            <label style={labelStyle}>Email</label>
            <input style={inputStyle} value={formData.primary_email} onChange={(e) => handleChange('primary_email', e.target.value)} />
          </>
        )}
      </div>

      {/* Secondary Contact */}
      <div style={sectionStyle}>
        <div style={sectionHeaderStyle} onClick={() => toggleSection('secondaryContact')}>
          Secondary Contact {expanded.secondaryContact ? '▲' : '▼'}
        </div>
        {expanded.secondaryContact && (
          <>
            <label style={labelStyle}>Phone</label>
            <input style={inputStyle} value={formData.secondary_phone} onChange={(e) => handleChange('secondary_phone', e.target.value)} />

            <label style={labelStyle}>Email</label>
            <input style={inputStyle} value={formData.secondary_email} onChange={(e) => handleChange('secondary_email', e.target.value)} />
          </>
        )}
      </div>

      {/* Additional Info */}
      <div style={sectionStyle}>
        <div style={sectionHeaderStyle} onClick={() => toggleSection('additionalInfo')}>
          Additional Info {expanded.additionalInfo ? '▲' : '▼'}
        </div>
        {expanded.additionalInfo && (
          <>
            <label style={labelStyle}>Licensed Branches</label>
            <input style={inputStyle} value={formData.licensed_branches} onChange={(e) => handleChange('licensed_branches', e.target.value)} />

            <label style={labelStyle}>Licensed Users</label>
            <input style={inputStyle} value={formData.licensed_users} onChange={(e) => handleChange('licensed_users', e.target.value)} />
          </>
        )}
      </div>

      <div style={buttonRowStyle}>
        <button style={cancelButton}>Cancel</button>
        <button style={submitButton}>Create Tenant</button>
      </div>
    </div>
  );
};

export default TenantMaster;
