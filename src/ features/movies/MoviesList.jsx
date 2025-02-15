import React from "react";
import Movie from "./Movie";
import { getMovies } from "../../services/movieapi";
import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MoviesList() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getmovies"],
    queryFn: getMovies,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in",
    customPaging: function (i) {
      return (
        <div className="w-20 h-14 mx-1">
          <img
            src={`https://www.themoviedb.org/t/p/w200/${data?.results[i]?.backdrop_path}`}
            alt={`Thumbnail ${i}`}
            className="w-full h-full object-cover rounded-md border-2 border-transparent hover:border-white cursor-pointer transition-all"
          />
        </div>
      );
    },
    // appendDots: (dots) => (
    //   <div className="absolute bottom-4 w-full flex justify-center">
    //     <ul className="flex gap-2 overflow-x-auto max-w-[80%] px-2">{dots}</ul>
    //   </div>
    // ),
  };

  return (
    <div className=" h-[800px] w-full ">
      <Slider {...settings}>
        {data?.results?.map((movie) => (
          <div key={movie.id}>
            <Movie movie={movie} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MoviesList;
