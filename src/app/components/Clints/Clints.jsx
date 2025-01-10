import React from 'react'

function Clints({singaleClints}) {
  return (
    <div className='sm:mx-auto'>
        <img src={singaleClints.img} alt={singaleClints.title} />
        <h3> {singaleClints.title} </h3>
    </div>
  )
}

export default Clints