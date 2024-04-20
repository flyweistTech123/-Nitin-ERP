import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'



const InterktAPI = () => {
  return (
    <>
      <Navbar />
      <div className='telegramapi'>
        <div className='telegramapi1'>
          <h6>Interkt API</h6>
        </div>

        <div className='telegramapi2'>
          <div className='telegramapi3'>
            <label htmlFor="">Secret Key</label>
            <input type="text" name="" id="" placeholder='Text any type of data' />
          </div>
        </div>
      </div>
    </>
  )
}

export default InterktAPI