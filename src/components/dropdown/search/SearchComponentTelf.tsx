import { searchNameNitTelfBusinessName } from "../../../types/searchNameNitTelfBusinessName";

const SearchComponentTelf = ({
  searchTelf,
  setSearchTelf,
  setPage,
}: searchNameNitTelfBusinessName) => {
  const searcherTelf = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setSearchTelf) {
      setSearchTelf(e.target.value);
    }

    setPage(1);
  };

  return (
    <div>
      <input
        value={searchTelf}
        onChange={searcherTelf}
        type="text"
        placeholder="Telefono"
      />
    </div>
  );
};

export default SearchComponentTelf;
