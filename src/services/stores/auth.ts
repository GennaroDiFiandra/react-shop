import { create } from "zustand";
import { checkIsLoggedIn, getToken, adminLogin, logout } from "@/services/";

interface AuthStore {
  isLoggedIn: boolean;
  token: string | null;
  isError: boolean;
  login: ( email:string, password:string ) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()((set) => ({
  isLoggedIn: checkIsLoggedIn(),
  token: getToken(),
  isError: false,
  login: async (email, password) => {
    set({ isLoggedIn: false, token: null, isError: false });

    try {
      await adminLogin(email, password);
      set({ isLoggedIn: checkIsLoggedIn(), token: getToken() });
    }
    catch {
      set({ isError: true });
    }
  },
  logout: () => {
    logout();
    set({ isLoggedIn: false, token: null, isError: false });
  },
}));