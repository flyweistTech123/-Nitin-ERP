import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'


const EasebuzzAPI = () => {
  return (
    <>
      <Navbar />
      <div className='telegramapi'>
        <div className='telegramapi1'>
          <h6>Easebuzz</h6>
        </div>

        <div className='easebuzzAPI'>
          <div className='telegramapi3'>
            <label htmlFor="">Key</label>
            <input type="text" name="" id="" placeholder='Text any type of data' />
          </div>
          <div className='telegramapi3'>
            <label htmlFor="">Salt</label>
            <input type="text" name="" id="" placeholder='Text any type of data' />
          </div>
        </div>
      </div>
    </>
  )
}

export default EasebuzzAPI