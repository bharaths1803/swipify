import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Loader } from "lucide-react";
import toast from "react-hot-toast";

const Login = () => {
  const { login, isLoggingin } = useAuthStore();

  const [showPassword, setShowPassword] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const isValidLoginData = () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{3,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!loginData.email || !loginData.password) {
      toast.error("All fields are required");
      return false;
    }
    if (!passwordRegex.test(loginData.password)) {
      toast.error(
        "Password must contain at least 3 characters, 1 uppercase, 1 lowercase, 1 special character, and 1 digit"
      );
      return false;
    }
    if (!emailRegex.test(loginData.email)) {
      toast.error("Invalid email");
      return false;
    }
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (isValidLoginData()) login(loginData);
  };

  return (
    <div className="h-screen grid grid-cols-1 xl:grid-cols-2">
      <div className="bg-[#E94057] hidden xl:block">
        <div className="mt-20 flex justify-center items-center space-x-5">
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
          <h1 className="mt-20 font-bold text-3xl text-center">LOGIN</h1>
          <form className="w-xs md:w-md h-full" onSubmit={handleLogin}>
            <div className="h-full space-y-5 flex flex-col justify-center items-center">
              <div className="w-full relative">
                <input
                  className="border border-[#eeeeee] w-full h-12 rounded-md placeholder:text-[#a2a2a2] pl-3"
                  placeholder="someone@example.com"
                  type="email"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
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
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
                <label className="absolute top-0 left-0 -translate-y-2.5 translate-x-3 text-[#a2a2a2] bg-white text-xs">
                  Password
                </label>
              </div>
              <div className="w-full space-y-1">
                <button
                  className="bg-[#E94057] text-white p-3 rounded-md w-full hover:bg-red-400 active:bg-red-300 hover:cursor-pointer"
                  onClick={handleLogin}
                >
                  {isLoggingin ? (
                    <div className="flex justify-center items-center">
                      <Loader className="size-5 animate-spin" />
                    </div>
                  ) : (
                    "Login"
                  )}
                </button>
                <div className="text-xs text-center">
                  New to swipify?{" "}
                  <Link
                    className="text-[#5421f0] hover:underline"
                    to={"/signup"}
                  >
                    Signup
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

export default Login;
