import React from 'react';
import "./SidebarRow.css"

const SidebarRow = ({Icon,title, toggle, selected}) => {

    return (
        <div className={toggle ? "sidebarRowMini" : "sidebarRow"} title={toggle ? title : ""}>
            <Icon className={`sidebarRowIcon ${selected && 'selected'}`}/>
            <h2 className="sidebarRowTitle">{title}</h2> 
        </div>
    );
};

export default SidebarRow;