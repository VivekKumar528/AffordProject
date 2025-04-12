// import React, { useState } from "react";
// import SearchBar from "./components/SearchBar";
// import WeatherCard from "./components/WeatherCard";
// import "./App.css";

// const App = () => {
//   const [weather, setWeather] = useState(null);

//   return (
//     <div className="app-container">
//       <h1>Afford Medical Weather App</h1>
//       <SearchBar setWeather={setWeather} />
//       <WeatherCard weather={weather} />
//     </div>
//   );
// };

// export default App;


import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  const [weather, setWeather] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-200 to-purple-300 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">
        Afford Medical Weather App
      </h1>
      <SearchBar setWeather={setWeather} />
      <WeatherCard weather={weather} />
    </div>
  );
};

export default App;

