import React, { useState } from "react";
import './HOC.css'
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";


const HOC = (WrappedComponent) => {
    const Component = () => {

        return (
            <div className='container1'>
                <div className="hocnavbar">
                    <Navbar />
                </div>

                <div className="hoccontainer">
                    <div className="hocsidebar">
                        <Sidebar/>
                    </div>
                    <div className="child-component">
                        <WrappedComponent />
                    </div>
                </div>
            </div>
        );
    };

    return Component;
};

export default HOC;
