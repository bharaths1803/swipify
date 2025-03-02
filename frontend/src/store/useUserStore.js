import toast from "react-hot-toast";
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useUserStore = create((set, get) => ({
  isGettingUsers: false,
  users: [],

  getUsers: async () => {
    try {
      set({ isGettingUsers: true });
      const res = await axiosInstance.get("/users");
      set({ users: res.data.users });
    } catch (error) {
      toast.error(error?.response?.data?.message || error);
    } finally {
      set({ isGettingUsers: false });
    }
  },
}));
