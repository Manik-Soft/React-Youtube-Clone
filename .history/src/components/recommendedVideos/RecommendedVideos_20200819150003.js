import React from 'react';
import "./RecommendedVideos.css"

const RecomendedVideos = ({toggle}) => {
    return (
        <div className={toggle ? "recomendedVideosBig" : "recomendedVideos"}>
            <h2>Recommended</h2>
            <div className="recommendedVideos"></div>
        </div>
    );
};

export default RecomendedVideos;