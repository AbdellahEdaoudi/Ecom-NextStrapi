'use client'
import React, { useEffect } from 'react'

function Hero() {

  return (
    <section className="bg-gray-50  ">
  <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex  ">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-2xl  md:w-[600px] font-extrabold space-y-64 sm:text-5xl">
        All your Digital Prodacts
        <strong className="font-extrabold text-blue sm:block mt-3"> Is One Click Away </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
       Start Exploring State of the Art Assets Now!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button
          className="block w-full rounded bg-bluee px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-500 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
          onClick={()=>{window.scrollTo({ top: 350, behavior: 'smooth', });}}
        >
          Get Started
        </button>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="/"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero