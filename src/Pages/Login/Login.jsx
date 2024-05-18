import React from 'react'
import './Login.css'
import register from '../../Img/img1.png'
import register1 from '../../Img/img2.png'
import register2 from '../../Img/img3.png'
import { useNavigate } from 'react-router-dom'



const Login = () => {
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
                            <h6>Sign In</h6>
                            <p>Enter your email and password to login</p>
                        </div>

                        <div className='register6'>
                            <div className='register7'>
                                <label htmlFor="">Email</label>
                                <input type="email" placeholder='Enter Email' />
                            </div>
                            <div className='register7'>
                                <label htmlFor="">Password</label>
                                <input type="password" placeholder='Enter Password' />
                            </div>
                            <div className='register13'>
                                <input type="checkbox" id="newsletter-checkbox" />
                                <label htmlFor="newsletter-checkbox">Subscribe to weekly newsletter</label>
                            </div>
                        
                            <div className='register8'>
                                <button  onClick={()=>navigate('/dashboard')}>SIGN IN</button>
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
                                <p>Dont' have an account ? <span onClick={()=>navigate('/')}>Register</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login