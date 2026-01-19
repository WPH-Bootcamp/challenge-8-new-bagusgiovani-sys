import { api } from "../lib/api.ts";

/** Trending movies (Home - Trending section) */
export const getTrendingMovies = async () => {
  const res = await api.get("/trending/movie/day");
  return res.data.results;
};

/** Latest / Now Playing movies (Home - Latest section) */
export const getLatestMovies = async () => {
  const res = await api.get("/movie/now_playing");
  return res.data.results;
};

/** Search movies (Search page) */
export const searchMovies = async (query: string) => {
  const res = await api.get("/search/movie", {
    params: { query },
  });
  return res.data.results;
};

export const getMovieDetail = async (id: string) => {
  const res = await api.get(`/movie/${id}`);
  return res.data;
};

export const getMovieCredits = async (id: string) => {
  const res = await api.get(`/movie/${id}/credits`);
  return res.data.cast;
};

export const getMovieVideos = async (id: string) => {
  const res = await api.get(`/movie/${id}/videos`);
  return res.data;
}