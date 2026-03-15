import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './components/auth/Login';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './components/dashboard/Dashboard';
import Users from './components/entities/Users';
import Clients from './components/entities/Clients';
import Materiels from './components/entities/Materiels';
import DemandeMaintenances from './components/entities/DemandeMaintenances';
import Interventions from './components/entities/Interventions';
import FicheReparations from './components/entities/FicheReparations';
import Pieces from './components/entities/Pieces';
import DemandePieces from './components/entities/DemandePieces';
import Factures from './components/entities/Factures';
import Payments from './components/entities/Payments';
import Messages from './components/entities/Messages';

const AppRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }

  return (
    <DashboardLayout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/materiels" element={<Materiels />} />
        <Route path="/demande-maintenances" element={<DemandeMaintenances />} />
        <Route path="/interventions" element={<Interventions />} />
        <Route path="/fiche-reparations" element={<FicheReparations />} />
        <Route path="/pieces" element={<Pieces />} />
        <Route path="/demande-pieces" element={<DemandePieces />} />
        <Route path="/factures" element={<Factures />} />
        <Route path="/paiements" element={<Payments />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </DashboardLayout>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
