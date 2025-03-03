import { Navigate, Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { useMatchStore } from "./store/useMatchStore";
import { Loader } from "lucide-react";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const { authUser, isCheckingAuth } = useMatchStore();

  if (!authUser && isCheckingAuth) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route
          path="/signup"
          element={!authUser ? <Signup /> : <Navigate to={"/"} />}
        />
        <Route
          path="/login"
          element={!authUser ? <Login /> : <Navigate to={"/"} />}
        />
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/profile"
          element={authUser ? <Profile /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/chat"
          element={authUser ? <Chat /> : <Navigate to={"/login"} />}
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
