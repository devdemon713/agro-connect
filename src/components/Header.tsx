import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Header: React.FC = () => {
  const { currentUser, userRole } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <header className="bg-primary-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Sprout size={32} />
          <span className="text-2xl font-bold">Agro Connect</span>
        </Link>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li><Link to="/marketplace" className="hover:text-primary-200">Marketplace</Link></li>
            <li><Link to="/contracts" className="hover:text-primary-200">Contracts</Link></li>
            {currentUser ? (
              <>
                {userRole === 'farmer' && (
                  <li><Link to="/farmer-dashboard" className="hover:text-primary-200">Farmer Dashboard</Link></li>
                )}
                {userRole === 'buyer' && (
                  <li><Link to="/buyer-dashboard" className="hover:text-primary-200">Buyer Dashboard</Link></li>
                )}
                <li>
                  <button onClick={handleLogout} className="flex items-center hover:text-primary-200">
                    <LogOut size={20} className="mr-1" />
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li><Link to="/login" className="hover:text-primary-200">Login</Link></li>
                <li><Link to="/signup" className="hover:text-primary-200">Sign Up</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;