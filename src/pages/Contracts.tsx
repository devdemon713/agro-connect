import React from 'react';
import { FileText, CheckCircle, XCircle, Clock } from 'lucide-react';

const Contracts: React.FC = () => {
  const contracts = [
    { id: 1, title: 'Organic Tomatoes Supply', farmer: 'Green Acres Farm', buyer: 'Fresh Mart', status: 'active', quantity: '500 kg', price: '$2,500', delivery: '2023-06-15' },
    { id: 2, title: 'Sweet Corn Bulk Order', farmer: 'Sunshine Fields', buyer: 'Grocery Chain Co.', status: 'pending', quantity: '1000 kg', price: '$3,000', delivery: '2023-07-01' },
    { id: 3, title: 'Fresh Lettuce Weekly Supply', farmer: 'Leafy Greens Farm', buyer: 'Salad Bowl Restaurant', status: 'completed', quantity: '100 kg', price: '$500', delivery: '2023-05-30' },
    { id: 4, title: 'Organic Apples Harvest', farmer: 'Orchard Valley', buyer: 'Juice Press Co.', status: 'active', quantity: '800 kg', price: '$4,000', delivery: '2023-08-15' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'pending':
        return <Clock className="text-yellow-500" size={20} />;
      case 'completed':
        return <CheckCircle className="text-blue-500" size={20} />;
      default:
        return <XCircle className="text-red-500" size={20} />;
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-green-800">Contracts</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <FileText className="mr-2 text-green-600" size={24} />
          Active Contracts
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-green-100">
                <th className="p-3">Contract</th>
                <th className="p-3">Farmer</th>
                <th className="p-3">Buyer</th>
                <th className="p-3">Status</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Price</th>
                <th className="p-3">Delivery Date</th>
              </tr>
            </thead>
            <tbody>
              {contracts.map((contract) => (
                <tr key={contract.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">{contract.title}</td>
                  <td className="p-3">{contract.farmer}</td>
                  <td className="p-3">{contract.buyer}</td>
                  <td className="p-3">
                    <span className="flex items-center">
                      {getStatusIcon(contract.status)}
                      <span className="ml-2 capitalize">{contract.status}</span>
                    </span>
                  </td>
                  <td className="p-3">{contract.quantity}</td>
                  <td className="p-3">{contract.price}</td>
                  <td className="p-3">{contract.delivery}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Contract Summary</h2>
          <ul className="space-y-2">
            <li className="flex items-center justify-between">
              <span>Total Active Contracts</span>
              <span className="font-semibold text-green-600">2</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Pending Contracts</span>
              <span className="font-semibold text-yellow-600">1</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Completed Contracts</span>
              <span className="font-semibold text-blue-600">1</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Total Contract Value</span>
              <span className="font-semibold text-green-600">$10,000</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Recent Contract Activity</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between border-b pb-2">
              <span>New contract offer received from Grocery Chain Co.</span>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </li>
            <li className="flex items-center justify-between border-b pb-2">
              <span>Contract #1234 with Fresh Mart completed</span>
              <span className="text-sm text-gray-500">1 day ago</span>
            </li>
            <li className="flex items-center justify-between border-b pb-2">
              <span>Price negotiation started for contract with Juice Press Co.</span>
              <span className="text-sm text-gray-500">3 days ago</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contracts;