import React, { useState } from 'react'
import './EditProfile.css'
import { useNavigate } from "react-router-dom";
import EditProfile from './EditProfile';

import { IoMdEye } from "react-icons/io";


import {
    AddFeestStructure
} from '../Modals/Modals.jsx'
import { tuple } from 'rsuite/esm/@types/utils.js';

const Automatic2FeeStructure = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(0);

    // add fee structure Modal 
    const [modalShow, setModalShow] = React.useState(false);

    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)

    const handleShow = () => {
        setShow(false)
        setShow1(true)
    }

    const handleShow1 = () => {
        setShow(true)
        setShow1(false)
    }

    return (
        <>
            <AddFeestStructure
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className='editprofile1'>
                <EditProfile />

                <div className='editprofile26'>
                    <div className='editprofile69'>
                        <h6>Fee Structure</h6>
                        <button onClick={() => setModalShow(true)}>Add Fee Structure</button>
                    </div>

                    <div className="editprofile70">
                        <div className={step === 0 ? "editprofile71" : "editprofile72"} onClick={() => setStep(0)}>
                            <p>Batch 1</p>
                        </div>
                        <div className={step === 1 ? "editprofile71" : "editprofile72"} onClick={() => setStep(1)}>
                            <p>Batch 2</p>
                        </div>
                        <div className={step === 2 ? "editprofile71" : "editprofile72"} onClick={() => setStep(2)}>
                            <p>Batch 3</p>
                        </div>
                        <div className={step === 3 ? "editprofile71" : "editprofile72"} onClick={() => setStep(3)}>
                            <p>Batch 4</p>
                        </div>
                        <div className={step === 4 ? "editprofile71" : "editprofile72"} onClick={() => setStep(4)}>
                            <p>Batch 5</p>
                        </div>
                        <div className={step === 5 ? "editprofile71" : "editprofile72"} onClick={() => setStep(5)}>
                            <p>Batch 6</p>
                        </div>
                        <div className={step === 6 ? "editprofile71" : "editprofile72"} onClick={() => setStep(6)}>
                            <p>Batch 7</p>
                        </div>
                    </div>

                    {step === 1 ? (
                        <div className='editprofile73'>

                            <div className="editprofile81">
                                <div className='editprofile82' onClick={handleShow1}>
                                    <p>Manual</p>
                                </div>
                                <div className='editprofile83' onClick={handleShow}>
                                    <p>Automation</p>
                                </div>
                            </div>
                            <div className='editprofile84'>
                                <h6>Enter Exam Batch  - </h6>
                                <div className='editprofile77'>
                                    <label htmlFor="">Exam Batch</label>
                                    <input type="date" />
                                </div>
                            </div>

                            {show &&

                                <div>
                                    <div className='editprofile74'>
                                        <h6>Manual</h6>
                                    </div>
                                    <div className='editprofile75'>
                                        <h6>Exam Batch  -  Month / Year</h6>
                                    </div>
                                    <div className='editprofile78'>
                                        <div className='editprofile76'>
                                            <div className='editprofile77'>
                                                <label htmlFor="">Book Fee</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile77'>
                                                <label htmlFor="">Course Fee</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile77'>
                                                <label htmlFor="">GST</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile77'>
                                                <label htmlFor="">Other</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className='editprofile76'>
                                            <div className='editprofile77'>
                                                <label htmlFor="">Reg.</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile77'>
                                                <label htmlFor="">TOC</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile77'>
                                                <label htmlFor="">Book</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile77'>
                                                <label htmlFor="">LE</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className='editprofile76'>
                                            <div className='editprofile77'>
                                                <label htmlFor="">Multiple</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile79'>
                                                <label htmlFor="">Total =</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='editprofile80'>
                                        <button>SAVE</button>
                                    </div>
                                </div>
                            }



                            {show1 &&

                                <div>
                                    <div className='editprofile74'>
                                        <h6>Automation</h6>
                                    </div>
                                    <div className='editprofile75'>
                                        <h6>Exam Batch  -  Month / Year</h6>
                                    </div>
                                    <div className='editprofile78'>
                                        <div className='editprofile76'>
                                            <div className='editprofile77'>
                                                <label htmlFor="">Book Fee</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile77'>
                                                <label htmlFor="">Course Fee</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile77'>
                                                <label htmlFor="">GST</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile77'>
                                                <label htmlFor="">Other</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className='editprofile76'>
                                            <div className='editprofile77'>
                                                <label htmlFor="">Reg.</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile77'>
                                                <label htmlFor="">TOC</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile77'>
                                                <label htmlFor="">Book</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile77'>
                                                <label htmlFor="">LE</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className='editprofile76'>
                                            <div className='editprofile77'>
                                                <label htmlFor="">Multiple</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile79'>
                                                <label htmlFor="">Total =</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='editprofile80'>
                                        <button>SAVE</button>
                                    </div>
                                </div>
                            }

                        </div>

                    ) : step === 0 ? (
                        <div className='editprofile73'>

                            <div className="editprofile81">
                                <div className='editprofile82' onClick={handleShow1}>
                                    <p>Manual</p>
                                </div>
                                <div className='editprofile83' onClick={handleShow}>
                                    <p>Automation</p>
                                </div>
                            </div>
                            <div className='editprofile84'>
                                <h6>Enter Exam Batch  - </h6>
                                <div className='editprofile77'>
                                    <label htmlFor="">Exam Batch</label>
                                    <input type="date" />
                                </div>
                            </div>

                            {show &&

                                <div>
                                    <div className='editprofile74'>
                                        <h6>Manual</h6>
                                    </div>
                                    <div className='editprofile75'>
                                        <h6>Exam Batch  -  Month / Year</h6>
                                    </div>
                                    <div className='editprofile78'>
                                        <div className='editprofile76'>
                                            <div className='editprofile77'>
                                                <label htmlFor="">Book Fee</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile77'>
                                                <label htmlFor="">Course Fee</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile77'>
                                                <label htmlFor="">GST</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile77'>
                                                <label htmlFor="">Other</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className='editprofile76'>
                                            <div className='editprofile77'>
                                                <label htmlFor="">Reg.</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile77'>
                                                <label htmlFor="">TOC</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile77'>
                                                <label htmlFor="">Book</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile77'>
                                                <label htmlFor="">LE</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className='editprofile76'>
                                            <div className='editprofile77'>
                                                <label htmlFor="">Multiple</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile79'>
                                                <label htmlFor="">Total =</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='editprofile80'>
                                        <button>SAVE</button>
                                    </div>
                                </div>
                            }



                            {show1 &&

                                <div>
                                    <div className='editprofile74'>
                                        <h6>Automation</h6>
                                    </div>
                                    <div className='editprofile75'>
                                        <h6>Exam Batch  -  Month / Year</h6>
                                    </div>
                                    <div className='editprofile78'>
                                        <div className='editprofile76'>
                                            <div className='editprofile77'>
                                                <label htmlFor="">Book Fee</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile77'>
                                                <label htmlFor="">Course Fee</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile77'>
                                                <label htmlFor="">GST</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile77'>
                                                <label htmlFor="">Other</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className='editprofile76'>
                                            <div className='editprofile77'>
                                                <label htmlFor="">Reg.</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile77'>
                                                <label htmlFor="">TOC</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile77'>
                                                <label htmlFor="">Book</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile77'>
                                                <label htmlFor="">LE</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className='editprofile76'>
                                            <div className='editprofile77'>
                                                <label htmlFor="">Multiple</label>
                                                <input type="text" />
                                            </div>
                                            <div className='editprofile79'>
                                                <label htmlFor="">Total =</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='editprofile80'>
                                        <button>SAVE</button>
                                    </div>
                                </div>
                            }





                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    )
}

export default Automatic2FeeStructure