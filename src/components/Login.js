import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    navigate('/');
    alert("Login successfully");
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12">
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md ">
            <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
            />
            <button 
                type="submit"
                className="w-full bg-blue-500 text-white mb-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >Log In</button>
            </form>
        </div>
    </div>
  );
};

export default Login;
