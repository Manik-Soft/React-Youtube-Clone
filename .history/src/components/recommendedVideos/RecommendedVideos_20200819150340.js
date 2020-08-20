import React from 'react';
import "./RecommendedVideos.css"
import VideoCard from "../videocard/VideoCard"

const RecomendedVideos = ({toggle}) => {
    return (
        <div className={toggle ? "recomendedVideosBig" : "recomendedVideos"}>
            <h2>Recommended</h2>
            <div className="recommendedVideos">
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
            </div>
        </div>
    );
};

export default RecomendedVideos;