import React from 'react';
import "./SidebarRow.css"

const SidebarRow = ({Icon,title}) => {
    return (
        <div className="sidebarRow">
            <Icon className="sidebarRowIcon"/>
            <h2 className="sidebarRowTitle">{title}</h2> 
        </div>
    );
};

export default SidebarRow;