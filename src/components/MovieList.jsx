import React from "react";

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {movies.map((movie) => (
        <div key={movie.cfbbb9de} className="p-4 border rounded shadow-lg">
          <img
            className="w-full h-48 object-cover"
            src={movie.Poster}
            alt={movie.Title}
          />
          <h2 className="text-xl font-bold">{movie.Title}</h2>
          <p className="text-lg">{movie.Year}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
