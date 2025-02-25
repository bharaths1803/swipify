import { Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Test from "./components/Test";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/testing" element={<Test />} />
    </Routes>
  );
}

export default App;
