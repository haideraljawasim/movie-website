import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTrailer } from "../../services/movieapi";

function Movie({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");

  const { data: key } = useQuery({
    queryKey: ["trailer", movie.id],
    queryFn: () => fetchTrailer(movie.id),
    enabled: !!movie.id,
  });

  function handleTrailer() {
    setTrailerKey(key);
    setShowModal(true);
  }

  return (
    <div className="relative w-full">
      <img
        className="w-full transition-transform duration-300 object-cover "
        src={`https://www.themoviedb.org/t/p/w1280/${movie.backdrop_path}`}
        alt={movie.title}
      />

      <div className="absolute  inset-0   flex flex-col justify-between bg-black/40  p-10">
        <div className="flex flex-col gap-10">
          <span className="text-4xl font-black text-white font-robot flex items-center gap-4">
            {movie.title}

            <span className="text-white font-light text-lg p-2  px-5 rounded-full w-[4rem] bg-red-700 flex items-center justify-center ">
              {Math.round((movie.vote_average + Number.EPSILON) * 100) / 100}{" "}
            </span>
          </span>

          <p className="text-gray-200 w-[30rem] text-xl font-robot font-light">
            {movie.overview}
          </p>
        </div>

        <button
          className="bg-gray-300/45 p-4  px-8 text-lxl text-white font-bold rounded-2xl self-start font-mono absolute bottom-20"
          onClick={handleTrailer}
        >
          Play
        </button>
      </div>
    </div>
  );
}

export default Movie;
