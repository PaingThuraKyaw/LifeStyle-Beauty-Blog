import { create } from "zustand";
import Cookies from "js-cookie";

interface authStore {
  auth: string;
  setAuth: (auth: string) => void;
}

export const useAuthStore = create<authStore>((set) => {
  const initialState = "";
  const cookieGet = Cookies.get("token");
  const initialAuth = cookieGet ? cookieGet : initialState;

  return {
    auth: initialAuth,
    setAuth: (auth) =>
      set((state) => {
        Cookies.set("token", auth , {expires : 1});
        return { ...state, auth };
      }),
  };
});
