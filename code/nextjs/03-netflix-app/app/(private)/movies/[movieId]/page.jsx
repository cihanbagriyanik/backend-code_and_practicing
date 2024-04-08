import {
  getMovieDetail,
  getMovies,
  getVideoKey,
} from "@/helpers/movieFunctions";
import React from "react";
import VideoSection from "../components/VideoSection";
import { BackspaceIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const MovieDetail = async ({ params }) => {
  const { movieId } = params;
  const movieDetail = await getMovieDetail(movieId);
  const videoKey = await getVideoKey(movieId);
  //   console.log(movieDetail);
  const { title } = movieDetail;
  return (
    <div className="md:container px-10 mx-auto py-5">
      <h1 className="text-center text-white text-3xl">{title} </h1>
      {videoKey && <VideoSection videoKey={videoKey} />}
      <div className="flex items-center mt-3 gap-3">
        <Link
          href={"/movies"}
          className="bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition"
        >
          <BackspaceIcon className="w-4 md:w-7 text-black mr-1" />
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default MovieDetail;

export async function generateMetadata({ params: { movieId } }) {
  const movieDetail = await getMovieDetail(movieId);
  return {
    title: movieDetail.title,
    description: `This is the page of ${movieDetail.title}`,
  };
}

export async function generateStaticParams() {
  const [movies1, movies2, movies3, movies4] = await Promise.all([
    getMovies("now_playing"),
    getMovies("popular"),
    getMovies("top_rated"),
    getMovies("upcoming"),
  ]);
  const movies = [...movies1, ...movies2, ...movies3, ...movies4];
  return movies.map((movie) => ({
    movieId: movie.id.toString(),
  }));
}
