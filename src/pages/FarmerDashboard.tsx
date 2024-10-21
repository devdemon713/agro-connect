import React from 'react';
import { Tractor, Package, FileText, TrendingUp } from 'lucide-react';

const FarmerDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-green-800">Farmer Dashboard</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Tractor className="text-green-600 mb-2" size={32} />
          <h2 className="text-xl font-semibold mb-2">My Farms</h2>
          <p className="text-3xl font-bold">3</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Package className="text-green-600 mb-2" size={32} />
          <h2 className="text-xl font-semibold mb-2">Active Listings</h2>
          <p className="text-3xl font-bold">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FileText className="text-green-600 mb-2" size={32} />
          <h2 className="text-xl font-semibold mb-2">Open Contracts</h2>
          <p className="text-3xl font-bold">5</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <TrendingUp className="text-green-600 mb-2" size={32} />
          <h2 className="text-xl font-semibold mb-2">Total Revenue</h2>
          <p className="text-3xl font-bold">$24,500</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        <ul className="space-y-4">
          <li className="flex items-center justify-between border-b pb-2">
            <span>New contract offer received</span>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </li>
          <li className="flex items-center justify-between border-b pb-2">
            <span>Listing for Organic Tomatoes updated</span>
            <span className="text-sm text-gray-500">1 day ago</span>
          </li>
          <li className="flex items-center justify-between border-b pb-2">
            <span>Payment received for Contract #1234</span>
            <span className="text-sm text-gray-500">3 days ago</span>
          </li>
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">My Listings</h2>
          <ul className="space-y-2">
            <li className="flex items-center justify-between">
              <span>Organic Tomatoes</span>
              <span className="text-green-600 font-semibold">500 kg available</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Sweet Corn</span>
              <span className="text-green-600 font-semibold">1000 kg available</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Fresh Lettuce</span>
              <span className="text-green-600 font-semibold">200 kg available</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Upcoming Deliveries</h2>
          <ul className="space-y-2">
            <li className="flex items-center justify-between">
              <span>Contract #1235 - Organic Tomatoes</span>
              <span className="text-gray-600">Due in 3 days</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Contract #1236 - Sweet Corn</span>
              <span className="text-gray-600">Due in 1 week</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;