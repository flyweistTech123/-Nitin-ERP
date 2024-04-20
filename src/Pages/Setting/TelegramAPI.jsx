import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'

import img from '../../Img/img98.png'


const TelegramAPI = () => {
  return (
    <>
      <Navbar />
      <div className='telegramapi'>
        <div className='telegramapi1'>
          <img src={img} alt="" />
          <h6>Telegram</h6>
        </div>

        <div className='telegramapi2'>
          <div className='telegramapi3'>
            <label htmlFor="">YOUR_TELEGRAM_BOT_TOKEN</label>
            <input type="text" name="" id="" placeholder='Text any type of data' />
          </div>
        </div>
      </div>
    </>
  )
}

export default TelegramAPI