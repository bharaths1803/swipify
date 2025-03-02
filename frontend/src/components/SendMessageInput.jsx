import { SendHorizonal, Smile } from "lucide-react";
import { useMatchStore } from "../store/useMatchStore";
import { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";

const SendMessageInput = () => {
  const {
    selectedUser,
    sendMessage,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useMatchStore();
  const { authUser } = useMatchStore();
  const [text, setText] = useState("");
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const emojiPickerRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(e.target)
      ) {
        setEmojiPickerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    subscribeToMessages();
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      unsubscribeFromMessages();
    };
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setText("");
      return;
    }
    sendMessage({
      text: text.trim(),
    });
    setText("");
  };

  const handleToggleEmojiPicker = (e) => {
    e.preventDefault();
    setEmojiPickerOpen(!emojiPickerOpen);
  };

  const handleEmojiSelect = (e) => {
    setText((text) => text + e.emoji);
  };

  return (
    <form
      className="h-16 mx-6 flex justify-between space-x-3 border border-[#eeeeee] rounded-xl relative"
      onSubmit={handleSendMessage}
    >
      <button
        className="hidden md:block hover:bg-[#f4f4f4] active:bg-[#d6d6d6] rounded-full size-10 p-2 mt-1 text-[#999999]"
        onClick={handleToggleEmojiPicker}
        type="button"
      >
        <Smile className="size-6" />
      </button>
      <input
        className="size-full placeholder:text-[#999999] focus:outline-none pl-3 md:pl-0"
        placeholder="Your message"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="flex justify-center items-center text-[#999999] hover:bg-[#f4f4f4] active:bg-[#d6d6d6] h-10 w-11 rounded-full p-2 mt-1"
        onClick={handleSendMessage}
      >
        <SendHorizonal className="size-5" />
      </button>
      {emojiPickerOpen && (
        <div
          className="absolute bottom-14 left-0"
          ref={emojiPickerRef}
          onClick={handleToggleEmojiPicker}
        >
          <EmojiPicker onEmojiClick={handleEmojiSelect} />
        </div>
      )}
    </form>
  );
};

export default SendMessageInput;
