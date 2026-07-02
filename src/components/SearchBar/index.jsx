export function SearchBar() {
  return (
    <form className="w-full">
      <label className="flex py-2 px-4 rounded-3xl bg-text/15 text-base">
        <input
          className="w-full outline-none placeholder:text-white text-white"
          type="text"
          placeholder="Digite a cidade"
        />
        <button className="bg-transparent cursor-pointer border-none" type="submit">
          <img className="size-4" src="/icons-weather/search.svg" alt="icone de busca" />
        </button>
      </label>
    </form>
  );
}
