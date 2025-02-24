import ChatBody from "../components/ChatBody";
import ChatHeader from "../components/ChatHeader";
import SendMessageInput from "../components/SendMessageInput";

const Chat = () => {
  return (
    <div className="max-h-screen">
      <div className="h-full mx-auto max-w-6xl p-6 space-y-3 flex flex-col max-h-screen">
        <ChatHeader />
        <ChatBody />
        <SendMessageInput />
      </div>
    </div>
  );
};

export default Chat;
