import { Search, X } from "lucide-react";
import React, { useEffect } from "react";
import { useUserStore } from "../store/useUserStore";
import { useChatStore } from "../store/useChatStore";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const Sidebar = ({ onClose, open }) => {
  //Active bg color for sidebar user #eaeaea

  const navigate = useNavigate();

  const {
    matchedUsers,
    isMatchedUsersLoading,
    getSearchedUsers,
    getMatchedUsers,
    setSelectedUser,
  } = useChatStore();

  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getMatchedUsers();
  }, []);

  const handleSearchUsers = (e) => {
    getSearchedUsers(e.target.value);
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    navigate("/chat");
  };

  return (
    <>
      {open && (
        <div className="w-screen md:w-lg h-screen p-10 overflow-hidden">
          <div className="h-full space-y-3">
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold">Matches</h2>
              <button
                className="flex justify-between items-center border rounded-2xl p-2 border-[#eeeeee]"
                onClick={onClose}
              >
                <X className="size-6" />
              </button>
            </div>
            <div className="border border-[#eeeeee] w-full flex space-x-2 justify-center items-center p-2 px-3 rounded-xl text-[#a2a2a2]">
              <Search className="size-5" />
              <input
                className="w-full h-8 rounded-md placeholder: focus:outline-none text-[#a2a2a2]"
                placeholder="Search"
                onChange={handleSearchUsers}
              />
            </div>
            <div className="max-h-screen h-full w-full space-y-4 overflow-y-auto no-scrollbar">
              {matchedUsers.length === 0 || isMatchedUsersLoading ? (
                <div className="h-[70vh] w-full flex justify-center items-center animate-ping">
                  <img src="/heart.png" width={50} height={50} />
                </div>
              ) : (
                matchedUsers.map((user, idx) => {
                  const isOnline = onlineUsers.includes(user._id);
                  return (
                    <div className="space-y-1">
                      <button
                        className="flex w-full space-x-2 hover:bg-[#f4f4f4] p-2 hover:rounded-lg active:bg-[#d6d6d6]"
                        onClick={() => handleSelectUser(user)}
                      >
                        <div
                          className={`size-14 ${
                            isOnline
                              ? "bg-gradient-to-r from-[#9F2A7D] via-[#D03963] to-[#F27023]"
                              : ""
                          } rounded-full flex items-center justify-center`}
                        >
                          <div
                            className={`rounded-full bg-white p-1 ${
                              isOnline ? "size-12" : "size-full"
                            }`}
                          >
                            <div className="size-full rounded-full">
                              <img
                                src={user.profilePicUrl || "/swipify-icon.png"}
                                className="size-full object-cover rounded-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold text-lg">
                            {user.firstName} {user.lastName}
                          </p>
                          <div className="flex items-center space-x-0.5">
                            {isOnline && (
                              <div className="bg-[#E94057] size-2 rounded-full" />
                            )}
                            <p className="text-[#999999] text-sm">
                              {isOnline ? "Online" : ""}
                            </p>
                          </div>
                        </div>
                      </button>
                      <div className="w-full pr-16">
                        <hr className="text-[#E8E6EA] w-full ml-16" />
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
