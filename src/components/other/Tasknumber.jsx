import React from 'react';

const Tasknumber = ({ data }) => {
  return (
    <div className='grid grid-cols-1 gap-4'>
      <div className='flex flex-col md:flex-row gap-4'>
        <div className='w-full md:w-1/2 flex items-center p-5 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 transition-all duration-300 hover:shadow-lg'>
          <div className="mr-4 p-2 bg-blue-400/20 rounded-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <div>
            <h1 className='text-white font-bold text-3xl'>
              {data.taskCount.active}
            </h1>
            <h3 className='text-blue-100 text-sm'>
              Active Tasks
            </h3>
          </div>
        </div>

        <div className='w-full md:w-1/2 flex items-center p-5 rounded-xl bg-gray-800 transition-all duration-300 hover:shadow-lg border border-gray-700'>
          <div className="mr-4 p-2 bg-blue-400/20 rounded-lg">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </div>
          <div>
            <h1 className='text-blue-400 font-bold text-3xl'>
              {data.taskCount.newTask}
            </h1>
            <h3 className='text-gray-400 text-sm'>
              New Tasks
            </h3>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-4'>
        <div className='w-full md:w-1/2 flex items-center p-5 rounded-xl bg-gray-800 transition-all duration-300 hover:shadow-lg border border-gray-700'>
          <div className="mr-4 p-2 bg-green-500/20 rounded-lg">
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div>
            <h1 className='text-green-500 font-bold text-3xl'>
              {data.taskCount.complete}
            </h1>
            <h3 className='text-gray-400 text-sm'>
              Completed
            </h3>
          </div>
        </div>

        <div className='w-full md:w-1/2 flex items-center p-5 rounded-xl bg-gray-800 transition-all duration-300 hover:shadow-lg border border-gray-700'>
          <div className="mr-4 p-2 bg-red-500/20 rounded-lg">
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div>
            <h1 className='text-red-500 font-bold text-3xl'>
              {data.taskCount.failed}
            </h1>
            <h3 className='text-gray-400 text-sm'>
              Failed
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasknumber;