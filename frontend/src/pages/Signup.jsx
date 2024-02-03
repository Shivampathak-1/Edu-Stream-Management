import React from 'react'

function Signup() {
  return (
    <>
    <div className="flex items-center justify-center h-screen bg-gray-200 mt-2">
      <div className="bg-white p-12 rounded-md shadow-md w-full max-w-xl">
        <h2 className="text-3xl font-bold mb-6 flex items-center justify-center" >Sign Up</h2>
        <form className="space-y-4">
          {/* First row - Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="First Name"
              />
            </div>
            <div>
              <label htmlFor="middleName" className="block text-gray-700 text-sm font-bold mb-2">
                Middle Name
              </label>
              <input
                type="text"
                id="middleName"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Middle Name"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Second row - Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your Email"
            />
          </div>

          {/* Third row - Enrollment */}
          <div>
            <label htmlFor="enrollment" className="block text-gray-700 text-sm font-bold mb-2">
              Enrollment Number
            </label>
            <input
              type="text"
              id="enrollment"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your Enrollment Number"
            />
          </div>

          {/* Fourth row - Mobile and Gender */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="mobile" className="block text-gray-700 text-sm font-bold mb-2">
                Mobile No.
              </label>
              <input
                type="number"
                id="mobile"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your Mobile"
              />
            </div>
            <div>
              <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">
                Gender
              </label>
              <select id="gender" className="w-full p-2 border border-gray-300 rounded">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Fifth row - Password and Confirm Password */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Create a password"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-gray-700 text-sm font-bold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Re-enter the password"
              />
            </div>
          </div>

          {/* Last row - Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Signup
