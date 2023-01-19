import { User } from "../types/user";

export interface Props {
  users: User[];
  searchName: string;
  searchNit: string;
  searchBusinessName: string;
  searchTelf: string;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  perPage: number;
}
