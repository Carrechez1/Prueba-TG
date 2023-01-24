import React from "react";
import { PropsSerchers } from "../../../types/PropSerchers";
import Show from "../../dropdown/CRUD/Show";

const HomeWithoutFinder = ({
  users,
  initialP,
  finalP,
  page,
  setPage,
  perPage,
}: PropsSerchers) => {
  return (
    <div>
      <body>
        <Show
          users={users}
          initialP={initialP}
          finalP={finalP}
          page={page}
          setPage={setPage}
          perPage={perPage}
        />
      </body>
    </div>
  );
};

export default HomeWithoutFinder;
