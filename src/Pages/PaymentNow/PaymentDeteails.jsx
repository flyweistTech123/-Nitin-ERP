import React, { useState } from 'react'
import './PaymentNow.css'
import { useNavigate } from 'react-router-dom'

import img from '../../Img/img99.png'
import img1 from '../../Img/img41.png'
import img2 from '../../Img/img42.png'
import img3 from '../../Img/img43.png'
import img4 from '../../Img/img44.png'
import img5 from '../../Img/img45.png'


const paymentOptions = [
        { imgSrc: img1, label: '' },
    { imgSrc: img2, label: 'CASH' },
    { imgSrc: img3, label: 'NEFT' },
    { imgSrc: img4, label: 'DD' },
    { imgSrc: img5, label: 'BANK DEPOSIT' }
];





const PaymentDeteails = () => {
    const [show, setShow] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null);

    const handleRadioChange = (index) => {
        setSelectedOption(index);
    };
    const handleOptionClick = (label) => {
        if (['CASH', 'NEFT', 'DD', 'BANK DEPOSIT'].includes(label)) {
            setShow(true);
        }
    };
    const navigate = useNavigate()
    return (
        <>
            <div className='paymentnow1'>
                <div className='paymentdetails'>
                    <div className='paymentdetails1'>
                        <div className='paymentdetails2'>
                            <img src={img} alt="" />
                        </div>
                    </div>

                    <div className='paymentdetails3'>
                        <div className='paymentdetails4'>
                            <div className='paymentdetails5'>
                                <h6>PAYMENT DETAILS</h6>
                            </div>

                            <div className='paymentdetails6'>
                                <div className='paymentdetails7'>
                                    <label htmlFor="">Full Name</label>
                                    <input type="text" />
                                </div>
                                <div className='paymentdetails7'>
                                    <label htmlFor="">Father’s Name</label>
                                    <input type="text" />
                                </div>
                                <div className='paymentdetails7'>
                                    <label htmlFor="">University</label>
                                    <input type="text" />
                                </div>
                                <div className='paymentdetails7'>
                                    <label htmlFor="">Payment Received</label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className='paymentdetails55'>
                                <h6>PAYMENT DETAILS</h6>
                            </div>
                            <div className='paymentdetails6'>
                                <div className='paymentdetails7'>
                                    <label htmlFor="">Due Amount</label>
                                    <input type="text" />
                                </div>
                                <div className='paymentdetails7'>
                                    <label htmlFor="">Payment Received</label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className='paymentdetails8'>
                                <h6>Select your Payment Type :</h6>

                                <div className='paymentdetails9'>
                                    {paymentOptions.map((option, index) => (
                                        <div key={index}
                                            className={`paymentdetails10 ${selectedOption === index ? 'selected' : ''}`}
                                            onClick={() => handleOptionClick(option.label)}
                                        >
                                            <input type="radio"
                                                name='select'
                                                checked={selectedOption === index}
                                                onChange={() => handleRadioChange(index)} />
                                            <img src={option.imgSrc} alt={option.label} />
                                            <h5>{option.label}</h5>
                                        </div>
                                    ))}

                                </div>

                            </div>

                            {show && (
                                <div>
                                    <div className='paymentdetails6'>
                                        <div className='paymentdetails7'>
                                            <label htmlFor="">Bank Details</label>
                                            <select name="" id="">
                                                <option value=""></option>
                                            </select>
                                        </div>
                                        <div className='paymentdetails7'>
                                            <label htmlFor=""><span>*</span>Receipt</label>
                                            <input type="text" />
                                        </div>
                                    </div>

                                    <div className='paymentdetails14'>
                                        <div className='paymentdetails7'>
                                            <label htmlFor=""><span>*</span>Receipt File</label>
                                            <input type="text" />
                                        </div>
                                        <div className='paymentdetails15'>
                                            <input type="file" />
                                        </div>
                                    </div>
                                </div>
                            )}





                            <div className='paymentdetails11'>
                                <div className='paymentdetails12'>
                                    <label htmlFor="">Pay Amount :</label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className='paymentdetails13'>
                                <button onClick={()=>navigate('/easebuzzpayment')}>PAY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentDeteails