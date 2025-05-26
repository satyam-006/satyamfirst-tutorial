import React, { useEffect, useState } from "react";

const App = () => {
  // Example in a React component
  const [name, setName] = useState("");
  const fetchMovies = async () => {
    try {
        const res = await fetch("http://localhost:4000/api/movies?search=animal");
        const data = await res.json();
        if (data.results && data.results.length > 0) {
          setName(data.results[0].original_title);
        }
      } catch (error) {
        console.error("Failed to fetch movie:", error);
      }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[35%] h-[45%] bg-red-200 rounded-2xl text-2xl text-center pt-10">
        {name}
      </div>
    </div>
  );
};

export default App;
