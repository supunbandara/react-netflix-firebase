import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";

const SimilarRow = ({ id }) => {
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=f5baf8c74c7d5f00a242c165979d0913`
      )
      .then((res) => {
        setSimilar(res.data.results);
      });
  }, [id]);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">Similar</h2>
      <div className="relative flex items-center group">
        <HiChevronLeft
          onClick={slideLeft}
          className="text-white absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {similar?.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <HiChevronRight
          onClick={slideRight}
          className="text-white absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          size={40}
        />
      </div>
    </>
  );
};

export default SimilarRow;
