import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'

const CCAvenueAPI = () => {
  return (
    <>
      <Navbar />
      <div className='telegramapi'>
        <div className='telegramapi1'>
          <h6>CC avenue</h6>
        </div>

        <div className='ccavenueAPI'>
          <div className='telegramapi3'>
            <label htmlFor="">Merchant ID</label>
            <input type="text" name="" id="" placeholder='Text any type of data' />
          </div>
          <div className='telegramapi3'>
            <label htmlFor="">Access Code</label>
            <input type="text" name="" id="" placeholder='Text any type of data' />
          </div>
          <div className='telegramapi3'>
            <label htmlFor="">Encryption Key</label>
            <input type="text" name="" id="" placeholder='Text any type of data' />
          </div>
        </div>
      </div>
    </>
  )
}

export default CCAvenueAPI