import React from 'react'
import './Login.css'
import register from '../../Img/img1.png'
import register1 from '../../Img/img113.png'
import register2 from '../../Img/x.avif'
import { useNavigate } from 'react-router-dom'



const NewPassword = () => {
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
                            <h6>New Password</h6>
                            <p>Enter your New password</p>
                        </div>

                        <div className='register6'>
                            <div className='register7'>
                                <label htmlFor="">New Password</label>
                                <input type="password" placeholder='Enter Password' />
                            </div>
                            <div className='register7'>
                                <label htmlFor="">Confirm Password</label>
                                <input type="password" placeholder='Enter Password' />
                            </div>

                            <div className='register8'>
                                <button onClick={() => navigate('/')}>Submit</button>
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
                                    <p>LinkedIn</p>
                                </div>
                                <div className='register11'>
                                    <img src={register2} alt="" />
                                    <p>X</p>
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

export default NewPassword