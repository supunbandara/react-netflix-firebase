import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const VideoList = ({ id }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=f5baf8c74c7d5f00a242c165979d0913`
      )
      .then((res) => {
        setVideos(res.data.results);
      });
  }, [id]);

  const video = videos.find((obj) => {
    return obj.type === "Trailer";
  });

  //   console.log(video);

  return <>{video && <Video key={video.id} item={video} />}</>;
};

const Video = ({ item }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
    iframeRef.current.setAttribute("height", height);
  }, []);

  return (
    <div className="grid place-items-center min-h-0">
      <div className="p-4 grid gap-4 xs:p-8 grid-cols-1 lg:gap-6 container">
        <h2 className="text-white font-bold md:text-xl p-4">{item.name}</h2>

        <iframe
          src={`https://www.youtube.com/embed/${item.key}`}
          ref={iframeRef}
          width="100%"
          title="video"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoList;
