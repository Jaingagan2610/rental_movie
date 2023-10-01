import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from 'react';

const YourComponent = () => {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    year: '',
    duration: '',
    rating: ''
  });

  const [isPosted, setIsPosted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting || isPosted) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/addMovie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Movie created:', data);

        setIsPosted(true);
        setIsFormVisible(false);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Header />
      <div className="bg-gray-800 py-8 telwin-container">
  <div className="container mx-auto px-4">
  

    {isFormVisible && (
     <form onSubmit={handleSubmit} className="bg-red-500 via-red-500 rounded-lg p-6 w-full md:w-2/3 lg:w-1/2 mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Add a New Movie</h2>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Image Link:</label>
          <input
            className="border border-gray-400 p-2 w-full telwin-input" // Add telwin-input class
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
          <input
            className="border border-gray-400 p-2 w-full telwin-input" // Add telwin-input class
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="year" className="block text-gray-700 font-bold mb-2">Year:</label>
          <input
            className="border border-gray-400 p-2 w-full telwin-input" // Add telwin-input class
            type="text"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="duration" className="block text-gray-700 font-bold mb-2">Duration:</label>
          <input
            className="border border-gray-400 p-2 w-full telwin-input" // Add telwin-input class
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">Rating:</label>
          <input
            className="border border-gray-400 p-2 w-full telwin-input" // Add telwin-input class
            type="text"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-black hover:bg-gray-600 text-white py-2 px-4 rounded-full"
          disabled={isSubmitting}
        >
          Add Movie
        </button>
      </form>
    )}

    {isPosted && (
      <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-2/3 lg:w-1/2 mx-auto mt-4">
        <p className="mt-4 text-green-600 font-bold">Movie has been successfully added!</p>
      </div>
    )}
  </div>
</div>
      <Footer />
    </>
  );
};

export default YourComponent;
