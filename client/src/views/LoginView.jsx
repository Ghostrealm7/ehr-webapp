import React from 'react'

export default function LoginView() {
  return (
      <>
          <div className="flex h-screen">
            <div className="flex-1 bg-gradient-to-r from-violet-500 to-violet-800 text-white p-8 flex items-center justify-center">
              <div className=''>
                <h1 className="text-4xl font-bold mb-4">Electronic Health Records</h1>
                <p className="text-lg">Digitalizing the Medical industry, one patient at a time</p>
              </div>
            </div>
            {/* LOGIN FORM */}
            <div className="flex-1 bg-gray-100 flex justify-center items-center">
              <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
                <div>
                  <h2 className="text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                </div>
                <form className="mt-8 space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="">
                    <a href="">Forgot Password? Click here.</a>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>  
      </>
      );
}
