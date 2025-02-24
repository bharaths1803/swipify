import { X } from "lucide-react";
const ChatHeader = () => {
  return (
    <div className="flex justify-between px-6">
      <div className="flex space-x-2">
        <button className="size-14 bg-gradient-to-r from-[#9F2A7D] via-[#D03963] to-[#F27023] rounded-full flex items-center justify-center">
          <div className="rounded-full bg-white size-12 p-1">
            <div className="size-full rounded-full">
              <img src="/swipify-icon.png" className="size-full" />
            </div>
          </div>
        </button>
        <div>
          <p className="font-bold text-2xl">Grace</p>
          <div className="flex justify-center items-center space-x-0.5">
            <div className="bg-[#E94057] size-2 rounded-full" />
            <p className="text-[#999999] text-sm">Online</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="border border-[#eeeeee] rounded-xl p-3">
          <X className="size-6" />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
