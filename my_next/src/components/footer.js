import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="col-span-1">
            <h4 className="text-xl font-semibold mb-4">IMDb</h4>
            <ul>
              <li className="mb-2 hover:underline">
                <a href="#">About Us</a>
              </li>
              <li className="mb-2 hover:underline">
                <a href="#">Contact Us</a>
              </li>
              <li className="mb-2 hover:underline">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="mb-2 hover:underline">
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-xl font-semibold mb-4">Features</h4>
            <ul>
              <li className="mb-2 hover:underline">Top 250</li>
              <li className="mb-2 hover:underline">Top Movies</li>
              <li className="mb-2 hover:underline">Top TV Shows</li>
              <li className="mb-2 hover:underline">Box Office</li>
              <li className="mb-2 hover:underline">Coming Soon</li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-xl font-semibold mb-4">Stay Connected</h4>
            <p className="mb-2">Subscribe to our newsletter for updates.</p>
            <div className="mt-2 flex">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md outline-none w-full"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
