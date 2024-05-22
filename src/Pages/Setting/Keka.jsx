import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'



const Keka = () => {
  return (
    <>
      <Navbar />
      <div className='telegramapi'>
        <div className='telegramapi1'>
          <h6>Keka</h6>
        </div>

        <div className='ccavenueAPI'>
          <div className='ccavenueAPI1'>
            <label htmlFor="">Client _ID</label>
            <label htmlFor="">Client_Secret</label>
            <label htmlFor="">api_key</label>
          </div>
          <div className='ccavenueAPI2'>
            <input type="text" name="" id="" placeholder='Text any type of data' />
            <input type="text" name="" id="" placeholder='Text any type of data' />
            <input type="text" name="" id="" placeholder='Text any type of data' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Keka