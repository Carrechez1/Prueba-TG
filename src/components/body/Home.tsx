import { Props } from "../../types/PropsHome";
import HomeWithoutFinder from "./home/HomeWithoutFinder";
import HomeUsing1Browser from "./home/HomeUsing1Browser";
import HomeUsing2Browser from "./home/HomeUsing2Browser";
import HomeUsing3Browser from "./home/HomeUsing3Browser";
import HomeUsingAllBrowser from "./home/HomeUsingAllBrowser";

const Home = ({
  users,
  searchName,
  searchNit,
  searchBusinessName,
  searchTelf,
  page,
  setPage,
  perPage,
}: Props) => {
  const initialP = (page - 1) * perPage;
  const finalP = page * perPage;

  if (!searchName && !searchNit && !searchBusinessName && !searchTelf) {
    return (
      <div className="App">
        <HomeWithoutFinder
          users={users}
          initialP={initialP}
          finalP={finalP}
          page={page}
          setPage={setPage}
          perPage={perPage}
        />
      </div>
    );
  } else if (
    (searchName && !searchNit && !searchBusinessName && !searchTelf) ||
    (searchNit && !searchName && !searchBusinessName && !searchTelf) ||
    (!searchNit && !searchName && searchBusinessName && !searchTelf) ||
    (!searchNit && !searchName && !searchBusinessName && searchTelf)
  ) {
    return (
      <div className="App">
        <HomeUsing1Browser
          searchName={searchName}
          searchNit={searchNit}
          searchBusinessName={searchBusinessName}
          searchTelf={searchTelf}
          users={users}
          initialP={initialP}
          finalP={finalP}
          page={page}
          setPage={setPage}
          perPage={perPage}
        />
      </div>
    );
  } else if (
    (searchName && searchNit && !searchBusinessName && !searchTelf) ||
    (!searchName && !searchNit && searchBusinessName && searchTelf) ||
    (!searchName && searchNit && searchBusinessName && !searchTelf) ||
    (!searchName && searchNit && !searchBusinessName && searchTelf) ||
    (!searchName && searchNit && !searchBusinessName && searchTelf) ||
    (searchName && !searchNit && !searchBusinessName && searchTelf) ||
    (searchName && !searchNit && searchBusinessName && !searchTelf)
  ) {
    return (
      <div className="App">
        <HomeUsing2Browser
          searchName={searchName}
          searchNit={searchNit}
          searchBusinessName={searchBusinessName}
          searchTelf={searchTelf}
          users={users}
          initialP={initialP}
          finalP={finalP}
          page={page}
          setPage={setPage}
          perPage={perPage}
        />
      </div>
    );
  } else if (
    (searchName && searchNit && searchBusinessName && !searchTelf) ||
    (!searchName && searchNit && searchBusinessName && searchTelf) ||
    (searchName && searchNit && !searchBusinessName && searchTelf) ||
    (searchName && !searchNit && searchBusinessName && searchTelf)
  ) {
    return (
      <div className="App">
        <HomeUsing3Browser
          searchNit={searchNit}
          searchBusinessName={searchBusinessName}
          searchTelf={searchTelf}
          searchName={searchName}
          initialP={initialP}
          finalP={finalP}
          page={page}
          perPage={perPage}
          setPage={setPage}
          users={users}
        />
      </div>
    );
  } else if (searchName && searchNit && searchBusinessName && searchTelf) {
    return (
      <div className="App">
        <HomeUsingAllBrowser
          searchNit={searchNit}
          searchBusinessName={searchBusinessName}
          searchTelf={searchTelf}
          initialP={initialP}
          finalP={finalP}
          page={page}
          setPage={setPage}
          perPage={perPage}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default Home;
