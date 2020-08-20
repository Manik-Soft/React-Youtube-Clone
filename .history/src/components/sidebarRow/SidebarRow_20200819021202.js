import React from 'react';
import "./SidebarRow.css"

const SidebarRow = ({Icon,title, toggle}) => {

    const myClass={
        backgroundolor:"red"
    }
    return (
        <div style ={{backgroundColor:"red"}}>
            <Icon className="sidebarRowIcon"/>
            <h2 className="sidebarRowTitle">{title}</h2> 
        </div>
    );
};

export default SidebarRow;