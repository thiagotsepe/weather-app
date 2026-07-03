export function WeatherCard({ weather }) {
  return (
    <div className="flex flex-col gap-6 p-4 rounded-3xl bg-primary">
      <header className="flex flex-col items-center">
        <h2 className="text-base font-semibold">
          Hoje ({weather.forecast[0].date}) - {weather.forecast[0].weekday}
        </h2>
      </header>
      <div className="flex flex-col items-center">
        <img
          className="w-20 h-20"
          src={`/icons-weather/${weather.condition_slug}.svg`}
          alt={weather.condition}
        />
        <h2 className="text-[43px] font-bold">{weather.temp}°</h2>
        <p className="text-[13px]">{weather.description}</p>
      </div>
      <footer className="flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2">
            <img src="icons-weather/humidity.svg" alt="" />
            <p className="font-semibold">Umidade:</p>
          </div>
          <span>{weather.humidity}%</span>
        </div>
        <div className="flex flex-row justify-between text-base">
          <div className="flex flex-row gap-2">
            <img src="icons-weather/temp.svg" alt="" />
            <p className="font-semibold">Min/Max:</p>
          </div>
          <span>
            {weather.forecast[0].min}/{weather.forecast[0].max}°
          </span>
        </div>
      </footer>
    </div>
  );
}
