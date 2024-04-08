import { getMovies } from "@/helpers/movieFunctions";
import React from "react";
import HeroSection from "./components/HeroSection";
import MovieSection from "./components/MovieSection";

const Movies = async () => {
  const movies = await getMovies("now_playing");
  //   console.log(movies);
  return (
    <div>
      <HeroSection
        title={movies[0]?.title}
        overview={movies[0]?.overview}
        id={movies[0]?.id}
      />
      <div>
        <MovieSection type={"now_playing"} title={"NOW PLAYING"} />
        <MovieSection type={"popular"} title={"POPULAR"} />
        <MovieSection type={"top_rated"} title={"TOP RATED"} />
        <MovieSection type={"upcoming"} title={"UPCOMING"} />
      </div>
    </div>
  );
};

export default Movies;
