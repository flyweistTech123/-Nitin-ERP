import React, { useState } from 'react'
import './Register.css'
import register from '../../Img/img1.png'
import register1 from '../../Img/img113.png'
import register2 from '../../Img/x.avif'
import { useNavigate } from 'react-router-dom'
import endPoints from '../../Repository/apiConfig'
import { postApi } from '../../Repository/Api'
import { toast } from 'react-toastify';


import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import img from '../../Img/loading.gif'

const Register = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showconfPassword, setShowConfPassword] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [loading, setLoading] = useState(false);


    const handleRegister = async (event) => {
        event.preventDefault();

        if (!email || !password || !confirmPassword) {
            toast.error("Fill all the fields");
            return;
        }

        setLoading(true);
        const formData = { email, password, confirmPassword };

        postApi(endPoints.registerAdmin, formData, {
            setResponse: (response) => {
                sessionStorage.setItem("token", response?.token);
                navigate('/dashboard');
            },
            setLoading,
            successMsg: "Register Successfully!",
            errorMsg: "Failed to Register!",
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
                            <h6>Register</h6>
                        </div>
                        <div className='register6'>
                            <div className='register7'>
                                <label htmlFor="">Username</label>
                                <input
                                    placeholder='Enter UserName'
                                    type="text"
                                    id="username"
                                    required
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
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
                            <div className="register7">
                                <label htmlFor="password">Confirm Password</label>
                                <div className='input-container-password'>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        placeholder='Enter Confirm  Passowrd'
                                        required
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <div className='logininputseye' onClick={() => setShowConfPassword(!showPassword)}>
                                        {showconfPassword ? <FaEye color='#000' size={20} /> : <FaEyeSlash color='#000' size={20} />}
                                    </div>
                                </div>
                            </div>

                            <div className='register8'>
                                {loading ?
                                    <img src={img} alt="" />
                                    :
                                    <button onClick={handleRegister}>Register</button>
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
                                <p>Already have an account ? <span onClick={() => navigate('/')}>Sign IN</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register