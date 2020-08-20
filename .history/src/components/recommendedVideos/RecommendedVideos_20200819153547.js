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
          channelImage="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/360px-Unofficial_JavaScript_logo_2.svg.png"
        />
        <VideoCard
          image="https://pbs.twimg.com/media/EQg3F1QU4AA6Oh3.jpg"
          title="Stop making mass shooters famous | Tom Teves"
          views="1M Views"
          timestamp="1 months ago"
          channel="TedX"
          channelImage="https://yt3.ggpht.com/a/AATXAJw2ICEn32RruCk2qe8a8n410FZ9vWtmYmWHzzJvqQ=s176-c-k-c0x00ffffff-no-rj-mo"
        />
        <VideoCard
          image=""
          title="Battle of Winterfell Begins"
          views="401K Views"
          timestamp="7 months ago"
          channel="GameOfThrones"
          channelImage="https://yt3.ggpht.com/a/AATXAJxYrZ2u651Vw9uG9hy_lq3kXUiMjqcNOfpod6Gy9w=s176-c-k-c0x00ffffff-no-rj-mo"
        />
        <VideoCard
          image="https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0001/40/thumb_39609_default_news_size_5.jpeg"
          title="94 year-old fan gets surprise visit from LFC legend"
          views="839K Views"
          timestamp="3 years ago"
          channel="Liverpool FC"
          channelImage="https://yt3.ggpht.com/a-/AOh14GjK9AD1CuyUvOaoUI5VA47aw1bPVGEq2HQKQg=s68-c-k-c0x00ffffff-no-rj-mo"
        />
      </div>
    </div>
  );
};

export default RecomendedVideos;
