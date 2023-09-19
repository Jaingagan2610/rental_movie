import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="logo mb-4 md:mb-0">
          <Link href="/">
            <img
              src="https://logowik.com/content/uploads/images/imdb-internet-movie-database5351.jpg"
              alt="IMDb Logo"
              className="h-14"
            />
          </Link>
        </div>
        <nav className="navigation md:ml-6 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-base md:text-lg">
          <Link href="/chart/top">
            <span className="hover:text-gray-300 cursor-pointer">Top 250</span>
          </Link>
          <Link href="/chart/moviemeter">
            <span className="hover:text-gray-300 cursor-pointer">Top Movies</span>
          </Link>
          <Link href="/chart/tv">
            <span className="hover:text-gray-300 cursor-pointer">Top TV Shows</span>
          </Link>
          <Link href="/chart/boxoffice">
            <span className="hover:text-gray-300 cursor-pointer">Box Office</span>
          </Link>
          <Link href="/chart/comingsoon">
            <span className="hover:text-gray-300 cursor-pointer">Coming Soon</span>
          </Link>
        </nav>
        <div className="flex items-center mt-4 md:mt-0">
          <div className="search-bar mr-2">
            <input
              type="text"
              placeholder="Search IMDb"
              className="bg-gray-800 text-white px-2 py-1 rounded-md outline-none text-sm md:text-base"
            />
          </div>
          <button className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 text-sm md:text-base">
            Search
          </button>
          <div className="user-actions ml-2">
            <Link href="/signin">
              <img
                src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                alt="IMDb Logo"
                className="h-8 md:h-12"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
