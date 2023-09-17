import Link from "next/link";
import React, { useState, useEffect } from "react";

const Body = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items to display per page

  useEffect(() => {
    fetch("http://localhost:5000/Movie")
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Calculate the start and end index for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the movies to display on the current page
  const moviesOnCurrentPage = userData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(userData.length / itemsPerPage);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
    <div>
  <img
    src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/icc-cwc-banner-collection-202308220156.png"
    alt="Description of the image"
  />
</div>

      <div className="p-4 ">
        {moviesOnCurrentPage.length > 0 ? (
          moviesOnCurrentPage.map((curElem) => (
            <div
              key={curElem.id}
              className="mt-4 border rounded-lg p-4 bg-white shadow-md flex items-center"
            >
              <div>
                <img
                  src={curElem.image}
                  alt={`Image for ${curElem.name}`}
                  className="w-30 max-h-30 " // Adjust max-width here
                />
              </div>
              <div className="w-2/3 ml-4">
                <h3 className="text-lg font-semibold">Name: {curElem.name}</h3>
                <h2 className="text-blue-600">Year: {curElem.year}</h2>
                <p className="text-gray-700">Duration: {curElem.duration}</p>
                <p className="text-gray-700">Rating: {curElem.rating}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="mt-4">No data available.</p>
        )}
      </div>
      <div className="flex justify-center space-x-4 mt-4">
      <div className="flex justify-center space-x-4 mt-4">
  <button
    className={`${
      currentPage === 1 ? "hidden" : "block"
    } sm:block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none transition-all ease-in-out duration-300 transform hover:scale-105`}
    onClick={goToPrevPage}
    disabled={currentPage === 1}
  >
    Previous
  </button>
  <div className="flex space-x-2">
    {Array.from({ length: totalPages }, (_, index) => (
      <span
        key={index}
        className={`${
          currentPage === index + 1
            ? "bg-blue-500 text-white py-2 px-4 rounded cursor-pointer focus:outline-none transition-all ease-in-out duration-300 transform hover:scale-105"
            : "bg-gray-200 text-gray-700 py-2 px-4 rounded cursor-pointer hover:bg-gray-300 focus:bg-gray-300 focus:text-blue-500 transition-all ease-in-out duration-300 transform hover:scale-105"
        }`}
        onClick={() => goToPage(index + 1)}
      >
        {index + 1}
      </span>
    ))}
  </div>
  <button
    className={`${
      currentPage === totalPages ? "hidden" : "block"
    } sm:block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none transition-all ease-in-out duration-300 transform hover:scale-105`}
    onClick={goToNextPage}
    disabled={currentPage === totalPages}
  >
    Next
  </button>
</div>

      </div>
    </>
  );
};

export default Body;
