import React from 'react';
import "./VideoPage.css"
import { useLocation } from 'react-router-dom';

const VideoPage = () => {

    const location = useLocation()
    const id = location.pathname.split("/")[2]

    console.log(id)
    return (
        <div className="videoPage">
            videopagee
        </div>
    );
};

export default VideoPage;