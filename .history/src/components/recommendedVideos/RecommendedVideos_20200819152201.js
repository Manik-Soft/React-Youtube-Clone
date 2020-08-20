import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "../videocard/VideoCard";

const RecomendedVideos = ({ toggle }) => {
  return (
    <div className={toggle ? "recomendedVideosBig" : "recomendedVideos"}>
      <h2>Recommended</h2>
      <div className="recommendedVideos">
        <VideoCard
          image="https://i.ytimg.com/vi/wmvIKo3EC84/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAoL_yVbgn7uiwoxxO6yfmXYCSFNA"
          title="Best of Chill Nation 2021 Mix"
          views="1.2M Vievs"
          timestamp="4 days ago"
          channel="Mix Freak"
          channelImage="https://yt3.ggpht.com/a-/AOh14GgyfACBBzitnxGV7XctNtsicCy00smkdbEa7Q=s68-c-k-c0x00ffffff-no-rj-mo"
        />
        <VideoCard
          image="https://i.ytimg.com/an_webp/SgbLuzOMeVo/mqdefault_6s.webp?du=3000&sqp=CNS89PkF&rs=AOn4CLBPT2wKTNDKuPhyTVmgvIjPd-bClw"
          title="DAVID SILVA'S FINAL PREMIER LEAGUE GAME | IN FOCUS"
          views="19K Vievs"
          timestamp="1 days ago"
          channel="Man City"
          channelImage="https://yt3.ggpht.com/a-/AOh14GihsJwMjgAWELfVPmVppYgFof_rAvjB1Qk2DA=s68-c-k-c0x00ffffff-no-rj-mo"
        />
      </div>
    </div>
  );
};

export default RecomendedVideos;
