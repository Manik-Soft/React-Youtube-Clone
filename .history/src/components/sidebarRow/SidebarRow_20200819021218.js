import React from 'react';
import "./SidebarRow.css"

const SidebarRow = ({Icon,title, toggle}) => {

    const myClass={
        backgrouncolor:"red"
    }
    return (
        <div style ={myClass}>
            <Icon className="sidebarRowIcon"/>
            <h2 className="sidebarRowTitle">{title}</h2> 
        </div>
    );
};

export default SidebarRow;