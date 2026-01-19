// src/pages/Search.tsx
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../lib/api';

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  overview: string;
}

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    if (query) {
      searchMovies(query);
    }
  }, [query]);

  const searchMovies = async (searchQuery: string) => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError('');

    try {
      const response = await api.get('/search/movie', {
        params: {
          query: searchQuery,
          page: 1,
        }
      });
      
      setMovies(response.data.results || []);
    } catch (err) {
      console.error('Error searching movies:', err);
      setError('Failed to search movies. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Search Results
          </h1>
          {query && (
            <p className="text-gray-400 text-lg">
              Showing results for "{query}"
            </p>
          )}
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-[var(--color-primary-300)]/30 border-t-[var(--color-primary-300)] rounded-full animate-spin"></div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 text-red-400 text-center">
            {error}
          </div>
        )}

        {/* Results */}
        {!loading && !error && movies.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg mb-3 aspect-[2/3]">
                  {movie.poster_path ? (
                    <img
                      src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                      alt={movie.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">No Image</span>
                    </div>
                  )}
                  
                  {/* Rating Badge */}
                  {movie.vote_average > 0 && (
                    <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                      <span className="text-yellow-400 text-xs">⭐</span>
                      <span className="text-white text-xs font-semibold">
                        {movie.vote_average.toFixed(1)}
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-white font-medium text-sm md:text-base line-clamp-2 mb-1 group-hover:text-[var(--color-primary-300)] transition-colors">
                    {movie.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm">
                    {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {!loading && !error && movies.length === 0 && query && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🎬</div>
            <h2 className="text-2xl text-white mb-2">No movies found</h2>
            <p className="text-gray-400">
              Try searching with different keywords
            </p>
          </div>
        )}

        {/* Initial State */}
        {!query && !loading && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl text-white mb-2">Start searching</h2>
            <p className="text-gray-400">
              Use the search bar above to find movies
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
