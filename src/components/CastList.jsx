import React, { useEffect, useState } from "react";
import axios from "axios";

const CastList = ({ id }) => {
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=f5baf8c74c7d5f00a242c165979d0913`
      )
      .then((res) => {
        setCasts(res.data.cast.slice(0, 5));
      });
  }, [id]);

  //   console.log(casts);

  return (
    <>
      <h4 className="mt-[30px] md:text-2xl mb-3 text-lg font-bold text-center md:text-center lg:text-start">
        Casts
      </h4>
      <div className="grid grid-cols-2 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-5 gap-2">
        {casts.map((item) => (
          <div key={item?.id}>
            <img
              className="w-full h-44 xl:h-40 lg:h-30 md:h-[8em] object-cover gap-2"
              src={`https://image.tmdb.org/t/p/original/${item?.profile_path}`}
              alt={item?.character}
            />
            <p className="text-xs 2xl:text-sm md:text-[13px]">
              {item?.character}
            </p>
            <p className="text-gray-400 text-xs 2xl:text-sm md:text-xs">
              {item?.original_name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CastList;
