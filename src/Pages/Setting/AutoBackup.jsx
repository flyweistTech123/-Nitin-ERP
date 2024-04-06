import React, { useEffect, useState } from 'react';
import './Setting.css'
import HOC from '../../Components/HOC/HOC'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { VscDebugRestart } from "react-icons/vsc";




const AutoBackup = () => {
    const tableData = [
        {
            id: 1,
            BackupDate: 'DD/MM/YYYY',
            BackupFilesize:"10 MB",
            BackupMode:'Manual'
        },

        {
            id: 1,
            BackupDate: 'DD/MM/YYYY',
            BackupFilesize:"10 MB",
            BackupMode:'Manual'
        },
        {
            id: 1,
            BackupDate: 'DD/MM/YYYY',
            BackupFilesize:"10 MB",
            BackupMode:'Manual'
        },
        {
            id: 1,
            BackupDate: 'DD/MM/YYYY',
            BackupFilesize:"10 MB",
            BackupMode:'Manual'
        },
        {
            id: 1,
            BackupDate: 'DD/MM/YYYY',
            BackupFilesize:"10 MB",
            BackupMode:'Manual'
        },
        {
            id: 1,
            BackupDate: 'DD/MM/YYYY',
            BackupFilesize:"10 MB",
            BackupMode:'Manual'
        },

    ];
    return (
        <>
            <div className='admission'>
                <div className='admission1'>
                    <p>Auto Backup</p>
                    <div className='setting9'>
                        <IoIosSettings color='#2155CD' size={24} />
                        <button>Generate manual Backup</button>
                        <button>Delete</button>
                    </div>
                </div>
                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th>Backup Date</th>
                                    <th>Backup File size</th>
                                    <th>Backup Mode</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /></td>
                                        <td>{data.BackupDate}</td>
                                        <td>{data.BackupFilesize} <MdOutlineFileDownload color='#2155CD' size={20}/></td>
                                        <td>{data.BackupMode}</td>
                                        <td>
                                            <div className='setting10'>
                                                <button><VscDebugRestart size={18} /> Restore</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(AutoBackup)