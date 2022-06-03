import React from "react";

const AnimeItem = ({ title, synopsis, image_url, episodes, url, mal_id }) => {
  return <div>
   
    <img src={image_url} alt="" />
    
  </div>;
};

export default AnimeItem;
