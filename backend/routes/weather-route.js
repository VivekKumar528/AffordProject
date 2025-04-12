import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!city) {
    return res.status(400).json({ message: "City is required" });
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const { temp, humidity } = response.data.main;
    const { description, icon } = response.data.weather[0];
    const windSpeed = response.data.wind.speed;

    res.json({ temp, humidity, description, icon, windSpeed, city });
  } catch (error) {
    res.status(404).json({ message: "City not found" });
  }
});

export default router;
