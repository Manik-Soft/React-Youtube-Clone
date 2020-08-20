import React from 'react';
import "./RecomendedVideos.css"

const RecomendedVideos = ({toggle}) => {
    return (
        <div className={toggle ? "recomendedVideosBig" : "recomendedVideosBig"}>
            <h1>Recomended videos🚀 </h1>
        </div>
    );
};

export default RecomendedVideos;