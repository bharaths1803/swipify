import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Swipe from "../components/Swipe";
import { useMatchStore } from "../store/useMatchStore";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { authUser } = useMatchStore();
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleOpenSidebar = () => {
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  const handleNavigateToProfilePage = () => {
    navigate("/profile");
  };

  return (
    <div className="h-screen flex">
      <Sidebar onClose={handleCloseSidebar} open={sidebarOpen} />
      <div
        className={`w-full flex flex-col bg-cyan-100 ${
          sidebarOpen ? "hidden md:block" : "block"
        } overflow-hidden`}
      >
        <div className="w-full h-16 bg-pink-400 flex justify-between">
          <div className="h-14 ml-2 flex space-x-3 justify-center items-center">
            <button onClick={handleOpenSidebar}>
              <img src="/swipify-icon.png" className="size-12" />
            </button>
            <div className="text-white font-bold text-xl">Swipify</div>
          </div>
          <div className="flex justify-center items-center mr-3 space-x-2">
            <button
              className="size-12 ml-2 flex justify-center items-center rounded-full border-4 border-white hover:scale-125 transform transition duration-500 hover:cursor-pointer"
              onClick={handleNavigateToProfilePage}
            >
              <img
                src={authUser?.profilePicUrl || "/swipify-icon.png"}
                className="size-10 rounded-full"
              />
            </button>
            <div className="text-white font-semibold">{`${authUser?.firstName} ${authUser?.lastName}`}</div>
          </div>
        </div>
        <div className="w-full h-screen flex">
          <Swipe open={sidebarOpen} />
        </div>
      </div>
    </div>
  );
};

export default Home;
