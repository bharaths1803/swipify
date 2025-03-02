import toast from "react-hot-toast";
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useMatchStore = create((set, get) => ({
  swipeLeft: async (toLikeUserId) => {
    try {
      await axiosInstance.post(`/match/swipe-left/${toLikeUserId}`);
      toast.success("Disliked!");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  swipeRight: async (toDislikeUserId) => {
    try {
      await axiosInstance.post(`/match/swipe-right/${toDislikeUserId}`);
      toast.success("Liked!");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
}));
