import React from 'react';
import { Link } from 'react-router-dom';
import { Tractor, ShoppingCart, Handshake } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="text-center relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Farm field" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-900 bg-opacity-60"></div>
        </div>
        <div className="relative z-10 py-20">
          <h1 className="text-5xl font-bold text-white mb-4">Welcome to Agro Connect</h1>
          <p className="text-2xl text-primary-100">Connecting farmers and buyers for a sustainable future</p>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img 
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
            alt="Farmer" 
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <Tractor size={48} className="mx-auto text-primary-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">For Farmers</h2>
          <p className="text-gray-600 mb-4">Showcase your produce and connect with buyers directly</p>
          <Link to="/farmer-dashboard" className="inline-block bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition">Get Started</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
            alt="Buyer" 
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <ShoppingCart size={48} className="mx-auto text-primary-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">For Buyers</h2>
          <p className="text-gray-600 mb-4">Find fresh, local produce and support farmers in your area</p>
          <Link to="/buyer-dashboard" className="inline-block bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition">Start Buying</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img 
            src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
            alt="Marketplace" 
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <Handshake size={48} className="mx-auto text-primary-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Marketplace</h2>
          <p className="text-gray-600 mb-4">Browse available produce and create contracts</p>
          <Link to="/marketplace" className="inline-block bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition">Explore Market</Link>
        </div>
      </section>

      <section className="bg-primary-100 p-8 rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Farm background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-primary-800 mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Farmers list their available produce and production capacity</li>
            <li>Buyers browse listings and submit purchase requests</li>
            <li>Negotiate prices and terms through our platform</li>
            <li>Create and manage contracts securely</li>
            <li>Complete transactions and arrange delivery</li>
          </ol>
        </div>
      </section>

      <section className="text-center relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Farm sunset" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-900 bg-opacity-70"></div>
        </div>
        <div className="relative z-10 py-20">
          <h2 className="text-4xl font-bold text-white mb-4">Join Agro Connect Today</h2>
          <p className="text-xl text-primary-100 mb-6">Start connecting, trading, and growing together</p>
          <Link to="/signup" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 transition">Sign Up Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;