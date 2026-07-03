export function CityTitle({ weather }) {
  const { sunrise, sunset, city } = { ...weather };
  return (
    <div className="flex flex-col gap-0">
      <h1 className="text-2x1 mx-auto font-semibold">{city}</h1>
      <p className="text-[13px] mx-auto">
        Nascer do sol: {sunrise} | Pôr do sol: {sunset}
      </p>
    </div>
  );
}
