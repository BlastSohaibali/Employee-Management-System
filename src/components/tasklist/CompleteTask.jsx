import React from 'react';

const CompleteTask = ({ task }) => {
  return (
    <div className="w-full p-5 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center gap-2 mb-4 text-green-400">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h3 className="font-semibold">Completed Task</h3>
      </div>

      <div className="flex items-start justify-between mb-4">
        <h3 className="font-bold text-xl text-green-300">{task.title}</h3>
        <span className="px-3 py-1 text-xs font-semibold bg-gray-700 text-green-300 rounded-full border border-gray-600">
          {task.category}
        </span>
      </div>

      <p className="text-gray-300 text-sm mb-5">
        {task.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-700">
        <div className="flex items-center text-green-200 text-sm">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <span>{task.date}</span>
        </div>

        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded transition-colors duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
            View
          </button>
          <button className="flex items-center gap-1 px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white text-xs font-medium rounded transition-colors duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
            </svg>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompleteTask;