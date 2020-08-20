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
          views="1.2M Views"
          timestamp="4 days ago"
          channel="Mix Freak"
          channelImage="https://yt3.ggpht.com/a-/AOh14GgyfACBBzitnxGV7XctNtsicCy00smkdbEa7Q=s68-c-k-c0x00ffffff-no-rj-mo"
        />
        <VideoCard
          image="https://e1.365dm.com/20/07/1600x900/skysports-david-silva-man-city_5051061.jpg"
          title="DAVID SILVA'S FINAL PREMIER LEAGUE GAME | IN FOCUS"
          views="19K Views"
          timestamp="1 days ago"
          channel="Man City"
          channelImage="https://yt3.ggpht.com/a-/AOh14GihsJwMjgAWELfVPmVppYgFof_rAvjB1Qk2DA=s68-c-k-c0x00ffffff-no-rj-mo"
        />
        <VideoCard
          image="https://i.ytimg.com/vi/5qap5aO4i9A/hq720_live.jpg?sqp=CIDO9PkF-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAf2k2KHKpkgIDhGXmSIXqAy1Krag"
          title="Hiphop Radio - Beast to Relax"
          views="192K Views"
          timestamp="3 days ago"
          channel="Chilled"
          channelImage="https://yt3.ggpht.com/a-/AOh14Gj1ME7zG6pJG6689WU13fYHmafnUGK7IMeWIg=s68-c-k-c0x00ffffff-no-rj-mo"
        />
        <VideoCard
          image="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1476291312%2Fdark-chocolate-seaweed-ice-cream-cl.jpg%3Fitok%3DqrWtx6WR"
          title="Chocolate Ice Cream 3"
          views="24K Views"
          timestamp="2 days ago"
          channel="RecipeKing"
          channelImage="https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1186_1_1436970676.jpg?tr=w-800,h-1066"
        />
        <VideoCard
          image="https://code.visualstudio.com/assets/docs/languages/javascript/overview.png"
          title="How to use Visual Code"
          views="1K Views"
          timestamp="1 days ago"
          channel="Jsmaster"
          channelImage="data:image/jpeg;base64,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"
        />
        <VideoCard
          image=""
          title="DAVID SILVA'S FINAL PREMIER LEAGUE GAME | IN FOCUS"
          views="19K Views"
          timestamp="1 days ago"
          channel="Man City"
          channelImage=""
        />
        <VideoCard
          image=""
          title="DAVID SILVA'S FINAL PREMIER LEAGUE GAME | IN FOCUS"
          views="19K Views"
          timestamp="1 days ago"
          channel="Man City"
          channelImage=""
        />
        <VideoCard
          image=""
          title="DAVID SILVA'S FINAL PREMIER LEAGUE GAME | IN FOCUS"
          views="19K Views"
          timestamp="1 days ago"
          channel="Man City"
          channelImage=""
        />
      </div>
    </div>
  );
};

export default RecomendedVideos;
