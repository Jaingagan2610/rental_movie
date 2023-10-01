import React, { useEffect, useState } from 'react';
import Header from '@/components/header';
import axios from 'axios';
import { useRouter } from 'next/router';

function IDpage() {
  const [movieData, setMovieData] = useState({});
  const router = useRouter();

  useEffect(() => {
    const id = parseInt(router.query.id);
    if (!isNaN(id)) {
      const url = `http://localhost:5000/Movie/${id}`;
      console.log("url", url);
      axios
        .get(url)
        .then((response) => {
          const data = response.data;
          console.log("movieData", data);
          setMovieData(data);
        })
        .catch((error) => {
          console.error('Error fetching movie data:', error);
        });
    }
  }, [router.query.id]);

  useEffect(() => {
    console.log("Updated movieData:", movieData);
  }, [movieData]);

  return (
    <div>
      <Header />
      <h1 className='text-7xl text-red-500 m-10'>{movieData.name}</h1>
      <div>
        <div className="mb-4">
          <img
            src={movieData.image}
            alt={`Image for ${movieData.name}`}
            className="w-40 max-h-30"
          />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold">Name: {movieData.name}</h3>
          <h2 className="text-blue-600">Year: {movieData.year}</h2>
          <p className="text-gray-700">Duration: {movieData.duration}</p>
          <p className="text-gray-700">
            <i className="fa fa-star text-yellow-500"> Rating: {movieData.rating}</i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default IDpage;
