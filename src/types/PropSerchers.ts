import { User } from "./user";

export interface PropsSerchers {
  searcherName?: User[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  perPage: number;
  initialP?: number;
  finalP?: number;
  users?: User[];
  searcherBusinessName?: User[];
  newSearcherName?: User[];
  searchBusinessName?: string;
  searchTelf?: string;
  searchNit?: string;
  searcherNit?: User[];
  newSearcherNit?: User[];
  searcherTelf?: User[];
  newSearcherBusinessName?: User[];
}
