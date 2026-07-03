import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function useWeather(city) {
  const [weather, setWeather] = useState(null);
  const [forecasts, setForecasts] = useState([]);
  const [error, setError] = useState(null);

  function applyResults(data) {
    setWeather(data.results);
    setForecasts(data.results.forecast.slice(1, 4));
  }

  async function fetchWeather(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results) {
        applyResults(data);
      } else {
        setError("Não foi possível obter os dados do clima.");
      }
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
      setError("Erro ao buscar dados da API");
    }
  }

  useEffect(() => {
    if (city) return;

    if (!("geolocation" in navigator)) {
      setError("Geolocalização não suportada pelo navegador.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeather(
          `https://api.hgbrasil.com/weather?format=json-cors&lat=${latitude}&lon=${longitude}&key=${API_KEY}`,
        );
      },
      (error) => {
        console.error("Erro de geolocalização:", error);
        setError("Permissão de localização negada");
      },
    );
  }, []);

  useEffect(() => {
    

    fetchWeather(
      `https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}&city_name=${city}`,
    );
  }, [city]);

  return { weather, forecasts, error}
}

export default useWeather