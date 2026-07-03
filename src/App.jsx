import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { WeatherCard } from "./components/WeatherCard";
import { CityTitle } from "./components/CityTitle";
import useWeather from "./hooks/useWeather";
import { ForecastList } from "./components/ForecastList";
import { Loading } from "./components/Loading";

function App() {
  const [city, setCity] = useState("");
  const { weather, forecasts, loading } = useWeather(city);

  return (
    <div className="min-h-screen overflow-y-auto bg-linear-to-b from-brand-start to-brand-end px-4 pt-10 flex flex-col gap-10 md:px-30 md:gap-20 lg:px-40 lg:gap-30">
      <SearchBar onSearch={setCity} />
      {loading ? (
        <Loading />
      ) : weather ? (
        <>
          <CityTitle weather={weather} />
          <WeatherCard weather={weather} />
          <ForecastList forecasts={forecasts} />
        </>
      ) : (
        <p className="mx-auto">Digite uma cidade para buscar o clima.</p>
      )}
    </div>
  );
}

export default App;
