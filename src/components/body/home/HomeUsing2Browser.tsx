import { PropsSerchers } from "../../../types/PropSerchers";
import SearchNameBusinessName from "../../dropdown/search/serchers/SearchNameBusinessName";
import SearchNitBusinessName from "../../dropdown/search/serchers/SearchNitBusinessName";
import SearchNitName from "../../dropdown/search/serchers/SearchNitName";
import SearchTelfBusinessName from "../../dropdown/search/serchers/SearchTelfBusinessName";
import SearchTelfName from "../../dropdown/search/serchers/SearchTelfName";
import SearchTelfNit from "../../dropdown/search/serchers/SearchTelfNit";

const HomeUsing2Browser = ({
  searchName,
  searchNit,
  searchBusinessName,
  users,
  searchTelf,
  initialP,
  finalP,
  page,
  setPage,
  perPage,
}: PropsSerchers) => {
  let newSearcherName: typeof users = [];
  let newSearcherNit: typeof users = [];
  let newSearcherBusinessName: typeof users = [];

  if (searchName || searchNit || searchBusinessName) {
    newSearcherName = users?.filter((dato) => {
      if (dato.name !== undefined) {
        if (searchName !== undefined) {
          return dato.name
            .toLowerCase()
            .includes(searchName.toLocaleLowerCase());
        }
      }
    });
    newSearcherNit = users?.filter((dato) => {
      if (dato.nit !== undefined) {
        if (searchNit !== undefined) {
          return dato.nit.toLowerCase().includes(searchNit.toLocaleLowerCase());
        }
      }
    });
    newSearcherBusinessName = users?.filter((dato) => {
      if (dato.businessName !== undefined) {
        if (searchBusinessName !== undefined) {
          return dato.businessName
            .toLowerCase()
            .includes(searchBusinessName.toLocaleLowerCase());
        }
      }
    });
  }

  if (searchName && searchNit && !searchBusinessName && !searchTelf) {
    return (
      <div>
        <SearchNitName
          newSearcherName={newSearcherName}
          searchNit={searchNit}
          initialP={initialP}
          finalP={finalP}
          page={page}
          setPage={setPage}
          perPage={perPage}
        />
      </div>
    );
  } else if (!searchName && !searchNit && searchBusinessName && searchTelf) {
    return (
      <div>
        <SearchTelfBusinessName
          newSearcherBusinessName={newSearcherBusinessName}
          searchTelf={searchTelf}
          initialP={initialP}
          finalP={finalP}
          page={page}
          setPage={setPage}
          perPage={perPage}
        />
      </div>
    );
  } else if (!searchName && searchNit && searchBusinessName && !searchTelf) {
    return (
      <div>
        <SearchNitBusinessName
          newSearcherNit={newSearcherNit}
          searchBusinessName={searchBusinessName}
          initialP={initialP}
          finalP={finalP}
          page={page}
          setPage={setPage}
          perPage={perPage}
        />
      </div>
    );
  } else if (!searchName && searchNit && !searchBusinessName && searchTelf) {
    return (
      <div>
        <SearchTelfNit
          newSearcherNit={newSearcherNit}
          searchTelf={searchTelf}
          initialP={initialP}
          finalP={finalP}
          page={page}
          setPage={setPage}
          perPage={perPage}
        />
      </div>
    );
  } else if (searchName && !searchNit && !searchBusinessName && searchTelf) {
    return (
      <div>
        <SearchTelfName
          newSearcherName={newSearcherName}
          searchTelf={searchTelf}
          initialP={initialP}
          finalP={finalP}
          page={page}
          setPage={setPage}
          perPage={perPage}
        />
      </div>
    );
  } else if (searchName && !searchNit && searchBusinessName && !searchTelf) {
    return (
      <div>
        <SearchNameBusinessName
          newSearcherName={newSearcherName}
          searchBusinessName={searchBusinessName}
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

export default HomeUsing2Browser;
