import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Store {}

export const useStore = create<Store>()(persist(() => ({}), {
    name: "edgarguzman"
}));
