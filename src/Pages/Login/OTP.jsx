import React, { useState } from 'react';
import './Login.css'
import register from '../../Img/img1.png'
import register1 from '../../Img/img2.png'
import register2 from '../../Img/img3.png'
import { useNavigate } from 'react-router-dom'



const OTP = () => {

    const [otp, setOtp] = useState(new Array(6).fill(''));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const navigate = useNavigate();
    return (
        <>
            <div className='register'>
                <div className='register1'>
                    <div className='register2'>
                        <div className='register3'>
                            <p>College Logo</p>
                        </div>
                    </div>
                </div>
                <div className='register4'>
                    <div className='register5'>
                        <div className='register55'>
                            <h6>OTP</h6>
                            <p>Enter OTP to Forget Password</p>
                        </div>

                        <div className='register6'>
                            <div className='register7'>
                                <label htmlFor="">OTP</label>
                                <div className='otp-input-container'>
                                    {otp.map((data, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            className="otp-input"
                                            value={data}
                                            maxLength="1"
                                            onChange={(e) => handleChange(e.target, index)}
                                            onFocus={(e) => e.target.select()}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className='register8'>
                                <button onClick={() => navigate('/newpassword')}>Submit</button>
                            </div>
                            <div className='register9'>
                                <p>OR</p>
                            </div>

                            <div className='register10'>
                                <div className='register11'>
                                    <img src={register} alt="" />
                                    <p>Google</p>
                                </div>
                                <div className='register11'>
                                    <img src={register1} alt="" />
                                    <p>Github</p>
                                </div>
                                <div className='register11'>
                                    <img src={register2} alt="" />
                                    <p>Twitter</p>
                                </div>
                            </div>

                            <div className='register12'>
                                <p>Dont' have an account ? <span onClick={() => navigate('/register')}>Register</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OTP