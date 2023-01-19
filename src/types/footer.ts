export interface Footer {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  perPage?: number;
  pagesLength: number;
  initialP?: number;
  finalP?: number;
}
