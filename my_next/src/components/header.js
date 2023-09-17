import Link from 'next/link';

const Header = () => {
  return (
    <>
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Link href="/">
            <img src="https://logowik.com/content/uploads/images/imdb-internet-movie-database5351.jpg" alt="IMDb Logo" className="h-12" />
          </Link>
        </div>
        <nav className="navigation">
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link href="/chart/top">
                <span className="hover:text-gray-300 cursor-pointer">Top 250</span>
              </Link>
            </li>
            <li>
              <Link href="/chart/moviemeter">
                <span className="hover:text-gray-300 cursor-pointer">Top Movies</span>
              </Link>
            </li>
            <li>
              <Link href="/chart/tv">
                <span className="hover:text-gray-300 cursor-pointer">Top TV Shows</span>
              </Link>
            </li>
            <li>
              <Link href="/chart/boxoffice">
                <span className="hover:text-gray-300 cursor-pointer">Box Office</span>
              </Link>
            </li>
            <li>
              <Link href="/chart/comingsoon">
                <span className="hover:text-gray-300 cursor-pointer">Coming Soon</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="search-bar flex items-center">
          <input
            type="text"
            placeholder="Search IMDb"
            className="bg-gray-800 text-white px-4 py-2 rounded-md outline-none"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-600">
            Search
          </button>
        </div>
        <div className="user-actions">
          <Link href="/signin">
          <img src="https://previews.123rf.com/images/azvector/azvector1803/azvector180300411/97269455-login-icon-authorize-icon-log-in-sign-login-icon-open-account-symbol-register-new-user-vector-icon.jpg" alt="IMDb Logo" className="h-12" />
          </Link>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
