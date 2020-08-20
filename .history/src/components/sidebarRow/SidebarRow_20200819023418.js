import React from 'react';
import "./SidebarRow.css"

const SidebarRow = ({Icon,title, toggle}) => {

    return (
        <div className={toggle ? "sidebarRow" : "sidebarRowMini"}>
            <Icon className="sidebarRowIcon"/>
            <span title="I am hovering over the text">This is the text I want to have a mousover</span>
            <h2 className="sidebarRowTitle">{title}</h2> 
        </div>
    );
};

export default SidebarRow;