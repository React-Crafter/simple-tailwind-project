import React from 'react'

function Heroaria() {
  return (
    <div>
        <header>
            <div className='container mx-auto text-center sm:border border-indigo-600 border-t-0 h-[95vh] pt-20 px-10  text-white sm:flex justify-around items-center'>
                <div>
                    <h1 className='text-2xl mb-5 sm:text-3xl sm:mb-16'>
                        Smart Coders: Learn <br />
                        Programming
                    </h1>
                    <button className='bg-indigo-900 py-3 px-5 md:px-10 md:py-3 shadow-xl rounded-full text-base md:text-xl hover:bg-indigo-950'>
                        Join us Now
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 pl-2 inline-block text-red-500 animate-ping">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>

                <div className='pt-5'> 
                    <img className="animate-pulse h-[320px] w-[450px] md:size-auto" src="img/hero-img.png" alt="heroImg" />
                </div>
            </div>
        </header>
    </div>
  )
}

export default Heroaria