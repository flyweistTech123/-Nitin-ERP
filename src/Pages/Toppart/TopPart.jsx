import React from "react";
import './TopPart.css'
import { useNavigate, useLocation } from "react-router-dom";


const TopPart = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <div className="toppart">
                <div className="toppart1">
                    <div className="toppart2">
                        <p className={location.pathname === "/general" ? "toppart3" : "toppart4"} onClick={() => navigate("/general")}>General</p>
                        <p className={location.pathname === "/task" ? "toppart3" : "toppart4"} onClick={() => navigate("/task")}>Task</p>
                        <p className={location.pathname === "/calender" ? "toppart3" : "toppart4"} onClick={() => navigate("/Calender")}>Calender</p>
                        <p className={location.pathname === "/workreport" ? "toppart3" : "toppart4"} onClick={() => navigate("/workreport")}>Work Report</p>
                        <p className={location.pathname === "/drive" ? "toppart3" : "toppart4"} onClick={() => navigate("/drive")}>Drive</p>
                    </div>
                    <div className="toppart5">
                        <button>Change Password</button>
                    </div>
                </div>
                <div className="toppart6">
                    <p>Create a field</p>
                </div>
            </div>
        </>
    )
}

export default TopPart;