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
          <div className='ccavenueAPI1'>
            <label htmlFor="">Merchant ID</label>
            <label htmlFor="">Access Code</label>
            <label htmlFor="">Encryption Key</label>
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

export default CCAvenueAPI