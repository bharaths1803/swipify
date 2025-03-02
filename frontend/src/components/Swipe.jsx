import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useUserStore } from "../store/useUserStore";
import { useMatchStore } from "../store/useMatchStore";

const Swipe = ({ open }) => {
  const { users, isGettingUsers, getUsers } = useUserStore();

  const [cards, setCards] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      setCards([...users]);
    }
  }, [users]);

  return (
    <div className={`w-full flex justify-center items-center relative`}>
      {cards.map((user, idx) => {
        return (
          <div className="absolute space-y-1">
            <Card key={user._id} setCards={setCards} user={user} />
            {/*            <div className="flex space-x-4 ml-3">
              <div
                className="size-20 rounded-full flex justify-center items-center transform transition duration-500 
                            hover:scale-125 font-bold text-green-500 shadow-md shadow-gray-200 hover:filter hover:drop-shadow-2xl bg-white"
              >
                <X className="size-10" />
              </div>
              <div
                className="size-20 rounded-full flex justify-center items-center transform transition duration-500 
                            hover:scale-125 font-bold text-[#E94057] shadow-md shadow-gray-200 hover:filter hover:drop-shadow-2xl bg-white"
              >
                <img src="/heart.png" width={35} height={35} />
              </div>
              <div
                className="size-20 rounded-full flex justify-center items-center transform transition duration-500 
                            hover:scale-125 font-bold text-green-500 shadow-md shadow-gray-200 hover:filter hover:drop-shadow-2xl bg-white"
              >
                <img src="/star-rating.png" width={53} height={53} />
              </div>
            </div>*/}
          </div>
        );
      })}
    </div>
  );
};

const Card = ({ setCards, user }) => {
  const { swipeLeft, swipeRight } = useMatchStore();

  const [draggingRight, setDraggingRight] = useState(false);
  const [draggingLeft, setDraggingLeft] = useState(false);

  const x = useMotionValue(0);

  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const rotate = useTransform(x, [-150, 150], [-18, 18]);

  useMotionValueEvent(x, "change", (latest) => {
    if (latest == 0) {
      setDraggingLeft(false);
      setDraggingRight(false);
    }
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 50) {
      setCards((prevCards) => prevCards.filter((ele) => ele._id !== user._id));
      if (x.get() > 50) {
        swipeRight(user._id);
      } else {
        swipeLeft(user._id);
      }
    }
  };

  const handleDrag = () => {
    if (x.get() > 0) {
      setDraggingLeft(false);
      setDraggingRight(true);
    } else if (x.get() < 0) {
      setDraggingLeft(true);
      setDraggingRight(false);
    }
  };

  return (
    <motion.button
      className="shadow-sm shadow-gray-200 origin-bottom rounded-lg border border-gray-200 bg-white"
      drag="x"
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      style={{ x, opacity, rotate, transition: "0.125s transform" }}
      onDragEnd={handleDragEnd}
      onDrag={handleDrag}
    >
      <div className="relative">
        {(draggingLeft || draggingRight) && (
          <div className="absolute top-0 left-0 translate-x-28 translate-y-40 size-20 rounded-full flex justify-center items-center font-bold text-green-500 bg-white">
            {draggingLeft && <X className="size-10" />}
            {draggingRight && <img src="/heart.png" width={35} height={35} />}
          </div>
        )}
        <img
          src={user.profilePicUrl}
          className="h-96 w-72 object-cover pointer-events-none"
        />
      </div>
      <div className="font-semibold text-lg pl-3 text-left mt-3">
        {user.firstName} {user.lastName}
        {","} {user.age}
      </div>
      <div className="px-4 pb-3 text-left max-w-72 h-16 overflow-y-auto no-scrollbar text-sm mt-0.5">
        {user.bio}
      </div>
    </motion.button>
  );
};

export default Swipe;
