import React, { useState } from 'react';

interface CastMember {
  id: number;
  name: string;
  character: string;
  image: string;
}

const MovieDetailPage: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock data - replace with API data
  const movie = {
    title: "Captain America: Brave New World",
    releaseDate: "12 Februari 2025",
    rating: 6.2,
    genre: "Action",
    ageLimit: "13",
    poster: "/api/placeholder/300/450",
    backdrop: "/api/placeholder/1200/600",
    overview: "After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.",
    cast: [
      { id: 1, name: "Anthony Mackie", character: "Sam Wilson / Captain America", image: "/api/placeholder/80/80" },
      { id: 2, name: "Harrison Ford", character: "President Thaddeus Ross", image: "/api/placeholder/80/80" },
      { id: 3, name: "Danny Ramirez", character: "Joaquin Torres", image: "/api/placeholder/80/80" },
      { id: 4, name: "Shira Haas", character: "Ruth Bat-Seraph", image: "/api/placeholder/80/80" },
      { id: 5, name: "Tim Blake Nelson", character: "Samuel Sterns", image: "/api/placeholder/80/80" },
    ]
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // TODO: Add to favorites API call
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Hero with Red Hulk backdrop */}
        <div className="relative h-80">
          <img
            src={movie.backdrop}
            alt="Movie backdrop"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
        </div>

        {/* Movie Info Section */}
        <div className="px-4 -mt-24 relative z-10">
          {/* Poster and Title */}
          <div className="flex gap-4 mb-4">
            <div className="flex-shrink-0">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-28 h-40 rounded-lg object-cover shadow-2xl"
              />
            </div>
            <div className="flex-1 flex flex-col justify-end pb-1">
              <h1 className="text-xl font-bold mb-1 leading-tight">{movie.title}</h1>
              <div className="flex items-center gap-1.5 text-sm text-zinc-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{movie.releaseDate}</span>
              </div>
            </div>
          </div>

          {/* Watch Trailer & Favorite Button */}
          <div className="flex gap-3 mb-5">
            <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors">
              <span>Watch Trailer</span>
              <svg className="w-4 h-4 fill-white" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
            <button
              onClick={toggleFavorite}
              className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                isFavorite
                  ? 'bg-red-600'
                  : 'bg-transparent border-2 border-zinc-800'
              }`}
            >
              <svg className={`w-6 h-6 ${isFavorite ? 'fill-white' : 'fill-none'}`} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>

          {/* Rating, Genre, Age Limit Cards */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-zinc-950 rounded-xl p-3 text-center border border-zinc-900">
              <svg className="w-7 h-7 text-yellow-500 mx-auto mb-2 fill-yellow-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <div className="text-xs text-zinc-500 mb-0.5">Rating</div>
              <div className="text-lg font-semibold">{movie.rating}/10</div>
            </div>
            <div className="bg-zinc-950 rounded-xl p-3 text-center border border-zinc-900">
              <svg className="w-7 h-7 text-white mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" />
              </svg>
              <div className="text-xs text-zinc-500 mb-0.5">Genre</div>
              <div className="text-lg font-semibold">{movie.genre}</div>
            </div>
            <div className="bg-zinc-950 rounded-xl p-3 text-center border border-zinc-900">
              <div className="w-7 h-7 mx-auto mb-2 rounded bg-zinc-800 flex items-center justify-center">
                <span className="text-sm font-bold">13</span>
              </div>
              <div className="text-xs text-zinc-500 mb-0.5">Age Limit</div>
              <div className="text-lg font-semibold">{movie.ageLimit}</div>
            </div>
          </div>

          {/* Overview */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-3">Overview</h2>
            <p className="text-sm text-zinc-400 leading-relaxed">{movie.overview}</p>
          </div>

          {/* Cast & Crew */}
          <div className="pb-8">
            <h2 className="text-lg font-bold mb-4">Cast & Crew</h2>
            <div className="space-y-3">
              {movie.cast.map((member) => (
                <div key={member.id} className="flex items-center gap-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                  <div>
                    <div className="font-semibold text-sm">{member.name}</div>
                    <div className="text-xs text-zinc-500">{member.character}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        {/* Hero Section with backdrop */}
        <div className="relative h-[500px]">
          <img
            src={movie.backdrop}
            alt="Movie backdrop"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          
          {/* Content overlay */}
          <div className="absolute inset-0 max-w-7xl mx-auto px-8">
            <div className="flex items-end h-full pb-12 gap-8">
              {/* Movie Poster */}
              <div className="flex-shrink-0">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-72 rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Movie Info */}
              <div className="flex-1 pb-4">
                <h1 className="text-5xl font-bold mb-3">{movie.title}</h1>
                <div className="flex items-center gap-2 text-zinc-300 mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-base">{movie.releaseDate}</span>
                </div>
                
                {/* Buttons */}
                <div className="flex gap-4">
                  <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-4 rounded-xl flex items-center gap-3 transition-colors text-base">
                    <span>Watch Trailer</span>
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </button>
                  <button
                    onClick={toggleFavorite}
                    className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all ${
                      isFavorite
                        ? 'bg-red-600'
                        : 'bg-transparent border-2 border-zinc-700 hover:border-zinc-600'
                    }`}
                  >
                    <svg className={`w-7 h-7 ${isFavorite ? 'fill-white' : 'fill-none'}`} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-8 py-12">
          {/* Rating Cards */}
          <div className="flex gap-6 mb-12">
            <div className="bg-zinc-950 rounded-2xl p-6 text-center border border-zinc-900 w-52">
              <svg className="w-10 h-10 text-yellow-500 mx-auto mb-3 fill-yellow-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <div className="text-sm text-zinc-500 mb-1">Rating</div>
              <div className="text-3xl font-semibold">{movie.rating}/10</div>
            </div>
            <div className="bg-zinc-950 rounded-2xl p-6 text-center border border-zinc-900 w-52">
              <svg className="w-10 h-10 text-white mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" />
              </svg>
              <div className="text-sm text-zinc-500 mb-1">Genre</div>
              <div className="text-3xl font-semibold">{movie.genre}</div>
            </div>
            <div className="bg-zinc-950 rounded-2xl p-6 text-center border border-zinc-900 w-52">
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-zinc-800 flex items-center justify-center">
                <span className="text-xl font-bold">13</span>
              </div>
              <div className="text-sm text-zinc-500 mb-1">Age Limit</div>
              <div className="text-3xl font-semibold">{movie.ageLimit}</div>
            </div>
          </div>

          {/* Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-base text-zinc-400 leading-relaxed max-w-4xl">{movie.overview}</p>
          </div>

          {/* Cast & Crew */}
          <div className="pb-12">
            <h2 className="text-2xl font-bold mb-6">Cast & Crew</h2>
            <div className="grid grid-cols-3 gap-6">
              {movie.cast.map((member) => (
                <div key={member.id} className="flex items-center gap-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div>
                    <div className="font-semibold text-base mb-1">{member.name}</div>
                    <div className="text-sm text-zinc-500">{member.character}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;