import React, { useEffect, useState } from 'react';
import "./VideoPage.css"
import { useLocation } from 'react-router-dom';
import Axios from 'axios';

const VideoPage = () => {

    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const KEY = process.env.REACT_APP_FIREBASE_API_KEY;
    const [videoInfo, setVideiInfo] = useState({})

    useEffect(()=>{
        Axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${KEY}`).then(res=>console.log(res.data))
    },[])

    return (
        <div className="videoPage">
            videopagee
        </div>
    );
};

export default VideoPage;