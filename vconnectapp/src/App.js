import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import RegistrationWeb from './Frontend/Registration';
import Sidebar from './Components/Sidebar';
import SuperAdminDashboard from './Frontend/SuperAdminDashboard'; 
import TenantMaster from './Frontend/TenantMaster'; 
import TenantUpdate from './Frontend/TenantUpdate';
import TenantSettings from './Frontend/TenantSettings';
import CodeMaster from './Frontend/CodeMaster'; 
import BroadcastMessage from './Frontend/BroadcastMessage';
import Myprofile from './Frontend/Myprofile'; 
import Selectcode from './Frontend/Selectcode';
const App = () => {
  return (
    <Router>
      <Header />
      <div style={{ display: 'flex', minHeight: '80vh' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<h2>Welcome to Home Page</h2>} />
            <Route path="/register" element={<RegistrationWeb />} />
            <Route path="/dashboardSuperAdmin" element={<SuperAdminDashboard />} />
            <Route path="/tenantmaster" element={<TenantMaster />} />
            <Route path="/tenantUpdate" element={<TenantUpdate />} /> 
            <Route path="/tenantsettings" element={<TenantSettings />} />
            <Route path="/codemaster" element={<CodeMaster />} />
            <Route path="/broadcastmsg" element={<BroadcastMessage/>}/>
            <Route path="/myprofile" element={<Myprofile />} />
            <Route path="/selectcode" element={<Selectcode />}/>
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
