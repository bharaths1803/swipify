import { Search } from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-md max-w-screen h-[90vh] max-h-screen p-10">
      <div className="h-full space-y-3">
        <h2 className="text-3xl font-bold">Matches</h2>
        <div className="border border-[#eeeeee] w-full flex space-x-2 justify-center items-center p-2 px-3 rounded-xl text-[#a2a2a2]">
          <Search className="size-5" />
          <input
            className="w-full h-8 rounded-md placeholder: focus:outline-none text-[#a2a2a2]"
            placeholder="Search"
          />
        </div>
        <div className="max-h-screen h-full w-full space-y-4 overflow-y-auto no-scrollbar">
          <div className="space-y-1">
            <div className="flex space-x-2">
              <button className="size-14 bg-gradient-to-r from-[#9F2A7D] via-[#D03963] to-[#F27023] rounded-full flex items-center justify-center">
                <div className="rounded-full bg-white size-12 p-1">
                  <div className="size-full rounded-full">
                    <img src="/swipify-icon.png" className="size-full" />
                  </div>
                </div>
              </button>
              <div>
                <p className="font-semibold text-lg">Grace</p>
                <div className="flex justify-center items-center space-x-0.5">
                  <div className="bg-[#E94057] size-2 rounded-full" />
                  <p className="text-[#999999] text-sm">Online</p>
                </div>
              </div>
            </div>
            <div className="w-full pr-16">
              <hr className="text-[#E8E6EA] w-full ml-16" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex space-x-2">
              <button className="size-14 bg-gradient-to-r from-[#9F2A7D] via-[#D03963] to-[#F27023] rounded-full flex items-center justify-center">
                <div className="rounded-full bg-white size-12 p-1">
                  <div className="size-full rounded-full">
                    <img src="/swipify-icon.png" className="size-full" />
                  </div>
                </div>
              </button>
              <div>
                <p className="font-semibold text-lg">Grace</p>
                <div className="flex justify-center items-center space-x-0.5">
                  <div className="bg-[#E94057] size-2 rounded-full" />
                  <p className="text-[#999999] text-sm">Online</p>
                </div>
              </div>
            </div>
            <div className="w-full pr-16">
              <hr className="text-[#E8E6EA] w-full ml-16" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex space-x-2">
              <button className="size-14 bg-gradient-to-r from-[#9F2A7D] via-[#D03963] to-[#F27023] rounded-full flex items-center justify-center">
                <div className="rounded-full bg-white size-12 p-1">
                  <div className="size-full rounded-full">
                    <img src="/swipify-icon.png" className="size-full" />
                  </div>
                </div>
              </button>
              <div>
                <p className="font-semibold text-lg">Grace</p>
                <div className="flex justify-center items-center space-x-0.5">
                  <div className="bg-[#E94057] size-2 rounded-full" />
                  <p className="text-[#999999] text-sm">Online</p>
                </div>
              </div>
            </div>
            <div className="w-full pr-16">
              <hr className="text-[#E8E6EA] w-full ml-16" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex space-x-2">
              <button className="size-14 bg-gradient-to-r from-[#9F2A7D] via-[#D03963] to-[#F27023] rounded-full flex items-center justify-center">
                <div className="rounded-full bg-white size-12 p-1">
                  <div className="size-full rounded-full">
                    <img src="/swipify-icon.png" className="size-full" />
                  </div>
                </div>
              </button>
              <div>
                <p className="font-semibold text-lg">Grace</p>
                <div className="flex justify-center items-center space-x-0.5">
                  <div className="bg-[#E94057] size-2 rounded-full" />
                  <p className="text-[#999999] text-sm">Online</p>
                </div>
              </div>
            </div>
            <div className="w-full pr-16">
              <hr className="text-[#E8E6EA] w-full ml-16" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex space-x-2">
              <button className="size-14 bg-gradient-to-r from-[#9F2A7D] via-[#D03963] to-[#F27023] rounded-full flex items-center justify-center">
                <div className="rounded-full bg-white size-12 p-1">
                  <div className="size-full rounded-full">
                    <img src="/swipify-icon.png" className="size-full" />
                  </div>
                </div>
              </button>
              <div>
                <p className="font-semibold text-lg">Grace</p>
                <div className="flex justify-center items-center space-x-0.5">
                  <div className="bg-[#E94057] size-2 rounded-full" />
                  <p className="text-[#999999] text-sm">Online</p>
                </div>
              </div>
            </div>
            <div className="w-full pr-16">
              <hr className="text-[#E8E6EA] w-full ml-16" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex space-x-2">
              <button className="size-14 bg-gradient-to-r from-[#9F2A7D] via-[#D03963] to-[#F27023] rounded-full flex items-center justify-center">
                <div className="rounded-full bg-white size-12 p-1">
                  <div className="size-full rounded-full">
                    <img src="/swipify-icon.png" className="size-full" />
                  </div>
                </div>
              </button>
              <div>
                <p className="font-semibold text-lg">Grace</p>
                <div className="flex justify-center items-center space-x-0.5">
                  <div className="bg-[#E94057] size-2 rounded-full" />
                  <p className="text-[#999999] text-sm">Online</p>
                </div>
              </div>
            </div>
            <div className="w-full pr-16">
              <hr className="text-[#E8E6EA] w-full ml-16" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex space-x-2">
              <button className="size-14 bg-gradient-to-r from-[#9F2A7D] via-[#D03963] to-[#F27023] rounded-full flex items-center justify-center">
                <div className="rounded-full bg-white size-12 p-1">
                  <div className="size-full rounded-full">
                    <img src="/swipify-icon.png" className="size-full" />
                  </div>
                </div>
              </button>
              <div>
                <p className="font-semibold text-lg">Grace</p>
                <div className="flex justify-center items-center space-x-0.5">
                  <div className="bg-[#E94057] size-2 rounded-full" />
                  <p className="text-[#999999] text-sm">Online</p>
                </div>
              </div>
            </div>
            <div className="w-full pr-16">
              <hr className="text-[#E8E6EA] w-full ml-16" />
            </div>
          </div>{" "}
          <div className="space-y-1">
            <div className="flex space-x-2">
              <button className="size-14 bg-gradient-to-r from-[#9F2A7D] via-[#D03963] to-[#F27023] rounded-full flex items-center justify-center">
                <div className="rounded-full bg-white size-12 p-1">
                  <div className="size-full rounded-full">
                    <img src="/swipify-icon.png" className="size-full" />
                  </div>
                </div>
              </button>
              <div>
                <p className="font-semibold text-lg">Grace</p>
                <div className="flex justify-center items-center space-x-0.5">
                  <div className="bg-[#E94057] size-2 rounded-full" />
                  <p className="text-[#999999] text-sm">Online</p>
                </div>
              </div>
            </div>
            <div className="w-full pr-16">
              <hr className="text-[#E8E6EA] w-full ml-16" />
            </div>
          </div>{" "}
          <div className="space-y-1">
            <div className="flex space-x-2">
              <button className="size-14 bg-gradient-to-r from-[#9F2A7D] via-[#D03963] to-[#F27023] rounded-full flex items-center justify-center">
                <div className="rounded-full bg-white size-12 p-1">
                  <div className="size-full rounded-full">
                    <img src="/swipify-icon.png" className="size-full" />
                  </div>
                </div>
              </button>
              <div>
                <p className="font-semibold text-lg">Grace</p>
                <div className="flex justify-center items-center space-x-0.5">
                  <div className="bg-[#E94057] size-2 rounded-full" />
                  <p className="text-[#999999] text-sm">Online</p>
                </div>
              </div>
            </div>
            <div className="w-full pr-16">
              <hr className="text-[#E8E6EA] w-full ml-16" />
            </div>
          </div>{" "}
          <div className="space-y-1">
            <div className="flex space-x-2">
              <button className="size-14 bg-gradient-to-r from-[#9F2A7D] via-[#D03963] to-[#F27023] rounded-full flex items-center justify-center">
                <div className="rounded-full bg-white size-12 p-1">
                  <div className="size-full rounded-full">
                    <img src="/swipify-icon.png" className="size-full" />
                  </div>
                </div>
              </button>
              <div>
                <p className="font-semibold text-lg">Grace</p>
                <div className="flex justify-center items-center space-x-0.5">
                  <div className="bg-[#E94057] size-2 rounded-full" />
                  <p className="text-[#999999] text-sm">Online</p>
                </div>
              </div>
            </div>
            <div className="w-full pr-16">
              <hr className="text-[#E8E6EA] w-full ml-16" />
            </div>
          </div>{" "}
          <div className="space-y-1">
            <div className="flex space-x-2">
              <button className="size-14 bg-gradient-to-r from-[#9F2A7D] via-[#D03963] to-[#F27023] rounded-full flex items-center justify-center">
                <div className="rounded-full bg-white size-12 p-1">
                  <div className="size-full rounded-full">
                    <img src="/swipify-icon.png" className="size-full" />
                  </div>
                </div>
              </button>
              <div>
                <p className="font-semibold text-lg">Grace</p>
                <div className="flex justify-center items-center space-x-0.5">
                  <div className="bg-[#E94057] size-2 rounded-full" />
                  <p className="text-[#999999] text-sm">Online</p>
                </div>
              </div>
            </div>
            <div className="w-full pr-16">
              <hr className="text-[#E8E6EA] w-full ml-16" />
            </div>
          </div>{" "}
          <div className="space-y-1">
            <div className="flex space-x-2">
              <button className="size-14 bg-gradient-to-r from-[#9F2A7D] via-[#D03963] to-[#F27023] rounded-full flex items-center justify-center">
                <div className="rounded-full bg-white size-12 p-1">
                  <div className="size-full rounded-full">
                    <img src="/swipify-icon.png" className="size-full" />
                  </div>
                </div>
              </button>
              <div>
                <p className="font-semibold text-lg">Grace</p>
                <div className="flex justify-center items-center space-x-0.5">
                  <div className="bg-[#E94057] size-2 rounded-full" />
                  <p className="text-[#999999] text-sm">Online</p>
                </div>
              </div>
            </div>
            <div className="w-full pr-16">
              <hr className="text-[#E8E6EA] w-full ml-16" />
            </div>
          </div>{" "}
          <div className="space-y-1">
            <div className="flex space-x-2">
              <button className="size-14 bg-gradient-to-r from-[#9F2A7D] via-[#D03963] to-[#F27023] rounded-full flex items-center justify-center">
                <div className="rounded-full bg-white size-12 p-1">
                  <div className="size-full rounded-full">
                    <img src="/swipify-icon.png" className="size-full" />
                  </div>
                </div>
              </button>
              <div>
                <p className="font-semibold text-lg">Grace</p>
                <div className="flex justify-center items-center space-x-0.5">
                  <div className="bg-[#E94057] size-2 rounded-full" />
                  <p className="text-[#999999] text-sm">Online</p>
                </div>
              </div>
            </div>
            <div className="w-full pr-16">
              <hr className="text-[#E8E6EA] w-full ml-16" />
            </div>
          </div>{" "}
          <div className="space-y-1">
            <div className="flex space-x-2">
              <button className="size-14 bg-gradient-to-r from-[#9F2A7D] via-[#D03963] to-[#F27023] rounded-full flex items-center justify-center">
                <div className="rounded-full bg-white size-12 p-1">
                  <div className="size-full rounded-full">
                    <img src="/swipify-icon.png" className="size-full" />
                  </div>
                </div>
              </button>
              <div>
                <p className="font-semibold text-lg">Grace</p>
                <div className="flex justify-center items-center space-x-0.5">
                  <div className="bg-[#E94057] size-2 rounded-full" />
                  <p className="text-[#999999] text-sm">Online</p>
                </div>
              </div>
            </div>
            <div className="w-full pr-16">
              <hr className="text-[#E8E6EA] w-full ml-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
