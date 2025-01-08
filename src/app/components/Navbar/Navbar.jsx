"use client"
import Link from 'next/link'
import React, { useState } from 'react'

function Navbar() {

    const [toggler, setToggler] = useState(false);
    const toggleHandler = () => {
        setToggler(!toggler);
    }

  return (
    <div className='relative'>
        <nav className='bg-[#2d2d33] fixed left-0 right-0 top-0 shadow-xl w-full'>
            <div className='container mx-auto'>
                <div className='py-5 items-center justify-between text-white sm:flex'>
                    <div className='text-xl font-bold sm:text-3xl'>
                        <Link href="/"> <span className='text-[#FE652E]'>S</span>mart Cod<span className='text-[#FE652E]'>ers</span> </Link>
                    </div>

                    <ul className={`absolute shadow-xl py-4 text-center bg-slate-700 w-full flex-1 justify-end ${toggler == false ? 'top-[-300%]' : 'top-[10vh]'} duration-300 text-xl sm:flex sm:static sm:w-auto sm:bg-[#2d2d33] sm:py-0 sm:shadow-none`}>
                        <li> <Link href="/" className='p-3 text-[#F65023] pb-4'> Home </Link> </li>
                        <li> <Link href="/" className='p-3 hover:text-[#F65023] pb-4'> Products </Link> </li>
                        <li> <Link href="/" className='p-3 hover:text-[#F65023] pb-4'> Blogs </Link> </li>
                        <li> <Link href="/" className='p-3 hover:text-[#F65023] pb-4'> Protfolio </Link> </li>
                        <li> <Link href="/" className='p-3 hover:text-[#F65023] pb-4'> contact </Link> </li>
                    </ul>
                    <div>
                        <button onClick={toggleHandler} className='absolute top-0 right-0 py-5 sm:hidden'>
                            <img className='size-7' src={toggler == true ? '/img/close.svg' : '/img/nav.svg'} alt="img" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar