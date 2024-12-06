import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "./apiService";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await getMovieDetails(id);
      setMovie(data);
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto mt-4 p-4 border rounded shadow-lg">
      <div className="flex">
        <img
          className="w-1/3 h-auto object-cover"
          src={movie.Poster}
          alt={movie.Title}
        />
        <div className="ml-4">
          <h2 className="text-2xl font-bold">{movie.Title}</h2>
          <p className="text-lg">Year: {movie.Year}</p>
          <p className="text-lg">Genre: {movie.Genre}</p>
          <p className="text-lg">Plot: {movie.Plot}</p>
          <p className="text-lg">
            Ratings:{" "}
            {movie.Ratings.map((r) => `${r.Source}: ${r.Value}`).join(", ")}
          </p>
          <p className="text-lg">Cast: {movie.Actors}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
