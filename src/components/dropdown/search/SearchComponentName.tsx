import { searchNameNitTelfBusinessName } from "../../../types/searchNameNitTelfBusinessName";

const SearchComponentName = ({
  searchName,
  setSearchName,
  setPage,
}: searchNameNitTelfBusinessName) => {
  const searcherName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setSearchName !== undefined) {
      setSearchName(e.target.value);
    }

    setPage(1);
  };

  return (
    <div>
      <input
        value={searchName}
        onChange={searcherName}
        type="text"
        placeholder="Nombre"
      />
    </div>
  );
};

export default SearchComponentName;
