import React from 'react'

const Home = () => {
  return (
    <div className="h-[100vh] bg-green-600  to-green-600 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome 👋
        </h1>

        <p className="text-gray-600 mb-6">
          This is your first Card-Swiper
        </p>

        <button className="px-6 py-2 bg-green-500 text-white rounded-2xl transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Home
