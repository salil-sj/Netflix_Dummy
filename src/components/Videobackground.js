import React, { useEffect } from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";


const Videobackground = ({ movieId }) => {

    
  const trailerVideo = useSelector((store)=> store.movies?.trailerVideo)  
 useMovieTrailer(movieId);


  return (
    <div className="">
      <iframe
      className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=0&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Videobackground;
