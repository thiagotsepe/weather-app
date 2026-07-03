import { useState } from "react";

export function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    if (trimmedValue !== "") {
      onSearch(trimmedValue);
      setInputValue("");
    }
  };

  return (
    <form className="w-full" onSubmit={handleSearch}>
      <label className="flex py-2 px-4 rounded-3xl bg-text/15 text-base">
        <input
          className="w-full outline-none placeholder:text-white text-white"
          type="text"
          placeholder="Digite a cidade"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-transparent cursor-pointer border-none"
          type="submit"
        >
          <img
            className="size-4"
            src="/icons-weather/search.svg"
            alt="icone de busca"
          />
        </button>
      </label>
    </form>
  );
}
