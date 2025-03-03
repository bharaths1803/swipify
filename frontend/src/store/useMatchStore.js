import toast from "react-hot-toast";
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { io } from "socket.io-client";

const baseUrl =
  import.meta.env.MODE === "development" ? "http://localhost:5000" : "/";

export const useMatchStore = create((set, get) => ({
  matchedUsers: [],
  selectedUser: null,
  isMatchedUsersLoading: false,
  messages: [],
  isMessagesLoading: false,
  authUser: null,
  isCheckingAuth: false,
  isSigningup: false,
  isLoggingin: false,
  isLoggingout: false,
  socket: null,
  onlineUsers: [],
  matchedUsers: [],

  checkAuth: async () => {
    try {
      set({ isCheckingAuth: true });
      const res = await axiosInstance.get("/auth/check-auth");
      get().connectSocket();
      set({ authUser: res.data.user });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (signupData) => {
    try {
      set({ isSigningup: true });
      const res = await axiosInstance.post("/auth/signup", signupData);
      set({ authUser: res.data.user });
      get().connectSocket();
      toast.success("Account created successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningup: false });
    }
  },

  login: async (loginData) => {
    try {
      set({ isLoggingin: true });
      const res = await axiosInstance.post("/auth/login", loginData);
      set({ authUser: res.data.user });
      get().connectSocket();
      toast.success("Logged in successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isLoggingin: false });
    }
  },

  logout: async () => {
    try {
      set({ isLoggingout: true });
      const res = await axiosInstance.post("/auth/logout");
      get().disconnectSocket();
      toast.success(res.data.message);
      set({ authUser: null });
    } catch (error) {
      console.log(error.response.data.message);
    } finally {
      set({ isLoggingout: false });
    }
  },

  connectSocket: async () => {
    try {
      const { authUser } = get();
      if (!authUser || get().socket?.connected) return;
      const socket = io(baseUrl, {
        query: {
          userId: authUser._id,
        },
      });
      socket.connect();
      set({ socket });
      socket.on("onlineusers", (onlineUsers) => {
        set({ onlineUsers });
      });
      socket.on("match-found", (matchFoundMessage) => {
        toast.success(matchFoundMessage);
        const { getMatchedUsers } = get();
        getMatchedUsers();
      });
    } catch (error) {
      console.log(`Error connecting to socket ${error}`);
    }
  },

  disconnectSocket: async () => {
    try {
      const { socket } = get();
      if (!socket) return;
      socket.disconnect();
      set({ socket: null });
    } catch (error) {
      console.log(`Error disconnecting socket ${error}`);
    }
  },

  getMatchedUsers: async () => {
    try {
      set({ isMatchedUsersLoading: true });
      const res = await axiosInstance.get("/match");
      set({ matchedUsers: res.data.matchedUsers });
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
      const { socket } = useMatchStore.getState();
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
      const { authUser, socket } = useMatchStore.getState();
      if (!authUser || !socket) return;
      socket.off("newMessage");
    } catch (error) {
      console.log(`Failed subscribing to messages`);
    }
  },

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
