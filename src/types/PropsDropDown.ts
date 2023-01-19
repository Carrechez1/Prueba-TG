import { User } from "../types/user";

export interface PropsDropDown {
  searchName: string;
  setSearchName: React.Dispatch<React.SetStateAction<string>>;
  searchNit: string;
  setSearchNit: React.Dispatch<React.SetStateAction<string>>;
  searchBusinessName: string;
  setSearchBusinessName: React.Dispatch<React.SetStateAction<string>>;
  searchTelf: string;
  setSearchTelf: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  getUsers: () => Promise<void>;
}
