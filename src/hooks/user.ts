import { create } from "zustand";
import { createJSONStorage } from "zustand/middleware";
import { persist } from "zustand/middleware";
import { updateToken } from "../api";

export type User = {
  id: number;
  photo: string;
  name: string;
  accessToken: string;
  refreshToken: string;
  tokenExpiresDate: Date;
  refreshTokenExpiresDate: Date;
};

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      user: null,
      setUser: (user) => {
        updateToken(user.accessToken);
        set({ user });
      },
      clearUser: () => {
        updateToken(undefined);
        set({ user: null });
      },
    }),
    {
      name: "user",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
