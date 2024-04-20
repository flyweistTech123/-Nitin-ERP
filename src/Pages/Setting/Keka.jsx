import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'



const Keka = () => {
  return (
    <>
      <Navbar />
      <div className='telegramapi'>
        <div className='telegramapi1'>
          <h6>CC avenue</h6>
        </div>

        <div className='ccavenueAPI'>
          <div className='telegramapi3'>
            <label htmlFor="">Client _ID</label>
            <input type="text" name="" id="" placeholder='Text any type of data' />
          </div>
          <div className='telegramapi3'>
            <label htmlFor="">Client_Secret</label>
            <input type="text" name="" id="" placeholder='Text any type of data' />
          </div>
          <div className='telegramapi3'>
            <label htmlFor="">api_key</label>
            <input type="text" name="" id="" placeholder='Text any type of data' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Keka