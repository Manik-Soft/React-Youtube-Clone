import React from 'react';
import "./SidebarRow.css"

const SidebarRow = ({icon,title}) => {
    return (
        <div className="sidebarRow">
            <h2>{title}</h2> 
        </div>
    );
};

export default SidebarRow;