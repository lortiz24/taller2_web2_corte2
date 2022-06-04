import React from "react";

const AnimeItem = ({ title, image_url, episodes, url, mal_id }) => {
  return (
    <>
      <div className="card p-1 m-1 ">
        <img src={image_url} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Episodios: {episodes}</p>
        </div>
        <div className="d-flex justify-content-center m-1">
          <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer" >Ver mas</a>
        </div>
      </div>

    </>

  );
};

export default AnimeItem;
