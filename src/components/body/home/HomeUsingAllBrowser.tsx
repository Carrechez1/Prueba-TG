import React from "react";
import { PropsSerchers } from "../../../types/PropSerchers";
import SerchersAll from "../../dropdown/search/serchers/SerchersAll";

const HomeUsingAllBrowser = ({
  searchNit,
  searchBusinessName,
  searchTelf,
  initialP,
  finalP,
  page,
  setPage,
  perPage,
}: PropsSerchers) => {
  return (
    <div>
      <SerchersAll
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
};

export default HomeUsingAllBrowser;
