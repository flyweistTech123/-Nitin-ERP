import React, { useState } from "react";
import './HOC.css'
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";


const HOC = (WrappedComponent) => {
    const Component = () => {
        const [show, setShow] = useState(true);
        const toggleSidebar = () => {
            setShow(!show);
        };

        return (
            <div className={`container1 ${show ? '' : 'sidebar-hidden'}`}>
                <div className="content">
                    <Navbar show={show} toggleSidebar={toggleSidebar} />
                </div>
                {show && (
                    <div className="sidebar">
                        <Sidebar toggleSidebar={toggleSidebar} />
                        <div className="child-component">
                            <WrappedComponent />
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return Component;
};

export default HOC;
