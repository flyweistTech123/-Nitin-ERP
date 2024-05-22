import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'




const PaytmGateway = () => {
  return (
    <>
      <Navbar />
      <div className='telegramapi'>
        <div className='telegramapi1'>
          <h6>Paytm Gateway</h6>
        </div>

        <div className='ccavenueAPI'>
          <div className='ccavenueAPI3'>
            <label htmlFor="">$mid = "YOUR_MID_HERE";</label>
            <label htmlFor="">$key = "YOUR_KEY_HERE";</label>
            <label htmlFor="">$website = "YOUR_WEBSITE_NAME";</label>
            <label htmlFor="">$client_id = "YOUR_CLIENT_ID_HERE";</label>
          </div>
          <div className='ccavenueAPI2'>
            <input type="text" name="" id="" placeholder='Text any type of data' />
            <input type="text" name="" id="" placeholder='Text any type of data' />
            <input type="text" name="" id="" placeholder='Text any type of data' />
            <input type="text" name="" id="" placeholder='Text any type of data' />
          </div>
        </div>
      </div>
    </>
  )
}

export default PaytmGateway