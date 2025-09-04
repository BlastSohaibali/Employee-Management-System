import React, { useState, useEffect } from "react";
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const Admin = () => {
  const [darkMode, setDarkMode] = useState(true);

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

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
      <div className="flex justify-between items-center p-6">
        <Header />
      </div>

      <div className="flex-grow p-6">
        <CreateTask />
        <AllTask />
      </div>


      <footer className={`p-6 mt-auto ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-600'}`}>
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Admin;