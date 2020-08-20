import React from 'react';
import "./RecomendedVideos.css"

const RecomendedVideos = ({toggle}) => {
    return (
        <div className={toggle ? "recomendedVideosBig" : "recomendedVideos"}>
            <h2>Recommended</h2>
        </div>
    );
};

export default RecomendedVideos;