// import React, { useState } from "react";
// import axios from "axios";

// const SearchBar = ({ setWeather }) => {
//   const [city, setCity] = useState("");

//   const handleSearch = async () => {
//     if (!city) return;

//     try {
//       const res = await axios.get(
//         `http://localhost:5000/api/weather?city=${city}`
//       );
//       setWeather(res.data);
//     } catch (err) {
//       alert("Error fetching weather data");
//     }
//   };

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         placeholder="Enter city name"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default SearchBar;


import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ setWeather }) => {
  const [city, setCity] = useState("");

  const handleSearch = async () => {
    if (!city) return;

    try {
      const res = await axios.get(
        `http://localhost:5000/api/weather?city=${city}`
      );
      setWeather(res.data);
    } catch (err) {
      alert("Error fetching weather data");
    }
  };

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Enter city name"
        className="p-3 rounded-lg w-64 border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
