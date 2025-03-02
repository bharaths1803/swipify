import { CheckCheckIcon } from "lucide-react";
import { useMatchStore } from "../store/useMatchStore";
import { useEffect, useRef } from "react";

const ChatBody = () => {
  const {
    messages,
    isMessagesLoading,
    getMessages,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useMatchStore();
  const { authUser } = useMatchStore();

  const lastMessageRef = useRef();

  useEffect(() => {
    getMessages();
  }, []);

  useEffect(() => {
    subscribeToMessages();
    return () => unsubscribeFromMessages();
  }, [subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    if (messages && lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behaviour: "smooth" });
    }
  }, [messages]);

  const formatTo12HourTime = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <div className="flex flex-col grow overflow-y-auto space-y-4 px-6 no-scrollbar h-screen">
      {isMessagesLoading &&
        [1, 2, 3, 4, 5, 6].map((val, idx) => {
          const isSender = val % 2 == 1;
          return (
            <div className="w-full">
              <div
                className={`w-full flex ${
                  isSender ? "justify-end" : "justify-start"
                } `}
              >
                <div className="space-y-3">
                  <div
                    className={`h-10 w-sm bg-gray-400 rounded-xl ${
                      isSender ? "rounded-br-none" : "rounded-bl-none"
                    } animate-pulse`}
                  />
                  <div
                    className={`w-full flex ${
                      isSender ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`h-10 w-1/2 bg-gray-400 rounded-xl ${
                        isSender ? "rounded-br-none" : "rounded-bl-none"
                      } animate-pulse`}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      {!isMessagesLoading &&
        messages.length > 0 &&
        messages.map((message, idx) => {
          const isSender = message.senderId === authUser._id;
          return (
            <div className="w-full" ref={lastMessageRef}>
              <div
                className={`w-full flex ${
                  isSender ? "justify-end" : "justify-start"
                } `}
              >
                <div
                  className={`p-4 bg-[#fdf1f3] rounded-xl ${
                    isSender ? "rounded-br-none" : "rounded-bl-none"
                  }`}
                >
                  {message.text}
                </div>
              </div>
              <div
                className={`w-full flex ${
                  isSender ? "justify-end" : "justify-start"
                } items-center space-x-0.5`}
              >
                <p className="text-[#999999]">
                  {formatTo12HourTime(message.createdAt)}
                </p>
                {isSender && message.seen && (
                  <CheckCheckIcon className="size-4" />
                )}
              </div>
            </div>
          );
        })}

      {!isMessagesLoading && messages.length === 0 && (
        <div className="flex justify-center items-center h-full w-full">
          <div className="animate-ping">
            <img src="/heart.png" width={50} height={50} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBody;
