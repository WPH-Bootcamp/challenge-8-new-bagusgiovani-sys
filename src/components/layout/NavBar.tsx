import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuIcon, CloseIcon, SearchIcon } from "../ui/icons";
import Logo from "../../assets/Logo.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setOpen(false);
    }
  };

  const handleSearchClick = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full font-extralight backdrop-blur-2xl">
      <div className="layout-gutter flex h-10 items-center mt-2 md:mb-8 md:mt-8 text-[var(--font-size-xl)]">

        {/* LEFT */}
        <div className="flex items-center md:gap-20">

          {/* Logo */}
          <img
            src={Logo}
            alt="Movie Logo"
            className="h-6 w-auto sm:h-8 md:h-12 cursor-pointer"
            onClick={() => navigate("/")}
          />

          {/* Nav Menu (Desktop) */}
          <nav className="hidden md:flex gap-12 md:text-xl">

            {/* HOME */}
            <a
              href="/"
              className="
                group relative inline-block
                text-gray-300
                transition-all duration-300
                hover:text-white
              "
            >
              <span className="relative z-10 block transition-transform duration-300 group-hover:-translate-y-[1px]">
                Home
              </span>
              <span
                className="
                  absolute -bottom-1 left-0
                  h-[1.5px] w-full
                  origin-left scale-x-0
                  bg-[var(--color-primary-300)]
                  transition-transform duration-300
                  group-hover:scale-x-100
                "
              />
            </a>

            {/* FAVORITES */}
            <a
              href="/favorites"
              className="
                group relative inline-block
                text-gray-300
                transition-all duration-300
                hover:text-white
              "
            >
              <span className="relative z-10 block transition-transform duration-300 group-hover:-translate-y-[1px]">
                Favorites
              </span>
              <span
                className="
                  absolute -bottom-1 left-0
                  h-[1.5px] w-full
                  origin-left scale-x-0
                  bg-[var(--color-primary-300)]
                  transition-transform duration-300
                  group-hover:scale-x-100
                "
              />
            </a>

          </nav>
        </div>

        {/* RIGHT */}
        <div className="ml-auto flex items-center gap-4">

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
            <button onClick={handleSearchClick}>
              <SearchIcon className="h-[1em] w-[1em] text-white/70 hover:text-white transition-colors" />
            </button>
            <input
              type="text"
              placeholder="Search Movie"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              className="w-40 bg-transparent text-white outline-none placeholder:text-white/40"
            />
          </div>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white"
            aria-label="Open menu"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden">
          <div className="layout-gutter pb-6">

            <div className="flex justify-end">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-white"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>

            <nav className="mt-4 flex flex-col gap-4 text-white text-[var(--font-size-xl)]">
              <a href="/">Home</a>
              <a href="/favorites">Favorites</a>

              {/* Mobile Search */}
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 mt-2">
                <SearchIcon className="h-[1em] w-[1em] text-white/70" />
                <input
                  type="text"
                  placeholder="Search Movie"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearch}
                  className="w-full bg-transparent text-white outline-none placeholder:text-white/40"
                />
              </div>
            </nav>

          </div>
        </div>
      )}
    </header>
  );
}
