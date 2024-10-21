import React, { useState, useEffect } from 'react';
import { Search, Filter, ShoppingCart } from 'lucide-react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const BuyerMarketplace: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [availableCrops, setAvailableCrops] = useState<any[]>([]);

  useEffect(() => {
    const fetchCrops = async () => {
      const db = getFirestore();
      const cropsCollection = collection(db, 'crops');
      const cropSnapshot = await getDocs(cropsCollection);
      const cropList = cropSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAvailableCrops(cropList);
    };

    fetchCrops();
  }, []);

  const filteredCrops = availableCrops.filter(crop =>
    crop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crop.farmerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary-800">Buyer Marketplace</h1>
      
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search crops or farmers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <button className="flex items-center bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition">
          <Filter className="mr-2" size={20} />
          Filter
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCrops.map((crop) => (
          <div key={crop.id} className="bg-white p-6 rounded-lg shadow-md">
            {crop.image && (
              <img src={crop.image} alt={crop.name} className="w-full h-48 object-cover rounded-md mb-4" />
            )}
            <h3 className="text-xl font-semibold mb-2">{crop.name}</h3>
            <p className="text-gray-600 mb-2">Farmer: {crop.farmerName}</p>
            <p className="text-primary-600 font-bold mb-2">${crop.price}/kg</p>
            <p className="text-gray-600 mb-4">{crop.quantity} kg available</p>
            <button className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition flex items-center justify-center">
              <ShoppingCart className="mr-2" size={20} />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyerMarketplace;