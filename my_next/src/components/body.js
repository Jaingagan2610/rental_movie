import Link from "next/link";
import 'font-awesome/css/font-awesome.min.css';

import React, { useState, useEffect } from "react";

const Body = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Number of items to display per page

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
      <header className="bg-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href="/add_movie" passHref>
            <p className="text-white text-2xl font-bold">Add More Movies </p>
          </Link>
          <Link href="/add_movie" passHref>
            <p className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full">
              Add More Movie
            </p>
          </Link>
        </div>
      </header>

      <div className="container mx-auto">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            className="w-full max-w-screen-xl w-100% h-25"
            src="https://yt3.googleusercontent.com/9I3AQS7BwMF-FeFMQoalBoXlgA6gaK0UneS0SZnPbte_k9K8tKQNoCzlHq253iGuz2QKPPWX5g=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
            alt="Description of the image"
          />
        </div>

        
          <div className="p-4">
            {moviesOnCurrentPage.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {moviesOnCurrentPage.map((curElem) => (
                  
                  <div
                    key={curElem.id}
                    className="border rounded-lg p-4 bg-white shadow-md hover:shadow-black flex flex-col items-center"
                  >

                       {/* <div className="text-center"> */}
                      {/* <Link href={`/blog/${curElem.id}`}> </Link>  */}
                      {/* <h3 className="text-lg font-semibold">Name: {curElem.name}</h3>
                      <h2 className="text-blue-600">Year: {curElem.year}</h2>
                      <p className="text-gray-700">Duration: {curElem.duration}</p>
                      <p className="text-gray-700">
                        <i className="fa fa-star text-yellow-500"></i> Rating: {curElem.rating}
                      </p> */}
                    {/* </div> */}
                    
                    <Link href={`/blog/${curElem.id}`} >
                    <div className="mb-4">
                      <img
                        src={curElem.image}
                        alt={`Image for ${curElem.name}`}
                        className="w-40 max-h-30"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-semibold">Name: {curElem.name}</h3>
                      <h2 className="text-blue-600">Year: {curElem.year}</h2>
                      <p className="text-gray-700">Duration: {curElem.duration}</p>
                      <p className="text-gray-700">
                        <i className="fa fa-star text-yellow-500"></i> Rating: {curElem.rating}
                      </p>
                    </div>
                    </Link>
                   
                  </div>
                  
                ))}
              </div>
            ) : (
              <p className="mt-4 text-center">No data available.</p>
            )}
          </div>
        

        <div className="flex flex-col items-center space-y-4 mt-4 sm:flex-row sm:justify-center sm:space-x-4">
          <button
            className={`${
              currentPage === 1 ? "hidden" : "block"
            } bg-black text-white py-2 px-4 rounded focus:outline-none transition-all ease-in-out duration-300 transform hover:scale-105 sm:bg-blue-500 sm:hover:bg-blue-600`}
            onClick={goToPrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            {Array.from({ length: totalPages }, (_, index) => {
              const isCurrentPage = currentPage === index + 1;
              const isClickable =
                isCurrentPage || Math.abs(currentPage - (index + 1)) <= 2;

              return (
                isClickable && (
                  <span
                    key={index}
                    className={`${
                      isCurrentPage
                        ? "bg-blue-500 text-white py-2 px-4 rounded cursor-pointer focus:outline-none transition-all ease-in-out duration-300 transform hover:scale-105"
                        : "bg-gray-200 text-gray-700 py-2 px-4 rounded cursor-pointer hover:bg-gray-300 focus:bg-gray-300 focus:text-blue-500 transition-all ease-in-out duration-300 transform hover:scale-105"
                    }`}
                    onClick={() => goToPage(index + 1)}
                  >
                    {index + 1}
                  </span>
                )
              );
            })}
          </div>
          <button
            className={`${
              currentPage === totalPages ? "hidden" : "block"
            } bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none transition-all ease-in-out duration-300 transform hover:scale-105 sm:hidden`}
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
