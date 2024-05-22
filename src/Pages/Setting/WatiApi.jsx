import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'


const WatiApi = () => {
  return (
    <>
      <Navbar />
      <div className='telegramapi'>
        <div className='telegramapi1'>
          <h6>Wati API</h6>
        </div>

        <div className='ccavenueAPI'>
          <div className='ccavenueAPI1'>
            <label htmlFor="">Access Token</label>
            <label htmlFor="">API Endpoint</label>
            <label htmlFor="">Whatsapp number</label>
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

export default WatiApi