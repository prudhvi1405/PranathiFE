import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://pranathiserver.onrender.com/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        navigate('/login');
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.log(err);
      setError('Failed to register. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-3xl shadow-xl">
        <div className="text-center">
          <UserPlus className="mx-auto h-14 w-14 text-purple-600" />
          <h2 className="mt-4 text-4xl font-bold text-gray-800">Create Your Account</h2>
          <p className="mt-2 text-lg text-gray-600">Join us and start exploring!</p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}
          
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-lg font-semibold text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-6 text-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 rounded-xl"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-purple-600 hover:text-purple-700 focus:outline-none"
            >
              Log In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;