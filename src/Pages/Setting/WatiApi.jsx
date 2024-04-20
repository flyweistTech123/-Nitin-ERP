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
          <div className='telegramapi3'>
            <label htmlFor="">Access Token</label>
            <input type="text" name="" id="" placeholder='Text any type of data' />
          </div>
          <div className='telegramapi3'>
            <label htmlFor="">API Endpoint</label>
            <input type="text" name="" id="" placeholder='Text any type of data' />
          </div>
          <div className='telegramapi3'>
            <label htmlFor="">Whatsapp number</label>
            <input type="text" name="" id="" placeholder='Text any type of data' />
          </div>
        </div>
      </div>
    </>
  )
}

export default WatiApi