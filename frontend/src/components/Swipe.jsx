import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { Heart, X } from "lucide-react";
import { useState } from "react";

const Swipe = ({ open }) => {
  const [cards, setCards] = useState(cardData);

  return (
    <div className={`w-full flex justify-center items-center relative`}>
      {cards.map((card, idx) => {
        return (
          <div className="absolute space-y-6">
            <Card
              key={card.id}
              cards={cards}
              setCards={setCards}
              id={card.id}
              url={card.url}
            />
            <div className="flex space-x-4 ml-3">
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Card = ({ cards, setCards, id, url }) => {
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
      setCards((prevCards) => prevCards.filter((ele) => ele.id !== id));
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
      className="space-y-3 shadow-sm shadow-gray-200 origin-bottom rounded-lg border border-gray-200 bg-white"
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
        <img src={url} className="h-96 w-72 object-cover pointer-events-none" />
      </div>
      <div className="font-semibold text-2xl pl-4 pb-3 text-left">
        Grace, 23
      </div>
    </motion.button>
  );
};

const cardData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2224&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1578608712688-36b5be8823dc?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default Swipe;
