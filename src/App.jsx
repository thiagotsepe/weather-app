import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { WeatherCard } from "./components/WeatherCard";
import { CityTitle } from "./components/CityTitle";
import useWeather from "./hooks/useWeather";
import { ForecastList } from "./components/ForecastList";

function App() {
  const [city, setCity] = useState("");
  const { weather, forecasts } = useWeather(city);

  return (
    <div className="min-h-screen overflow-y-auto bg-linear-to-b from-brand-start to-brand-end px-4 pt-10 flex flex-col gap-10">
      <SearchBar onSearch={setCity} />
      <CityTitle weather={weather} />
      {weather && <WeatherCard weather={weather} />}
      <ForecastList forecasts={forecasts} />
    </div>
  );
}

export default App;
