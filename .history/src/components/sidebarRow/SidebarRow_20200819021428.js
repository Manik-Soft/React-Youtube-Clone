import React from 'react';
import "./SidebarRow.css"

const SidebarRow = ({Icon,title, toggle}) => {

    const sidebarRowStyle={
        backgroundColor:"red"
    }

    const sidebarRowMiniStyle={
        backgroundColor:"blue"
    }

    return (
        <div style ={toggle ? {sidebarRowStyle} : {sidebarRowMiniStyle}}>
            <Icon className="sidebarRowIcon"/>
            <h2 className="sidebarRowTitle">{title}</h2> 
        </div>
    );
};

export default SidebarRow;