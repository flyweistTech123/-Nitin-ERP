import React from "react";
import './TopPart.css'
import { useNavigate, useLocation } from "react-router-dom";
import { PasswordInfo, PasswordInfo1, PropertiesModal } from '../Modals/Modals'


import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import 'bootstrap/dist/css/bootstrap.min.css';

const TopPart = () => {
    // password Modal 
    const [modalShow, setModalShow] = React.useState(false);

    // password Modal 
    const [modalShow1, setModalShow1] = React.useState(false);
    const navigate = useNavigate();
    const location = useLocation();


    const [modalShow2, setModalShow2] = React.useState(false);

    const popover1 = (
        <Popover id="popover-basic">
            <Popover.Body>
                <div className="toppart7">
                    <div className="toppart8" onClick={() => setModalShow2(true)}>
                        <h6>String</h6>
                        <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="toppart8">
                        <h6>Date</h6>
                        <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="toppart8">
                        <h6>List</h6>
                        <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="toppart8">
                        <h6>Yes/ No</h6>
                        <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );



    return (
        <>
            <PasswordInfo
                show={modalShow}
                onHide={() => setModalShow(false)}
                setModalShow1={() => setModalShow1(true)}
            />
            <PasswordInfo1
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <PropertiesModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <div className="toppart">
                <div className="toppart1">
                    <div className="toppart2">
                        <p className={location.pathname === "/general" ? "toppart3" : "toppart4"} onClick={() => navigate("/general")}>General</p>
                        <p className={location.pathname === "/task" ? "toppart3" : "toppart4"} onClick={() => navigate("/task")}>Task</p>
                        <p className={location.pathname === "/calender" ? "toppart3" : "toppart4"} onClick={() => navigate("/calender")}>Calender</p>
                        <p className={location.pathname === "/workreport" ? "toppart3" : "toppart4"} onClick={() => navigate("/workreport")}>Work Report</p>
                        <p className={location.pathname === "/drive" ? "toppart3" : "toppart4"} onClick={() => navigate("/drive")}>Drive</p>
                    </div>
                    <div className="toppart5">
                        <button onClick={() => setModalShow(true)}>Change Password</button>
                    </div>
                </div>
                <OverlayTrigger trigger="click" placement="bottom" overlay={popover1}>
                    <div className="toppart6">
                        <p>Create a field</p>
                    </div>
                </OverlayTrigger>
            </div>
        </>
    )
}

export default TopPart;