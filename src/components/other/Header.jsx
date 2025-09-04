import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Header = ({ data }) => {
  const [darkMode, setDarkMode] = useState(true);
  const { setuserData } = useContext(AuthContext);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  const adminData = JSON.parse(localStorage.getItem('admin')) || [];
  const adminName = adminData.length > 0 ? adminData[0].name : 'Admin';
  
  const displayName = data ? data.name : adminName;
  
  const handleLogout = () => {
    setuserData(null);
    localStorage.removeItem('user');
    window.location.reload();
  };
  
  return (
    <div className={`w-full flex items-center justify-between p-6 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md rounded-xl`}>
      <h1 className={`text-2xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
        Hello <br /><span className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500`}>{displayName}!</span>
      </h1>
      
      <div className="flex items-center space-x-4">
        <button 
          className='bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md active:scale-95'
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Header;