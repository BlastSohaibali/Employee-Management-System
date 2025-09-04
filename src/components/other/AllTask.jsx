import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const { userData } = useContext(AuthContext);
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

  return (
    <div className={`p-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
      <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
        Employee Task Summary
      </h2>
      
      <div className={`rounded-2xl shadow-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className={`p-1 bg-gradient-to-r from-blue-500 to-purple-500`}></div>
        

        <div className={`px-6 py-4 font-semibold text-sm grid grid-cols-5 gap-4 ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
          <div className="text-center">Employee Name</div>
          <div className="text-center">New</div>
          <div className="text-center">Active</div>
          <div className="text-center">Completed</div>
          <div className="text-center">Failed</div>
        </div>


        <div className='overflow-auto' style={{ maxHeight: '500px' }}>
          {userData?.employees?.length > 0 ? (
            userData.employees.map((e, index) => (
              <div key={e.id} className={`px-6 py-4 grid grid-cols-5 gap-4 items-center text-sm ${index % 2 === 0 ? (darkMode ? 'bg-gray-800' : 'bg-white') : (darkMode ? 'bg-gray-800/80' : 'bg-gray-50')}`}>
                <div className={`font-medium text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{e.name}</div>
                <div className={`text-center font-bold ${e.taskCount.newTask > 0 ? 'text-blue-500' : 'text-gray-400'}`}>{e.taskCount.newTask}</div>
                <div className={`text-center font-bold ${e.taskCount.active > 0 ? 'text-yellow-500' : 'text-gray-400'}`}>{e.taskCount.active}</div>
                <div className={`text-center font-bold ${e.taskCount.complete > 0 ? 'text-green-500' : 'text-gray-400'}`}>{e.taskCount.complete}</div>
                <div className={`text-center font-bold ${e.taskCount.failed > 0 ? 'text-red-500' : 'text-gray-400'}`}>{e.taskCount.failed}</div>
              </div>
            ))
          ) : (
            <div className={`text-center p-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              No employees found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllTask;