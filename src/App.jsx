import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Testing from './pages/Testing';
import Deployment from './pages/Deployment';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav style={{ 
          display: 'flex', 
          gap: '16px', 
          flexWrap: 'wrap',
          marginBottom: '32px',
          background: 'var(--panel-bg)',
          padding: '16px 24px',
          borderRadius: '12px',
          border: '1px solid var(--panel-border)',
          backdropFilter: 'blur(16px)',
          justifyContent: 'center'
        }}>
          <NavLink 
            to="/" 
            style={({ isActive }) => ({
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: '8px',
              color: isActive ? '#fff' : 'var(--text-secondary)',
              background: isActive ? 'var(--accent-blue-glow)' : 'transparent',
              fontWeight: isActive ? 600 : 400,
              transition: 'all 0.2s'
            })}
          >
            Testing
          </NavLink>
          <NavLink 
            to="/deployment" 
            style={({ isActive }) => ({
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: '8px',
              color: isActive ? '#fff' : 'var(--text-secondary)',
              background: isActive ? 'var(--accent-teal-glow)' : 'transparent',
              fontWeight: isActive ? 600 : 400,
              transition: 'all 0.2s'
            })}
          >
            Deployment
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Testing />} />
          <Route path="/deployment" element={<Deployment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
