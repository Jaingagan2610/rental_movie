import { useState } from 'react';

const MyComponent = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isUpdated, setIsUpdated] = useState(false); // Add a state variable for tracking update status

  const handlePatchUser = async (id, email, name) => {
    try {
      const response = await fetch(`http://localhost:5000/user/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      });
  
      if (!response.ok) {
        throw new Error('Error updating user');
      }
  
      const updatedUser = await response.json();
      console.log('Updated User:', updatedUser);
  
      // Set the update status to true
      setIsUpdated(true);
    } catch (error) {
      console.error('Error:', error);
      // Handle the error, show an error message, etc.
    }
  };

  return (
    <div className="space-y-4 p-4 border border-gray-300 rounded-lg shadow-md">
      <input
        id="name"
        type="text"
        placeholder="name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        id="email"
        placeholder="email"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 w-full h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        id="idd"
        placeholder="ID"
        className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={() => {
          const id1 = document.getElementById("idd");
          const id = id1.value;
          console.log(id);
          const id2 = document.getElementById("email");
          const email = id2.value;
          console.log(email);
          const id3 = document.getElementById("name");
          const name = id3.value;
          console.log(name);
          handlePatchUser(id, email, name);
        }}
        className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none"
      >
        Update Post
      </button>

      {isUpdated && (
        <p className="text-green-600 font-bold">Data has been successfully updated!</p>
      )}
    </div>
  );
};

export default MyComponent;
