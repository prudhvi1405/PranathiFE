import React from 'react';
import { useNavigate } from 'react-router-dom';  // For navigation
import { ShieldCheck } from 'lucide-react';

function Dashboard() {
  const navigate = useNavigate(); // Initialize the useNavigate hook for routing

  const handleNavigate = (route: string) => {
    navigate(route); // Navigate to the specified route
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-teal-600 py-16 px-6 sm:px-8 lg:px-10">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-10">
        <div className="text-center">
          <ShieldCheck className="mx-auto h-20 w-20 text-green-600" />
          <h1 className="mt-6 text-4xl font-extrabold text-gray-900">Welcome to Your Dashboard</h1>
          <p className="mt-3 text-lg text-gray-700">
            You've successfully logged in! Choose your next action.
          </p>

          {/* Buttons Section */}
          <div className="mt-10 space-y-5">
            <button
              onClick={() => handleNavigate('/interactive')}
              className="w-full py-4 px-6 rounded-xl text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md transition duration-300"
            >
              Webpage
            </button>

            <button
              onClick={() => handleNavigate('/dashdashboard')}
              className="w-full py-4 px-6 rounded-xl text-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 shadow-md transition duration-300"
            >
              Dashboard
            </button>

            <button
              onClick={() => handleNavigate('/chatbot')}
              className="w-full py-4 px-6 rounded-xl text-lg font-semibold text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 shadow-md transition duration-300"
            >
              Chatbot
            </button>

            <button
              onClick={() => handleNavigate('/mlmodel')}
              className="w-full py-4 px-6 rounded-xl text-lg font-semibold text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 shadow-md transition duration-300"
            >
              ML Model
            </button>

            <button
              onClick={() => handleNavigate('/predictions')}
              className="w-full py-4 px-6 rounded-xl text-lg font-semibold text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 shadow-md transition duration-300"
            >
              Predictions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
