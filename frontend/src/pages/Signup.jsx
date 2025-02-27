import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";

const Signup = () => {
  const { signup, isSigningup } = useAuthStore();

  const [showPassword, setShowPassword] = useState(false);

  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: 18,
    password: "",
    gender: "male",
    genderPreference: "female",
  });

  const isValidSignupData = () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{3,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (
      !signupData.firstName ||
      !signupData.lastName ||
      !signupData.email ||
      !signupData.age ||
      !signupData.password ||
      !signupData.gender ||
      !signupData.genderPreference
    ) {
      toast.error("All fields are required");
      return false;
    }
    if (!passwordRegex.test(signupData.password)) {
      toast.error(
        "Password must contain at least 3 characters, 1 uppercase, 1 lowercase, 1 special character, and 1 digit"
      );
      return false;
    }
    if (!emailRegex.test(signupData.email)) {
      toast.error("Invalid email");
      return false;
    }

    if (signupData.firstName.length + signupData.lastName.length > 16) {
      toast.error("Username can not exceed 16 characters");
      return false;
    }

    if (signupData.age < 18) {
      toast.error("You must be at least 18 years old to swipe");
      return false;
    }
    return true;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (isValidSignupData()) signup(signupData);
  };

  return (
    <div className="h-screen grid grid-cols-1 xl:grid-cols-2">
      <div className="bg-[#E94057] hidden xl:block">
        <div className="mt-10 flex justify-center items-center space-x-5">
          <h1 className="font-bold text-3xl">WELCOME TO SWIPIFY!</h1>
          <div className="size-13">
            <img src="/swipify-icon.png" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          <img src="/login-bg.png" />
        </div>
      </div>
      <div className="h-full">
        <div className="h-full flex flex-col justify-center items-center space-y-4">
          <h1 className="mt-10 font-bold text-3xl text-center">
            CREATE AN ACCOUNT
          </h1>
          <form className="w-xs md:w-md h-full" onSubmit={handleSignup}>
            <div className="h-full space-y-5 flex flex-col justify-center items-center">
              <div className="w-full relative">
                <input
                  className="border border-[#eeeeee] w-full h-12 rounded-md placeholder:text-[#a2a2a2] pl-3"
                  placeholder="Bharath"
                  value={signupData.firstName}
                  onChange={(e) =>
                    setSignupData({ ...signupData, firstName: e.target.value })
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
                  value={signupData.lastName}
                  onChange={(e) =>
                    setSignupData({ ...signupData, lastName: e.target.value })
                  }
                />
                <label className="absolute top-0 left-0 -translate-y-2.5 translate-x-3 text-[#a2a2a2] bg-white text-xs">
                  Last name
                </label>
              </div>
              <div className="w-full relative">
                <input
                  className="border border-[#eeeeee] w-full h-12 rounded-md placeholder:text-[#a2a2a2] pl-3"
                  placeholder="someone@example.com"
                  type="email"
                  value={signupData.email}
                  onChange={(e) =>
                    setSignupData({ ...signupData, email: e.target.value })
                  }
                />
                <label className="absolute top-0 left-0 -translate-y-2.5 translate-x-3 text-[#a2a2a2] bg-white text-xs">
                  Email
                </label>
              </div>
              <div className="w-full relative">
                <input
                  className="border border-[#eeeeee] w-full h-12 rounded-md placeholder:text-[#a2a2a2] pl-3"
                  placeholder="••••••"
                  type="password"
                  value={signupData.password}
                  onChange={(e) =>
                    setSignupData({ ...signupData, password: e.target.value })
                  }
                />
                <label className="absolute top-0 left-0 -translate-y-2.5 translate-x-3 text-[#a2a2a2] bg-white text-xs">
                  Password
                </label>
              </div>
              <div className="w-full relative">
                <input
                  className="border border-[#eeeeee] w-full h-12 rounded-md placeholder:text-[#a2a2a2] pl-3"
                  placeholder="18"
                  type="number"
                  min="18"
                  max="100"
                  value={signupData.age}
                  onChange={(e) =>
                    setSignupData({ ...signupData, age: e.target.value })
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
                      signupData.gender === "male"
                        ? "bg-[#E94057] text-white"
                        : "bg-white text-black border border-[#eeeeee]"
                    } p-3 rounded-md`}
                    onClick={(e) => {
                      e.preventDefault();
                      setSignupData({ ...signupData, gender: "male" });
                    }}
                  >
                    Male
                  </button>
                  <button
                    className={`${
                      signupData.gender === "female"
                        ? "bg-[#E94057] text-white"
                        : "bg-white text-black border border-[#eeeeee]"
                    } p-3 rounded-md`}
                    onClick={(e) => {
                      e.preventDefault();
                      setSignupData({ ...signupData, gender: "female" });
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
                      signupData.genderPreference === "male"
                        ? "bg-[#E94057] text-white"
                        : "bg-white text-black border border-[#eeeeee]"
                    } p-3 rounded-md`}
                    onClick={(e) => {
                      e.preventDefault();
                      setSignupData({
                        ...signupData,
                        genderPreference: "male",
                      });
                    }}
                  >
                    Male
                  </button>
                  <button
                    className={`${
                      signupData.genderPreference === "female"
                        ? "bg-[#E94057] text-white"
                        : "bg-white text-black border border-[#eeeeee]"
                    } p-3 rounded-md`}
                    onClick={(e) => {
                      e.preventDefault();
                      setSignupData({
                        ...signupData,
                        genderPreference: "female",
                      });
                    }}
                  >
                    Female
                  </button>
                  <button
                    className={`${
                      signupData.genderPreference === "both"
                        ? "bg-[#E94057] text-white"
                        : "bg-white text-black border border-[#eeeeee]"
                    } p-3 rounded-md`}
                    onClick={(e) => {
                      e.preventDefault();
                      setSignupData({
                        ...signupData,
                        genderPreference: "both",
                      });
                    }}
                  >
                    Both
                  </button>
                </div>
              </div>
              <div className="w-full space-y-1">
                <button
                  className="bg-[#E94057] text-white p-3 rounded-md w-full hover:bg-red-400 hover:cursor-pointer"
                  onClick={handleSignup}
                >
                  {isSigningup ? (
                    <div className="flex justify-center items-center">
                      <Loader className="size-5 animate-spin" />
                    </div>
                  ) : (
                    "Signup"
                  )}
                </button>
                <div className="text-xs text-center">
                  Already have an account?{" "}
                  <Link
                    className="text-[#5421f0] hover:underline"
                    to={"/login"}
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
