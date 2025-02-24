import { Send, SendHorizonal } from "lucide-react";

const SendMessageInput = () => {
  return (
    <div className="h-16 mx-6 flex justify-between space-x-3 border border-[#eeeeee] rounded-xl">
      <input
        className="size-full placeholder:text-[#999999] pl-4 focus:outline-none"
        placeholder="Your message"
      />
      <div className="flex justify-center items-center pr-3 text-[#999999]">
        <SendHorizonal className="size-5" />
      </div>
    </div>
  );
};

export default SendMessageInput;
