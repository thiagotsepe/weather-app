export function WeatherCard() {
  return (
    <div className="flex flex-col gap-6 p-4 rounded-3xl bg-primary">
      <header className="flex justify-center">
        <h2 className="text-base font-semibold">Hoje (01/12)</h2>
      </header>
      <div className="flex flex-col items-center">
        <img src="/icons-weather/cloud.svg" alt="cloud" />
        <h2 className="text-[43px] font-bold">31°</h2>
        <p className="text-[13px]">Sol entre nuvens</p>
      </div>
      <footer className="flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2">
            <img src="icons-weather/humidity.svg" alt="" />
            <p className="font-semibold">Umidade:</p>
          </div>
          <span>93%</span>
        </div>
        <div className="flex flex-row justify-between text-base">
          <div className="flex flex-row gap-2">
            <img src="icons-weather/temp.svg" alt="" />
            <p className="font-semibold">Min/Max:</p>
          </div>
          <span>20/34°</span>
        </div>
      </footer>
    </div>
  );
}
