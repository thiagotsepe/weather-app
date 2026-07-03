export function ForecastItem({ date, min, max, condition, weekday }) {
  return (
    <section className="flex flex-col items-center w-26 min-h-38 py-4 bg-text/15 rounded-2xl">
      <h2 className="text-[16px]">{weekday}</h2>
      <p className="text-[13px]">({ date })</p>
      <img
        className="w-10 h-18 py-4"
        src={`/icons-weather/${condition}.svg`}
        alt={condition}
      />
      <h3 className="text-[20px] font-semibold">
        {min}/{max}°
      </h3>
    </section>
  );
}
