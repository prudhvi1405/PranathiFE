import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://pranathiserver.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        navigate('/dashboard');
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.log(err);
      setError('Failed to login. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-500 to-blue-600">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-3xl shadow-2xl border-t-4 border-teal-600">
        <div className="text-center">
          <LogIn className="mx-auto h-14 w-14 text-teal-600" />
          <h2 className="mt-4 text-4xl font-extrabold text-gray-800">Welcome Back!</h2>
          <p className="mt-2 text-lg text-gray-600">Sign in to access your dashboard</p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}
          
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
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
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-6 text-xl text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50 rounded-xl"
            >
              Sign In
            </button>
          </div>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => navigate('/signup')}
              className="w-full py-3 px-6 text-lg font-semibold text-teal-600 bg-white border border-teal-600 hover:bg-teal-100 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50"
            >
              Create an Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;