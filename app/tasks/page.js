'use client';
import { FaPlus, FaEdit, FaTrash, FaCheckCircle } from 'react-icons/fa';

export default function TasksPage() {
  return (
    <section className="w-full px-8 md:px-16 py-24 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">My Tasks</h1>
          <button className="flex items-center bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded-lg transition">
            <FaPlus className="mr-2" /> Add New Task
          </button>
        </div>

        {/* Tasks List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Single Task Card */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Design Landing Page</h3>
                <p className="text-gray-600 mb-4">Create a responsive landing page for the new product launch.</p>
              </div>
              <FaCheckCircle className="text-green-400 text-2xl" />
            </div>
            <div className="flex space-x-4 mt-4">
              <button className="flex items-center text-blue-500 hover:text-blue-700">
                <FaEdit className="mr-1" /> Edit
              </button>
              <button className="flex items-center text-red-500 hover:text-red-700">
                <FaTrash className="mr-1" /> Delete
              </button>
            </div>
          </div>

          {/* Another Example Task */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Write Blog Post</h3>
                <p className="text-gray-600 mb-4">Draft and publish a blog post about productivity hacks.</p>
              </div>
              <FaCheckCircle className="text-gray-300 text-2xl" />
            </div>
            <div className="flex space-x-4 mt-4">
              <button className="flex items-center text-blue-500 hover:text-blue-700">
                <FaEdit className="mr-1" /> Edit
              </button>
              <button className="flex items-center text-red-500 hover:text-red-700">
                <FaTrash className="mr-1" /> Delete
              </button>
            </div>
          </div>

          {/* Another Example Task */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Fix Login Bug</h3>
                <p className="text-gray-600 mb-4">Resolve the issue where users can't reset their password.</p>
              </div>
              <FaCheckCircle className="text-gray-300 text-2xl" />
            </div>
            <div className="flex space-x-4 mt-4">
              <button className="flex items-center text-blue-500 hover:text-blue-700">
                <FaEdit className="mr-1" /> Edit
              </button>
              <button className="flex items-center text-red-500 hover:text-red-700">
                <FaTrash className="mr-1" /> Delete
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
