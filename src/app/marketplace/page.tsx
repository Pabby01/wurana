'use client';

import { useState } from 'react';

interface Service {
  id: string;
  title: string;
  category: string;
  price: number;
  description: string;
  artisan: {
    name: string;
    rating: number;
    completedJobs: number;
  };
}

// Mock data - will be replaced with actual blockchain data
const mockServices: Service[] = [
  {
    id: '1',
    title: 'Professional Plumbing Services',
    category: 'Plumbing',
    price: 50,
    description: 'Expert plumbing services for residential and commercial properties.',
    artisan: {
      name: 'John Doe',
      rating: 4.8,
      completedJobs: 124,
    },
  },
  {
    id: '2',
    title: 'Modern Hairstyling',
    category: 'Beauty',
    price: 35,
    description: 'Professional hair styling services for all hair types.',
    artisan: {
      name: 'Sarah Smith',
      rating: 4.9,
      completedJobs: 89,
    },
  },
  // Add more mock services here
];

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Plumbing', 'Beauty', 'Carpentry', 'Electrical'];

  const filteredServices = mockServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-8">Service Marketplace</h1>
      
      {/* Search and Filter Section */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search services..."
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map(service => (
          <div key={service.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{service.description}</p>
                <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded-full">
                  {service.category}
                </span>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-purple-600">${service.price}</p>
                <p className="text-sm text-gray-500">per hour</p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{service.artisan.name}</p>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <span className="flex items-center">
                      ⭐ {service.artisan.rating}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{service.artisan.completedJobs} jobs</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}