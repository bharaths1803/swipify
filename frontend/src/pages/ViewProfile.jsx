import { Camera, CameraIcon, LucideCamera, X } from "lucide-react";

const ViewProfile = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-white p-4 border border-[#eeeeee] rounded-md">
        <div className="h-full space-y-4">
          <div className="flex justify-between">
            <h1 className="font-bold text-3xl text-center w-full">PROFILE</h1>
            <div className="flex justify-center items-center border p-2 rounded-lg border-[#eeeeee]">
              <X className="size-5" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="size-16 rounded-xl bg-[#dcdcdc] relative">
              <img src="/swipify-icon.png" />
            </div>
          </div>
          <div className="h-full flex flex-col justify-center items-center space-y-4">
            <form className="w-xs md:w-md h-full">
              <div className="h-full space-y-5 flex flex-col justify-center items-center">
                <div className="w-full relative">
                  <div className="border border-[#eeeeee] w-full h-12 rounded-md p-3">
                    Bharath
                  </div>
                  <label className="absolute top-0 left-0 -translate-y-2.5 translate-x-3 text-[#a2a2a2] bg-white text-xs">
                    First name
                  </label>
                </div>
                <div className="w-full relative">
                  <div className="border border-[#eeeeee] w-full h-12 rounded-md p-3">
                    Bharath
                  </div>
                  <label className="absolute top-0 left-0 -translate-y-2.5 translate-x-3 text-[#a2a2a2] bg-white text-xs">
                    Last name
                  </label>
                </div>
                <div className="w-full relative">
                  <div className="border border-[#eeeeee] w-full h-20 rounded-md p-2 no-scrollbar">
                    I am ...
                  </div>
                  <label className="absolute top-0 left-0 -translate-y-2.5 translate-x-3 text-[#a2a2a2] bg-white text-xs">
                    Bio
                  </label>
                </div>
                <div className="w-full relative">
                  <div className="border border-[#eeeeee] w-full h-12 rounded-md p-3">
                    Bharath
                  </div>
                  <label className="absolute top-0 left-0 -translate-y-2.5 translate-x-3 text-[#a2a2a2] bg-white text-xs">
                    Age
                  </label>
                </div>
                <div className="w-full">
                  <div className="text-[#a2a2a2] bg-white text-xs pl-3">
                    Gender
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className="bg-[#E94057] text-white p-3 rounded-md">
                      Male
                    </div>
                    <div className="p-3 rounded-md border border-[#eeeeee]">
                      Female
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="text-[#a2a2a2] bg-white text-xs pl-3">
                    Gender Preference
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    <div className="bg-[#E94057] text-white p-3 rounded-md">
                      Male
                    </div>
                    <div className="p-3 rounded-md border border-[#eeeeee]">
                      Female
                    </div>
                    <div className="p-3 rounded-md border border-[#eeeeee]">
                      Both
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
