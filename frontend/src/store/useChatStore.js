import toast from "react-hot-toast";
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";

export const useChatStore = create((set, get) => ({
  matchedUsers: [],
  selectedUser: null,
  isMatchedUsersLoading: false,
  messages: [],
  isMessagesLoading: false,

  getMatchedUsers: async () => {
    try {
      set({ isMatchedUsersLoading: true });
      const res = await axiosInstance.get("/users");
      set({ matchedUsers: res.data.users });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isMatchedUsersLoading: false });
    }
  },

  getSearchedUsers: async (filter) => {
    try {
      const res = await axiosInstance.get(`/match/bulk?filter=${filter}`);
      set({ matchedUsers: res.data.users });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  setSelectedUser: (selectedUser) => {
    set({ selectedUser });
  },

  sendMessage: async (messageData) => {
    try {
      const { selectedUser, messages } = get();
      const res = await axiosInstance.post(
        `/message/send/${selectedUser._id}`,
        messageData
      );
      set({ messages: [...messages, res.data.message] });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isMessagesLoading: false });
    }
  },

  getMessages: async () => {
    try {
      set({ isMessagesLoading: true });
      const { selectedUser } = get();
      const res = await axiosInstance.get(`/message/${selectedUser._id}`);
      set({ messages: res.data.messages });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isMessagesLoading: false });
    }
  },

  subscribeToMessages: async () => {
    try {
      const { socket } = useAuthStore.getState();
      if (!socket) return;
      const { selectedUser } = get();
      socket.on("newMessage", (message) => {
        const isMessageSentFromSelectedUser =
          message.senderId === selectedUser._id;
        if (!isMessageSentFromSelectedUser) return;
        const { messages } = get();
        console.log("In socket calling");
        if (messages[messages.length - 1] === message) return;
        set({ messages: [...messages, message] });
      });

      socket.on("seen", (messages) => {
        console.log("In seen");
        set({ messages });
      });
    } catch (error) {
      console.log(`Failed subscribing to messages`);
    }
  },

  unsubscribeFromMessages: async () => {
    try {
      const { authUser, socket } = useAuthStore.getState();
      if (!authUser || !socket) return;
      socket.off("newMessage");
    } catch (error) {
      console.log(`Failed subscribing to messages`);
    }
  },
}));
