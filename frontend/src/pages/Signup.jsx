const Signup = () => {
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
          <h1 className="mt-20 font-bold text-3xl text-center">
            CREATE AN ACCOUNT
          </h1>
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
                <input
                  className="border border-[#eeeeee] w-full h-12 rounded-md placeholder:text-black pl-3"
                  placeholder="••••••"
                  type="password"
                />
                <label className="absolute top-0 left-0 -translate-y-2.5 translate-x-3 text-[#a2a2a2] bg-white text-xs">
                  Password
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
                  Signup
                </button>
                <div className="text-xs text-center">
                  Already have an account?{" "}
                  <span className="text-[#5421f0] hover:underline">Login</span>
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
