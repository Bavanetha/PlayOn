import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for authentication
const AuthContext = createContext();

// Auth provider to wrap your application
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Retrieve user from local storage on initial render
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const signup = (username, password) => {
    // Simulate an API call for signing up
    const newUser = { username, password }; // Ideally, you'd get this from your API response
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser)); // Save user to local storage
  };

  const login = (username, password) => {
    // Simulate an API call for logging in
    const loggedInUser = { username, password }; // Ideally, you'd validate this with your API
    setUser(loggedInUser);
    localStorage.setItem('user', JSON.stringify(loggedInUser)); // Save user to local storage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove user from local storage
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
