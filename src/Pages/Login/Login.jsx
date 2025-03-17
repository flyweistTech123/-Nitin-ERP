import React, { useState } from 'react'
import './Login.css'
import register from '../../Img/img1.png'
import register1 from '../../Img/img113.png'
import register2 from '../../Img/x.avif'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify';
import { postApi } from '../../Repository/Api'
import endPoints from '../../Repository/apiConfig'

import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import img from '../../Img/loading.gif'

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState(null)
    const [loading, setLoading] = useState(false);


    const handleLogin = async (event) => {
        event.preventDefault();

        if (!email || !password) {
            toast.error("Fill all the fields");
            return;
        }

        setLoading(true);
        const formData = { email, password };

        postApi(endPoints.loginAdmin, formData, {
            setResponse: (response) => {
                sessionStorage.setItem("token", response?.token);
                navigate('/dashboard');
            },
            setLoading,
            successMsg: "Login Successfully!",
            errorMsg: "Failed to Login!",
        });
    };
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
                                <input
                                    placeholder='Enter Email'
                                    type="email"
                                    id="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="register7">
                                <label htmlFor="password">Password</label>
                                <div className='input-container-password'>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        placeholder='Enter Passowrd'
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <div className='logininputseye' onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <FaEye color='#000' size={20} /> : <FaEyeSlash color='#000' size={20} />}
                                    </div>
                                </div>
                            </div>
                            <div className='register13'>
                                <input type="checkbox" id="newsletter-checkbox" />
                                <label htmlFor="newsletter-checkbox">Subscribe to weekly newsletter</label>
                            </div>

                            <div className='register8'>
                                {loading ?
                                    <img src={img} alt="" />
                                    :
                                    <button onClick={handleLogin}>SIGN IN</button>
                                }
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
                            <div className='register12'>
                                <p> <span onClick={() => navigate('/forgetPassword')}>Forget Password</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login