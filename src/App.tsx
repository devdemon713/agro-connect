import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import FarmerDashboard from './pages/FarmerDashboard';
import BuyerDashboard from './pages/BuyerDashboard';
import Contracts from './pages/Contracts';
import Marketplace from './pages/Marketplace';
import FarmerMarketplace from './pages/FarmerMarketplace';
import BuyerMarketplace from './pages/BuyerMarketplace';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-100">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
              <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
              <Route path="/contracts" element={<Contracts />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/farmer-marketplace" element={<FarmerMarketplace />} />
              <Route path="/buyer-marketplace" element={<BuyerMarketplace />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;