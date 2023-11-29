import React from 'react'

export default function RegisterDoctor() {
  return (
      <>
          <div className="flex h-screen">
            <div className="flex-1 bg-gradient-to-r from-indigo-800 via-indigo-500 to-indigo-800 text-white p-8 flex items-center justify-center">
              <div className=''>
                <h1 className="text-4xl font-bold mb-4">Electronic Health Records</h1>
                <p className="text-lg mb-4">Doctor Registration Dashboard</p>
                <p className="text-lg">Enter doctor details to onboard a doctor</p>
              </div>
            </div>
            {/* LOGIN FORM */}
            <div className="flex-1 bg-gray-100 flex justify-center items-center">
              <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
                <div>
                  <h2 className="text-3xl font-extrabold text-gray-900">Doctor Registration</h2>
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
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="first_name"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="last_name"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <div className="mt-1">
                      <input
                        id="phone"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="license_number" className="block text-sm font-medium text-gray-700">
                      License Number
                    </label>
                    <div className="mt-1">
                      <input
                        id="license_number"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="specialty" className="block text-sm font-medium text-gray-700">
                      Specialty
                    </label>
                    <div className="mt-1">
                      <input
                        id="specialty"
                        type="text"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Gender
                    </label>
                    <div>
                      <input type="radio" id="male" name="gender" value="male" />
                      <label htmlFor="male" className='pl-2 text-sm font-medium text-gray-700'>Male</label>
                    </div>
                    <div>
                      <input type="radio" id="female" name="gender" value="female" />
                      <label htmlFor="female" className='pl-2 text-sm font-medium text-gray-700'>Female</label>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Register Doctor
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>  
      </>
      );
}
