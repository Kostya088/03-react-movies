import axios from "axios";
import type { Movie } from "../types/movie";

const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

interface apiResponse {
  results: Movie[];
}

export const movieApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/movie",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_TOKEN}`,
  },
});

export async function fetchMovies(query: string): Promise<Movie[]> {
  try {
    const { data } = await movieApi.get<apiResponse>("", {
      params: { query },
    });
    return data.results;
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    throw error;
  }
}
