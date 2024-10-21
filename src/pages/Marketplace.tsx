import React from 'react';
import { Link } from 'react-router-dom';
import { Tractor, ShoppingCart } from 'lucide-react';

const Marketplace: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary-800">Marketplace</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Link to="/farmer-marketplace" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <div className="flex items-center justify-center mb-4">
            <Tractor className="text-primary-600" size={48} />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-2">Farmer Marketplace</h2>
          <p className="text-gray-600 text-center">List your crops and manage your offerings</p>
        </Link>
        <Link to="/buyer-marketplace" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <div className="flex items-center justify-center mb-4">
            <ShoppingCart className="text-primary-600" size={48} />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-2">Buyer Marketplace</h2>
          <p className="text-gray-600 text-center">Browse available crops and make purchases</p>
        </Link>
      </div>
    </div>
  );
};

export default Marketplace;