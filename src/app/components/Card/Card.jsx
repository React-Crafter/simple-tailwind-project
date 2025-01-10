import React from 'react'

function Card({singaleData}) {
  return (
    <div>
        <div className='bg-gray-800 transition duration-100 text-center p-8 border-4 border-gray-800 hover:border-indigo-700 rounded-lg
        hover:cursor-pointer'>
            <img className='w-1/2 mx-auto' src={singaleData.img} alt={`Mth programmer ${singaleData.title}`} title={`Mth programmer ${singaleData.title}`} />
            <h4 className='text-lg underline my-5 underline-offset-8'> {singaleData.title} </h4>
            <p> {singaleData.description} </p>
        </div>
    </div>
  )
}

export default Card