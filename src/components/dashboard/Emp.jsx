import React from 'react'
import Header from '../other/Header'
import Tasknumber from '../other/Tasknumber'
import Tasklist from '../tasklist/Tasklist'

const Emp = ({ data, setUser }) => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Header data={data} setUser={setUser} />
        </div>
        
        <div className="mb-8">
          <div className="rounded-3xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
            <div className="p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
            <div className="px-8 py-8">
              <Tasknumber data={data} />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6 text-white text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Your Tasks
          </h2>
          <div className="rounded-3xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
            <div className="p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
            <div className="px-8 py-8">
              <Tasklist data={data} />
            </div>
          </div>
        </div>

        <footer className="mt-12 py-8 border-t border-gray-700">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">TaskFlow Pro</h3>
            </div>
            <p className="text-gray-400 mb-6">Streamline your workflow with powerful task management</p>
            
            <div className="flex justify-center space-x-6 mb-6">
              <div className="text-center">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <span className="text-sm text-gray-300">Efficient</span>
              </div>
              
              <div className="text-center">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <span className="text-sm text-gray-300">Reliable</span>
              </div>
              
              <div className="text-center">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                </div>
                <span className="text-sm text-gray-300">Fast</span>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-500 text-sm">© 2024 TaskFlow Pro. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Emp;