import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Rating from "@mui/material/Rating";
import CastList from "./CastList";
import VideoList from "./VideoList";

import SimilarRow from "./SimilarRow";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=f5baf8c74c7d5f00a242c165979d0913`
      )
      .then((res) => {
        setMovie(res.data);
      });
  }, [id]);

  //   console.log(movie);

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-t from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>

      <div className="grid place-items-center min-h-0">
        <div className="p-4 grid gap-4 xs:p-8 lg:grid-cols-5 md:grid-cols-1 sm:grid-cols-1 lg:gap-6 container">
          <div className="lg:col-span-2 md:col-span-2 xl:pr-8 inline-block">
            <div className="flex justify-center lg:justify-end md:justify-center md:items-center">
              <img
                className="md:w-[75%] lg:w-full xl:w-full 2xl:w-[75%] h-auto block rounded-lg mb-3"
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                alt={movie?.title}
              />
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-3">
            <h2 className="text-center text-white font-bold text-2xl md:text-center sm:text-left lg:text-left xl:text-4xl lg:text-3xl md:text-2xl mb-6">
              {movie?.title}
            </h2>
            <h4 className="text-center text-white text-2xl md:text-2xl md:text-center lg:text-left mb-6">
              {movie?.tagline}
            </h4>
            <div className="flex justify-center lg:justify-start md:justify-center">
              {movie?.genres.map((genre) => (
                <div
                  key={genre.id}
                  className="flex-initial md:w-28 w-28 border-2 justify-center p-1 mr-3 rounded-full"
                >
                  <div className="text-center md:text-[14px]">{genre.name}</div>
                </div>
              ))}
            </div>
            <div className="mt-[40px]">
              <h4 className="text-center font-bold md:text-xl md:text-center lg:text-start mb-3">
                Overview
              </h4>
              <p className="text-center md:text-md md:text-center lg:text-start">
                {movie?.overview}
              </p>
            </div>
            <div>
              <CastList id={movie?.id} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <VideoList id={movie?.id} />
      </div>

      <SimilarRow id={id} />
    </div>
  );
};

export default MovieDetail;
