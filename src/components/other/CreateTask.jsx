import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [disc, setdisc] = useState('');
  const [date, setdate] = useState('');
  const [title, settitle] = useState('');
  const [catag, setcatag] = useState('');
  const [asign, setasign] = useState('');
  const [darkMode, setDarkMode] = useState(true);

  const { userData, setuserData } = useContext(AuthContext);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const onsubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title,
      description: disc,
      category: catag,
      date,
      status: "newTask"
    };

    const updatedEmployees = userData.employees.map((emp) => {
      if (asign === emp.name) {
        const updatedEmp = {
          ...emp,
          tasks: [...emp.tasks, newTask],
          taskCount: {
            ...emp.taskCount,
            newTask: emp.taskCount.newTask + 1
          }
        };
        return updatedEmp;
      }
      return emp;
    });

    setuserData({ ...userData, employees: updatedEmployees });
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    setdisc('');
    setdate('');
    settitle('');
    setcatag('');
    setasign('');
  };

  return (
    <div className={`w-full transition-colors duration-300 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
      
      <div className="w-full max-w-4xl mx-auto p-4 md:p-6"> 
        <div className={`rounded-2xl shadow-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="p-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          
          <form onSubmit={onsubmit} className="px-4 py-6 md:px-8 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <h2 className={`col-span-2 text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Create New Task
            </h2>

            <div className="flex flex-col col-span-2"> 
              <label htmlFor="description" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Description
              </label>
              <textarea
                id="description"
                value={disc}
                onChange={(e) => setdisc(e.target.value)}
                placeholder="Write a detailed description for the task"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] md:min-h-[120px] ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="title" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Task Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => settitle(e.target.value)}
                placeholder="e.g., Design Landing Page"
                required
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="date" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Due Date
              </label>
              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setdate(e.target.value)}
                required
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="assignTo" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Assign To
              </label>
              <select
                id="assignTo"
                value={asign}
                onChange={(e) => setasign(e.target.value)}
                required
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
              >
                <option value="">Select Employee</option>
                {userData.employees.map(emp => (
                  <option key={emp.id} value={emp.name}>{emp.name}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="category" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Category
              </label>
              <input
                id="category"
                type="text"
                value={catag}
                onChange={(e) => setcatag(e.target.value)}
                required
                placeholder="e.g., UI, Design, Development"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
              />
            </div>

            <div className="col-span-2 flex justify-center mt-4 md:mt-6">
              <button
                type="submit"
                className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 md:px-8 rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md hover:shadow-lg"
              >
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;