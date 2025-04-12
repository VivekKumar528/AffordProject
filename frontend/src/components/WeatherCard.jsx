// import React from "react";

// const WeatherCard = ({ weather }) => {
//   if (!weather || !weather.main) return null;

//   return (
//     <div className="weather-card">
//       <h2>Weather Info</h2>
//       <p>City: {weather.name}</p>
//       <p>Temperature: {weather.main.temp}°C</p>
//       <p>Condition: {weather.weather[0].main}</p>
//     </div>
//   );
// };

// export default WeatherCard;


import React from "react";

const WeatherCard = ({ weather }) => {
  if (!weather || !weather.main) return null;

  return (
    <div className="bg-white bg-opacity-90 rounded-2xl p-6 w-80 shadow-lg text-center">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Weather Info
      </h2>
      <p className="text-lg text-gray-800">
        🌆 City: <strong>{weather.name}</strong>
      </p>
      <p className="text-lg text-gray-800">
        🌡️ Temperature: <strong>{weather.main.temp}°C</strong>
      </p>
      <p className="text-lg text-gray-800">
        ⛅ Condition: <strong>{weather.weather[0].main}</strong>
      </p>
    </div>
  );
};

export default WeatherCard;
