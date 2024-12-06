import axios from "axios";

const API_KEY = "cfbbb9de";
const API_URL = "https://www.omdbapi.com/?i=tt3896198";

// Function to search movies by title
export const searchMovies = async (query, page = 1, type = "") => {
  const response = await axios.get(API_URL, {
    params: {
      s: query,
      page: page,
      type: type,
      apikey: API_KEY,
    },
  });
  return response.data;
};

// Function to get detailed movie information by ID 
export const getMovieDetails = async (id) => {
  const response = await axios.get(API_URL, {
    params: {
      i: id,
      apikey: API_KEY,
    },
  });
  return response.data;
};
