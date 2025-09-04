import React from 'react';

const FailedTask = ({ task }) => {
  return (
    <div className="w-full p-5 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center gap-2 mb-4 text-red-400">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h3 className="font-semibold">Failed Task</h3>
      </div>

      <div className="flex items-start justify-between mb-4">
        <h3 className="font-bold text-xl text-red-300">{task.title}</h3>
        <span className="px-3 py-1 text-xs font-semibold bg-gray-700 text-red-300 rounded-full border border-gray-600">
          {task.category}
        </span>
      </div>

      <p className="text-gray-300 text-sm mb-5">
        {task.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-700">
        <div className="flex items-center text-red-200 text-sm">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <span>{task.date}</span>
        </div>

        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-medium rounded transition-colors duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Complete
          </button>
          <button className="flex items-center gap-1 px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-medium rounded transition-colors duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            Retry
          </button>
        </div>
      </div>
    </div>
  );
};

export default FailedTask;  