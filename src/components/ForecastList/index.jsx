import { ForecastItem } from "../ForecastItem";

export function ForecastList({ forecasts }) {
  return (
    <div className="flex gap-2">
      {forecasts.map((forecast, index) => (
        <ForecastItem key={index} {...forecast} />
      ))}
    </div>
  );
}
