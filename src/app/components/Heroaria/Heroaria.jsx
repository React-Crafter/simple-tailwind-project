import React from 'react'

function Heroaria() {
  return (
    <div>
        <header>
            <div className='container w-full mx-auto text-center lg:border border-indigo-600 lg:h-[85vh] border-t-0 mb-4 lg:py-20 px-10  text-white sm:flex justify-around items-center'>
                <div className='flex-1'>
                    <h1 className='text-2xl mb-5 md:text-3xl sm:mb-16'>
                        Mth programmer: Learn <br />
                        Programming
                    </h1>
                    <button className='bg-indigo-900 transition py-3 px-5 md:px-10 md:py-3 shadow-xl rounded-full text-sm
                    lg:text-xl hover:bg-indigo-950'>
                        Join : Mth Programmer's Team
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 pl-2 inline-block text-red-500 animate-ping">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>

                <div className='pt-5 h-1/2 md:h-auto overflow-hidden flex-1'> 
                    <img className="mx-auto animate-pulse w-[320px] md:w-[400px]" src="img/hero-img.png" alt="heroImg" />
                </div>
            </div>
        </header>
    </div>
  )
}

export default Heroaria