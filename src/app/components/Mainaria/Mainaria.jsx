import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';

function Mainaria() {

    const [ cardData, setCardData ] = useState([]);

    useEffect(() => {
        fetch('/datas/card-datas/card-datas.json')
          .then((response) => response.json())
          .then((data) => setCardData(data))
          .catch((error) => console.error('Error fetching data:', error));
      }, []);

  return (
    <div>
        <main>
            <section className='mt-10 sm:my-24'>
                <h1 className='text-white text-3xl text-center mb-12'> Our Services </h1>
                <div className='container mx-auto text-white grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        cardData.map(singaleData => <Card singaleData={singaleData} key={singaleData.id}></Card>)
                    }
                </div>
            </section>
        </main>
    </div>
  )
}

export default Mainaria