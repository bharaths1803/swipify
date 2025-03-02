import { X } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
const ChatHeader = () => {
  const { selectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const navigate = useNavigate();
  const isOnline = onlineUsers.includes(selectedUser._id);

  const handleCloseChat = () => {
    navigate("/");
  };

  if (!selectedUser) {
    handleCloseChat();
    return;
  }

  return (
    <div className="flex justify-between px-6">
      <div className="flex space-x-2">
        <button
          className={`size-14 ${
            isOnline
              ? "bg-gradient-to-r from-[#9F2A7D] via-[#D03963] to-[#F27023]"
              : ""
          } rounded-full flex items-center justify-center`}
        >
          <div
            className={`rounded-full bg-white ${
              isOnline ? "size-12" : "size-full"
            } p-1`}
          >
            <div className="size-full rounded-full">
              <img
                src={selectedUser.profilePicUrl || "/swipify-icon.png"}
                className="size-full object-cover rounded-full"
              />
            </div>
          </div>
        </button>
        <div>
          <p className="font-bold text-2xl">
            {selectedUser.firstName} {selectedUser.lastName}
          </p>
          {isOnline && (
            <div className="flex items-center space-x-0.5">
              <div className="bg-[#E94057] size-2 rounded-full" />
              <p className="text-[#999999] text-sm">Online</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          className="border border-[#eeeeee] rounded-xl p-3 hover:bg-[#f4f4f4] active:bg-[#d6d6d6]"
          onClick={handleCloseChat}
        >
          <X className="size-6" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
