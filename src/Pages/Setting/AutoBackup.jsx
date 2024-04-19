import React, { useEffect, useState } from 'react';
import './Setting.css'
import HOC from '../../Components/HOC/HOC'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import { IoIosSettings } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { VscDebugRestart } from "react-icons/vsc";




const AutoBackup = () => {
    const tableData = [
        {
            id: 1,
            BackupDate: 'DD/MM/YYYY',
            BackupFilesize: "10 MB",
            BackupMode: 'Manual',
            Time: "10:30 AM",
            Mode: "Daily"
        },

        {
            id: 1,
            BackupDate: 'DD/MM/YYYY',
            BackupFilesize: "10 MB",
            BackupMode: 'Manual',
            Time: "10:30 AM",
            Mode: "Weekly"
        },
        {
            id: 1,
            BackupDate: 'DD/MM/YYYY',
            BackupFilesize: "10 MB",
            BackupMode: 'Manual',
            Time: "10:30 AM",
            Mode: "Monthly"
        },
        {
            id: 1,
            BackupDate: 'DD/MM/YYYY',
            BackupFilesize: "10 MB",
            BackupMode: 'Manual',
            Time: "10:30 AM",
            Mode: "Yearly"
        },
        {
            id: 1,
            BackupDate: 'DD/MM/YYYY',
            BackupFilesize: "10 MB",
            BackupMode: 'Manual',
            Time: "10:30 AM",
            Mode: "Yearly"
        },
        {
            id: 1,
            BackupDate: 'DD/MM/YYYY',
            BackupFilesize: "10 MB",
            BackupMode: 'Manual',
            Time: "10:30 AM",
            Mode: "Yearly"
        },

    ];


    // AddSpecialization  Modal 
    const [modalShow, setModalShow] = React.useState(false);

    function BackupAutomationSetting(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body >
                    <Modal.Title className='addUniversityModal7'>Backup Automation Setting</Modal.Title>
                    <div className='admission13'>
                        <div className='table-container'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Time</th>
                                        <th>Mode</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((data) => (
                                        <tr key={data.id}>
                                            <td>{data.Time}</td>
                                            <td>{data.Mode}</td>
                                            <td>
                                                <div className='setting10'>
                                                    <button>Select</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }


    return (
        <>
            <BackupAutomationSetting
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>Auto Backup</p>
                    <div className='setting9'>
                        <IoIosSettings color='#2155CD' size={24} onClick={() => setModalShow(true)} />
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
                                        <td>{data.BackupFilesize} <MdOutlineFileDownload color='#2155CD' size={20} /></td>
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