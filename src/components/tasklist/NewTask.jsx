import React, { useState } from 'react';

const NewTask = ({ task }) => {
 const [isCompleted, setIsCompleted] = useState(false);
 const [isFailed, setIsFailed] = useState(false);

 const handleComplete = () => {
  setIsCompleted(true);
  setTimeout(() => setIsCompleted(false), 1500);
 };

 const handleFail = () => {
  setIsFailed(true);
  setTimeout(() => setIsFailed(false), 1500);
 };

 return (
  <div className="w-full p-5 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 transition-all duration-300 hover:shadow-lg">
   <div className="flex items-center gap-2 mb-4 text-blue-400">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
    </svg>
    <h3 className="font-semibold">New Task</h3>
   </div>
   <div className="flex items-start justify-between mb-4">
    <h3 className="font-bold text-xl text-blue-300">{task.title}</h3>
    <span className="px-3 py-1 text-xs font-semibold bg-gray-700 text-blue-300 rounded-full border border-gray-600">
     {task.category}
    </span>
   </div>
   <p className="text-gray-300 text-sm leading-relaxed mb-5">
    {task.description}
   </p>
   <div className="flex items-center justify-between pt-4 border-t border-gray-700">
    <div className="flex items-center text-blue-200 text-sm">
     <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
     </svg>
     <span>{task.date}</span>
    </div>
    <div className="flex gap-2">
     <button
      onClick={handleComplete}
      className="flex items-center gap-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-medium rounded transition-colors duration-200"
     >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
      Complete
     </button>
     <button
      onClick={handleFail}
      className="flex items-center gap-1 px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-medium rounded transition-colors duration-200"
     >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
      Failed
     </button>
    </div>
   </div>
  </div>
 );
};

export default NewTask;