import React, { useEffect, useState } from 'react';
import './ITReport.css'
import HOC from '../../Components/HOC/HOC'
import { MdOutlineClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";


const ITReport = () => {
    const tableData = [
        {
            id: 1,
            recordeddate: 'DD/MM/YYYY',
            website: 'WWW.abc.com',
            contentAdded: 'Loren Epsom',
            contentwordCount: '1000',
            URL: 'http//sdhsa/sdkdshf/sdg',
            topic: 'Loren epsom',
            Keywords: 'Loren',
            Responsible: 'Loren epsom',
            history: 'Logs'
        },

        {
            id: 1,
            recordeddate: 'DD/MM/YYYY',
            website: 'WWW.abc.com',
            contentAdded: 'Loren Epsom',
            contentwordCount: '1000',
            URL: 'http//sdhsa/sdkdshf/sdg',
            topic: 'Loren epsom',
            Keywords: 'Loren',
            Responsible: 'Loren epsom',
            history: 'Logs'
        },
        {
            id: 1,
            recordeddate: 'DD/MM/YYYY',
            website: 'WWW.abc.com',
            contentAdded: 'Loren Epsom',
            contentwordCount: '1000',
            URL: 'http//sdhsa/sdkdshf/sdg',
            topic: 'Loren epsom',
            Keywords: 'Loren',
            Responsible: 'Loren epsom',
            history: 'Logs'
        },
        {
            id: 1,
            recordeddate: 'DD/MM/YYYY',
            website: 'WWW.abc.com',
            contentAdded: 'Loren Epsom',
            contentwordCount: '1000',
            URL: 'http//sdhsa/sdkdshf/sdg',
            topic: 'Loren epsom',
            Keywords: 'Loren',
            Responsible: 'Loren epsom',
            history: 'Logs'
        },
        {
            id: 1,
            recordeddate: 'DD/MM/YYYY',
            website: 'WWW.abc.com',
            contentAdded: 'Loren Epsom',
            contentwordCount: '1000',
            URL: 'http//sdhsa/sdkdshf/sdg',
            topic: 'Loren epsom',
            Keywords: 'Loren',
            Responsible: 'Loren epsom',
            history: 'Logs'
        },
        {
            id: 1,
            recordeddate: 'DD/MM/YYYY',
            website: 'WWW.abc.com',
            contentAdded: 'Loren Epsom',
            contentwordCount: '1000',
            URL: 'http//sdhsa/sdkdshf/sdg',
            topic: 'Loren epsom',
            Keywords: 'Loren',
            Responsible: 'Loren epsom',
            history: 'Logs'
        },

    ];
    return (
        <>
            <div className='admission'>
                <div className='admission1'>
                    <p>IT Report</p>
                </div>

                <div className='admission8'>
                    <div>
                        <p>Filter</p>
                    </div>
                    <div className='admission9'>
                        <div className='admission10'>
                            <p>My filter</p>
                            <MdOutlineClose color='#FFFFFF' size={20} />
                        </div>
                    </div>
                    <div className='admission2'>
                        <div className='cancel1'>
                            <p>Add</p>
                        </div>
                        <div className='cancel2'>
                            <p>Edit</p>
                        </div>
                        <div className='cancel3'>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>
                <div className='itreport'>
                    <button>Import</button>
                    <button>Export</button>
                </div>

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th>Recorded Date</th>
                                    <th>Website</th>
                                    <th>Content Added</th>
                                    <th>Content word Count</th>
                                    <th>URL</th>
                                    <th>Topic</th>
                                    <th>Keywords</th>
                                    <th>Responsible Person</th>
                                    <th>History</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /></td>
                                        <td>{data.recordeddate}</td>
                                        <td>{data.website}</td>
                                        <td style={{  color: "#00B25D", textDecoration: "underline" }}>{data.contentAdded}</td>
                                        <td>{data.contentwordCount}</td>
                                        <td>{data.URL}</td>
                                        <td>{data.topic}</td>
                                        <td>{data.Keywords}</td>
                                        <td>{data.Responsible}</td>
                                        <td style={{ fontWeight: '600', color: "#2155CD", textDecoration: "underline" }}>{data.history}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className='pendingpayment6'>
                    <div className='pendingpayment7'>
                        <h6>Total:</h6>
                        <span>Show quantity</span>
                    </div>

                    <div className='pendingpayment8'>
                        <p>Page :1</p>
                    </div>

                    <div className='pendingpayment9'>
                        <p>Records</p>
                        <div className='pendingpayment10'>
                            <p>20</p>
                            <IoIosArrowDown color='#3F3F3F' />
                        </div>
                    </div>
                </div>

                <div className='admission18'>
                    <button>Previous</button>
                    <button>Next</button>
                </div>

            </div>
        </>
    )
}

export default HOC(ITReport)