import React, { useState, useEffect } from 'react'
import Clints from '../Clints/Clints';

function Clientaria() {

    const [ClientsData, setClientsData] = useState([]);

    useEffect(() => {
        fetch('/datas/Clints-datas/Clints-datas.json')
        .then(res => res.json())
        .then(data => setClientsData(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []); 
  return (
    <div>
        <section className='container mb-24 mx-auto bg-slate-900 py-16 md:py-48 grid place-content-center'>
            <div className='md:flex justify-center gap-5 sm:gap-8 md:gap-10 md:gap-x-48 items-center text-white'>
                <div className='text-lg sm:text-xl md:text-4xl text-center mb-12 md:mb-0'>
                    <p className='text-yellow-500 animate-bounce mb-10'> My Clients </p>
                    <h2>
                        My Take care of <br />
                        more <span className='underline decoration-orange-500 underline-offset-8'> than 500k </span> <br />
                        Customers 
                    </h2>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8 md:gap-12 justify-center'>
                    {
                        ClientsData.map(singaleClints => <Clints singaleClints = {singaleClints} key={singaleClints.id}></Clints>)
                    }
                </div>
            </div>
        </section>
    </div>
  )
}

export default Clientaria