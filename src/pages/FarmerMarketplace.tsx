import React, { useState, useEffect } from 'react';
import { PlusCircle, Image as ImageIcon, User } from 'lucide-react';
import { auth } from '../firebase';
import { getFirestore, doc, getDoc, setDoc, collection, addDoc } from 'firebase/firestore';

const FarmerMarketplace: React.FC = () => {
  const [crops, setCrops] = useState<any[]>([]);
  const [newCrop, setNewCrop] = useState({
    name: '',
    quantity: '',
    price: '',
    description: '',
    image: null as File | null,
  });
  const [farmerInfo, setFarmerInfo] = useState({
    name: '',
    location: '',
    photo: '',
  });

  useEffect(() => {
    const fetchFarmerInfo = async () => {
      const user = auth.currentUser;
      if (user) {
        const db = getFirestore();
        const userDoc = await getDoc(doc(db, "users", user.uid));
        const userData = userDoc.data();
        if (userData) {
          setFarmerInfo({
            name: userData.name || '',
            location: userData.location || '',
            photo: userData.photo || '',
          });
        }
      }
    };

    fetchFarmerInfo();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewCrop({ ...newCrop, [name]: value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewCrop({ ...newCrop, image: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
      const db = getFirestore();
      const cropData = {
        ...newCrop,
        farmerId: user.uid,
        farmerName: farmerInfo.name,
        createdAt: new Date(),
      };
      await addDoc(collection(db, "crops"), cropData);
      setCrops([...crops, { ...cropData, id: Date.now() }]);
      setNewCrop({ name: '', quantity: '', price: '', description: '', image: null });
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary-800">Farmer Marketplace</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Farmer Dashboard</h2>
        <div className="flex items-center space-x-4">
          {farmerInfo.photo ? (
            <img src={farmerInfo.photo} alt={farmerInfo.name} className="w-24 h-24 rounded-full object-cover" />
          ) : (
            <User size={96} className="text-gray-400" />
          )}
          <div>
            <h3 className="text-xl font-semibold">{farmerInfo.name}</h3>
            <p className="text-gray-600">{farmerInfo.location}</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Add New Crop</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block mb-1">Crop Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newCrop.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="quantity" className="block mb-1">Quantity (kg)</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={newCrop.quantity}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="price" className="block mb-1">Price per kg ($)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={newCrop.price}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="image" className="block mb-1">Crop Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageUpload}
              accept="image/*"
              className="w-full px-3 py-2 border rounded"
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="description" className="block mb-1">Description</label>
          <textarea
            id="description"
            name="description"
            value={newCrop.description}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded"
            rows={3}
          ></textarea>
        </div>
        <button type="submit" className="mt-4 bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition flex items-center">
          <PlusCircle size={20} className="mr-2" />
          Add Crop
        </button>
      </form>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {crops.map((crop) => (
          <div key={crop.id} className="bg-white p-6 rounded-lg shadow-md">
            {crop.image && (
              <img
                src={URL.createObjectURL(crop.image)}
                alt={crop.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}
            <h3 className="text-xl font-semibold mb-2">{crop.name}</h3>
            <p className="text-gray-600 mb-2">Quantity: {crop.quantity} kg</p>
            <p className="text-primary-600 font-bold mb-2">${crop.price}/kg</p>
            <p className="text-gray-600">{crop.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmerMarketplace;