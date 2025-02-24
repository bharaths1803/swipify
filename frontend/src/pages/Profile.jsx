import { Camera, CameraIcon, LucideCamera, X } from "lucide-react";

const Profile = () => {
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
              <div className="rounded-full border-2 border-white bg-[#E94057] absolute bottom-0 right-0 p-1 text-white translate-x-1/3 translate-y-1/3">
                <input className="hidden" type="file" />
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/android/24/FFFFFF/camera.png"
                  alt="camera"
                />
              </div>
            </div>
          </div>
          <div className="h-full flex flex-col justify-center items-center space-y-4">
            <form className="w-xs md:w-md h-full">
              <div className="h-full space-y-5 flex flex-col justify-center items-center">
                <div className="w-full relative">
                  <input
                    className="border border-[#eeeeee] w-full h-12 rounded-md placeholder:text-black pl-3"
                    placeholder="Bharath"
                  />
                  <label className="absolute top-0 left-0 -translate-y-2.5 translate-x-3 text-[#a2a2a2] bg-white text-xs">
                    First name
                  </label>
                </div>
                <div className="w-full relative">
                  <input
                    className="border border-[#eeeeee] w-full h-12 rounded-md placeholder:text-black pl-3"
                    placeholder="Seshadri"
                  />
                  <label className="absolute top-0 left-0 -translate-y-2.5 translate-x-3 text-[#a2a2a2] bg-white text-xs">
                    Last name
                  </label>
                </div>
                <div className="w-full relative">
                  <textarea
                    className="border border-[#eeeeee] w-full h-20 rounded-md placeholder:text-black p-2 no-scrollbar"
                    maxLength="100"
                    placeholder="I am ..."
                  />
                  <label className="absolute top-0 left-0 -translate-y-2.5 translate-x-3 text-[#a2a2a2] bg-white text-xs">
                    Bio
                  </label>
                </div>
                <div className="w-full relative">
                  <input
                    className="border border-[#eeeeee] w-full h-12 rounded-md placeholder:text-black pl-3"
                    placeholder="18"
                    type="number"
                    min="18"
                    max="100"
                  />
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
                <div className="w-full space-y-1">
                  <button className="bg-[#E94057] text-white p-3 rounded-md w-full">
                    Update Profile
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
