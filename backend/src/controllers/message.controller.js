import cloudinary from "../lib/cloudinary.js";
import { getUserSocketId, io } from "../lib/socket.js";
import Message from "../models/message.model.js";

export const getMessages = async (req, res) => {
  try {
    const { toChatUserId } = req.params;
    const currentUserId = req.user._id;
    let messages = await Message.find({
      $or: [
        { senderId: currentUserId, receiverId: toChatUserId },
        { senderId: toChatUserId, receiverId: currentUserId },
      ],
    });
    await Message.updateMany(
      { senderId: toChatUserId, receiverId: currentUserId, seen: false },
      { $set: { seen: true } }
    );
    messages = messages.map((message) => ({
      ...message.toObject(),
      seen: message.senderId === toChatUserId ? true : message.seen,
    }));

    const receiverSocketId = getUserSocketId(toChatUserId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("seen", messages);
    }
    res.status(201).json({ messages });
  } catch (error) {
    console.log(`Error in get messages controller`);
    res.status(500).json({ message: `Internal server error` });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { receiverId } = req.params;
    const { text } = req.body;
    const senderId = req.user._id;
    let message = new Message({
      senderId,
      receiverId,
      text,
    });
    const receiverSocketId = getUserSocketId(receiverId);
    if (receiverSocketId) {
      message._doc.seen = true;
      await message.save();
      io.to(receiverSocketId).emit("newMessage", message);
    }
    await message.save();
    res.status(200).json({ message });
  } catch (error) {
    console.log(`Error in send messages controller`);
    res.status(500).json({ message: `Internal server error` });
  }
};
