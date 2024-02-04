import { RefObject } from 'react';
import { create } from 'zustand';

interface SearchStore {
  isSearchOpen: boolean;
  searchInput: RefObject<HTMLInputElement>;
  openSearch: () => void;
  closeSearch: () => void;
  setSearchInput: ( searchInput: RefObject<HTMLInputElement> ) => void;
}

export const useSearchStore = create<SearchStore>()((set) => ({
  isSearchOpen: false,
  searchInput: { current: null },
  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),
  setSearchInput: searchInput => set({ searchInput }),
}));