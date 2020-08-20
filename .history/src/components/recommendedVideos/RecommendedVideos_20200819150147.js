import React from 'react';
import "./RecommendedVideos.css"
import Video from "../video/Video"

const RecomendedVideos = ({toggle}) => {
    return (
        <div className={toggle ? "recomendedVideosBig" : "recomendedVideos"}>
            <h2>Recommended</h2>
            <div className="recommendedVideos">
                <Video/>
                <Video/>
                <Video/>
                <Video/>
                <Video/>
                <Video/>
                <Video/>
                <Video/>
                <Video/>
                <Video/>
                <Video/>
            </div>
        </div>
    );
};

export default RecomendedVideos;