import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";
import MovieDetails from "./components/MovieDetails";
import { searchMovies  } from "./components/apiService";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState("");

  const handleSearch = async (query) => {
    setQuery(query);
    const data = await searchMovies(query);
    setMovies(data.Search);
    setTotalPages(Math.ceil(data.totalResults / 10)); // OMDB API returns 10 results per page
  };

  const handlePageChange = async (page) => {
    setCurrentPage(page);
    const data = await searchMovies(query, page);
    setMovies(data.Search);
  };

  return (

      <div className="container mx-auto p-4">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar onSearch={handleSearch} />
                <MovieList movies={movies} />
                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
  );
};

export default App;
