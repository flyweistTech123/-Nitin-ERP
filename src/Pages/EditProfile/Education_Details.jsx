import React, { useState } from 'react'
import './EditProfile.css'
import { useNavigate } from "react-router-dom";
import EditProfile1 from './EditProfile1';
import { IoMdEye } from "react-icons/io";
import { IoMdClose } from "react-icons/io";


const Education_Details = () => {
    const navigate = useNavigate();
    const tableData = [
        {
            id: 1,
            Examtype: '10th',
            Course: 'BSc',
            Stream: 'Science',
            Remarks: 'AB',
            PassingYear: '2016',
            UniversityBoardName: 'Loren epsom',
            TotalMarks: '450',
            MarksObtained: '340',
            PercentageCGPA: "8.9 CGPA"
        },

        {
            id: 1,
            Examtype: '10th',
            Course: 'BSc',
            Stream: 'Science',
            Remarks: 'AB',
            PassingYear: '2016',
            UniversityBoardName: 'Loren epsom',
            TotalMarks: '450',
            MarksObtained: '340',
            PercentageCGPA: "8.9 CGPA"
        },
        {
            id: 1,
            Examtype: '10th',
            Course: 'BSc',
            Stream: 'Science',
            Remarks: 'AB',
            PassingYear: '2016',
            UniversityBoardName: 'Loren epsom',
            TotalMarks: '450',
            MarksObtained: '340',
            PercentageCGPA: "8.9 CGPA"
        },
        {
            id: 1,
            Examtype: '10th',
            Course: 'BSc',
            Stream: 'Science',
            Remarks: 'AB',
            PassingYear: '2016',
            UniversityBoardName: 'Loren epsom',
            TotalMarks: '450',
            MarksObtained: '340',
            PercentageCGPA: "8.9 CGPA"
        },
        {
            id: 1,
            Examtype: '10th',
            Course: 'BSc',
            Stream: 'Science',
            Remarks: 'AB',
            PassingYear: '2016',
            UniversityBoardName: 'Loren epsom',
            TotalMarks: '450',
            MarksObtained: '340',
            PercentageCGPA: "8.9 CGPA"
        },
        {
            id: 1,
            Examtype: '10th',
            Course: 'BSc',
            Stream: 'Science',
            Remarks: 'AB',
            PassingYear: '2016',
            UniversityBoardName: 'Loren epsom',
            TotalMarks: '450',
            MarksObtained: '340',
            PercentageCGPA: "8.9 CGPA"
        },

    ];

    return (
        <>
            <div className='editprofile1'>
                <EditProfile1 />

                <div className='editprofile26'>
                    <div className='editprofile52'>
                        <div className='editprofile40'>
                            <p>Educational Details</p>
                        </div>

                        <div className='editprofile53'>
                            <div className='editprofile57'>
                                <select name="" id="">
                                    <option value="">Select educational level</option>
                                    <option value="">Aadhar Card</option>
                                    <option value="">Passport</option>
                                    <option value="">Driving License</option>
                                    <option value="">Voter ID</option>
                                </select>
                            </div>

                            <div className='editprofile65'>
                                <div className='editprofile59'>
                                    <div className='editprofile60'>
                                        <label htmlFor="">Subject</label>
                                        <div className='editprofile61'>
                                            <div className='editprofile62'>
                                                <p>Loren</p>
                                                <IoMdClose size={15} />
                                            </div>
                                            <div className='editprofile62'>
                                                <p>Loren</p>
                                                <IoMdClose size={15} />
                                            </div>
                                            <div className='editprofile62'>
                                                <p>Loren</p>
                                                <IoMdClose size={15} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='editprofile60'>
                                        <label htmlFor="">Stream</label>
                                        <select name="" id="">
                                            <option value=""></option>
                                        </select>
                                    </div>
                                    <div className='editprofile60'>
                                        <label htmlFor="">Course</label>
                                        <select name="" id="">
                                            <option value=""></option>
                                        </select>
                                    </div>
                                </div>
                                <div className='editprofile59'>
                                    <div className='editprofile60'>
                                        <label htmlFor="">Year of passing</label>
                                        <select name="" id="">
                                            <option value=""></option>
                                        </select>
                                    </div>
                                    <div className='editprofile60'>
                                        <label htmlFor="">University name/ Board</label>
                                        <select name="" id="">
                                            <option value=""></option>
                                        </select>
                                    </div>
                                    <div className='editprofile60'>
                                        <label htmlFor="">Remark</label>
                                        <select name="" id="">
                                            <option value=""></option>
                                        </select>
                                    </div>
                                </div>
                                <div className='editprofile59'>
                                    <div className='editprofile60'>
                                        <label htmlFor="">Total Marks</label>
                                        <input type="text" name="" id="" />
                                    </div>
                                    <div className='editprofile60'>
                                        <label htmlFor="">Marks Obtained</label>
                                        <input type="text" name="" id="" />

                                    </div>
                                    <div className='editprofile60'>
                                        <label htmlFor="">Percentage/CGPA</label>
                                        <input type="text" name="" id="" />

                                    </div>
                                </div>
                            </div>


                            <div className='editprofile66'>
                                <h6>+Upload Marksheet</h6>
                                <h6>+Upload Certificate</h6>
                            </div>

                            <div className='editprofile67'>
                                <button>Add</button>
                            </div>

                        </div>


                    </div>

                    <div className='admission13'>
                        <div className='table-container'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Exam type</th>
                                        <th>Course</th>
                                        <th>Stream</th>
                                        <th>Subject</th>
                                        <th>Remarks</th>
                                        <th>Passing Year</th>
                                        <th>University/Board Name</th>
                                        <th>Total Marks</th>
                                        <th>Marks Obtained</th>
                                        <th>Percentage/CGPA</th>
                                        <th>Marksheet</th>
                                        <th>Certificate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((data) => (
                                        <tr key={data.id}>
                                            <td>{data.Examtype}</td>
                                            <td>{data.Course}</td>
                                            <td>{data.Stream}</td>
                                            <td>
                                                <div className='editprofile68'>
                                                    <select name="" id="">
                                                        <option value="">Loren</option>
                                                        <option value="">Loren</option>
                                                        <option value="">Loren</option>
                                                        <option value="">Loren</option>
                                                    </select>
                                                </div>
                                            </td>
                                            <td>{data.Remarks}</td>
                                            <td>{data.PassingYear}</td>
                                            <td>{data.UniversityBoardName}</td>
                                            <td>{data.TotalMarks}</td>
                                            <td>{data.MarksObtained}</td>
                                            <td>{data.PercentageCGPA}</td>
                                            <td><IoMdEye color='#2155CD' size={25} /></td>
                                            <td><IoMdEye color='#2155CD' size={25} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education_Details