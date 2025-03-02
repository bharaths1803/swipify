import { Camera, CameraIcon, Loader, LucideCamera, X } from "lucide-react";
import { useMatchStore } from "../store/useMatchStore";
import { useNavigate } from "react-router-dom";
import { useProfileStore } from "../store/useProfileStore";
import { useRef, useState } from "react";

const Profile = () => {
  const { isLoggingout, logout } = useMatchStore();
  const { authUser } = useMatchStore();
  const { isUpdatingProfile, updateProfile } = useProfileStore();
  const navigate = useNavigate();
  const imageUploadInputBoxRef = useRef();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  const [updateData, setUpdateData] = useState({
    firstName: authUser?.firstName,
    lastName: authUser?.lastName,
    age: authUser?.age,
    gender: authUser?.gender,
    genderPreference: authUser?.genderPreference,
    profilePic: "",
    bio: authUser?.bio,
  });

  const isValidUpdateData = () => {
    if (
      !updateData.firstName ||
      !updateData.lastName ||
      !updateData.age ||
      !updateData.gender ||
      !updateData.genderPreference
    ) {
      toast.error("All fields are required");
      return false;
    }
    if (updateData.firstName.length + updateData.lastName.length > 16) {
      toast.error("Username can not exceed 16 characters");
      return false;
    }

    if (updateData.age < 18) {
      toast.error("You must be at least 18 years old to swipe");
      return false;
    }
    return true;
  };

  const loadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64Image = reader.result;
      if (!base64Image.startsWith("data:image/")) {
        toast.error("Upload an image only");
        return;
      }
      setUpdateData({ ...updateData, profilePic: base64Image });
    };
  };

  const handleImageUpload = () => {
    if (imageUploadInputBoxRef) {
      imageUploadInputBoxRef.current.click();
    }
  };

  const handleCloseProfile = () => {
    navigate("/");
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    if (isValidUpdateData()) updateProfile(updateData);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-white p-4 border border-[#eeeeee] rounded-md">
        <div className="h-full space-y-4">
          <div className="flex justify-between">
            <h1 className="font-bold text-3xl text-center w-full">PROFILE</h1>
            <button
              className="flex justify-center items-center border p-2 rounded-lg border-[#eeeeee] hover:cursor-pointer hover:bg-[#f4f4f4] active:bg-[#d6d6d6]"
              onClick={handleCloseProfile}
            >
              <X className="size-5" />
            </button>
          </div>
          <div className="flex justify-center items-center">
            <div className="size-16 rounded-xl bg-[#dcdcdc] relative flex justify-center items-center">
              <img
                src={
                  updateData?.profilePic ||
                  authUser?.profilePicUrl ||
                  "/swipify-icon.png"
                }
                className="size-full"
              />
              <button
                className="rounded-full border-2 border-white bg-[#E94057] absolute bottom-0 right-0 p-1 text-white translate-x-1/3 translate-y-1/3 hover:scale-125 transform transition duration-500 hover:cursor-pointer"
                onClick={handleImageUpload}
              >
                <input
                  className="hidden"
                  type="file"
                  onChange={loadImage}
                  ref={imageUploadInputBoxRef}
                />
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/android/24/FFFFFF/camera.png"
                  alt="camera"
                />
              </button>
            </div>
          </div>
          <div className="h-full flex flex-col justify-center items-center space-y-4">
            <form className="w-xs md:w-md h-full">
              <div className="h-full space-y-5 flex flex-col justify-center items-center">
                <div className="w-full relative">
                  <input
                    className="border border-[#eeeeee] w-full h-12 rounded-md placeholder:text-[#a2a2a2] pl-3"
                    placeholder="Bharath"
                    value={updateData.firstName}
                    onChange={(e) =>
                      setUpdateData({
                        ...updateData,
                        firstName: e.target.value,
                      })
                    }
                  />
                  <label className="absolute top-0 left-0 -translate-y-2.5 translate-x-3 text-[#a2a2a2] bg-white text-xs">
                    First name
                  </label>
                </div>
                <div className="w-full relative">
                  <input
                    className="border border-[#eeeeee] w-full h-12 rounded-md placeholder:text-[#a2a2a2] pl-3"
                    placeholder="Seshadri"
                    value={updateData.lastName}
                    onChange={(e) =>
                      setUpdateData({ ...updateData, lastName: e.target.value })
                    }
                  />
                  <label className="absolute top-0 left-0 -translate-y-2.5 translate-x-3 text-[#a2a2a2] bg-white text-xs">
                    Last name
                  </label>
                </div>
                <div className="w-full relative">
                  <input
                    className="border border-[#eeeeee] w-full h-12 rounded-md placeholder:text-[#a2a2a2] pl-3"
                    placeholder="18"
                    type="number"
                    min="18"
                    max="100"
                    value={updateData.age}
                    onChange={(e) =>
                      setUpdateData({ ...updateData, age: e.target.value })
                    }
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
                    <button
                      className={`${
                        updateData.gender === "male"
                          ? "bg-[#E94057] text-white"
                          : "bg-white text-black border border-[#eeeeee]"
                      } p-3 rounded-md`}
                      onClick={(e) => {
                        e.preventDefault();
                        setUpdateData({ ...updateData, gender: "male" });
                      }}
                    >
                      Male
                    </button>
                    <button
                      className={`${
                        updateData.gender === "female"
                          ? "bg-[#E94057] text-white"
                          : "bg-white text-black border border-[#eeeeee]"
                      } p-3 rounded-md`}
                      onClick={(e) => {
                        e.preventDefault();
                        setUpdateData({ ...updateData, gender: "female" });
                      }}
                    >
                      Female
                    </button>
                  </div>
                </div>
                <div className="w-full">
                  <div className="text-[#a2a2a2] text-xs pl-3">
                    Gender Preference
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    <button
                      className={`${
                        updateData.genderPreference === "male"
                          ? "bg-[#E94057] text-white"
                          : "bg-white text-black border border-[#eeeeee]"
                      } p-3 rounded-md`}
                      onClick={(e) => {
                        e.preventDefault();
                        setUpdateData({
                          ...updateData,
                          genderPreference: "male",
                        });
                      }}
                    >
                      Male
                    </button>
                    <button
                      className={`${
                        updateData.genderPreference === "female"
                          ? "bg-[#E94057] text-white"
                          : "bg-white text-black border border-[#eeeeee]"
                      } p-3 rounded-md`}
                      onClick={(e) => {
                        e.preventDefault();
                        setUpdateData({
                          ...updateData,
                          genderPreference: "female",
                        });
                      }}
                    >
                      Female
                    </button>
                    <button
                      className={`${
                        updateData.genderPreference === "both"
                          ? "bg-[#E94057] text-white"
                          : "bg-white text-black border border-[#eeeeee]"
                      } p-3 rounded-md`}
                      onClick={(e) => {
                        e.preventDefault();
                        setUpdateData({
                          ...updateData,
                          genderPreference: "both",
                        });
                      }}
                    >
                      Both
                    </button>
                  </div>
                </div>
                <div className="w-full">
                  <button
                    className="bg-[#E94057] text-white p-3 rounded-md w-full hover:bg-red-400 active:bg-red-300 hover:cursor-pointer"
                    onClick={handleUpdateProfile}
                  >
                    {isUpdatingProfile ? (
                      <div className="flex justify-center items-center">
                        <Loader className="size-5 animate-spin" />
                      </div>
                    ) : (
                      "Update Profile"
                    )}
                  </button>
                </div>
                <div className="w-full">
                  <button
                    className="bg-white text-black border border-[#eeeeee] p-3 rounded-md w-full hover:cursor-pointer hover:bg-[#f4f4f4] active:bg-[#d6d6d6]"
                    onClick={handleLogout}
                  >
                    {isLoggingout ? (
                      <div className="flex justify-center items-center">
                        <Loader className="size-5 animate-spin" />
                      </div>
                    ) : (
                      "Logout"
                    )}
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
