import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const { signup } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(username, password);
    navigate('/'); // Redirect to home after signup
    alert("Welcome to new journey!");
  };

  const handleLogin= () => {
    navigate('/login'); // Navigate to signup page (change to '/login' if desired)
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12">
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md ">
            <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
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
                >Sign Up</button>
            </form>
            <div style={{display:"flex"}}>
                <h2>Already have account ?</h2>
                <button onClick={handleLogin}className="bg-white ml-4 hover:text-blue-500">Login</button>
            </div>
        </div>
    </div>
    
  );
};

export default Signup;
