import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config();

const imageUrls = [
  "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2224&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1578608712688-36b5be8823dc?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?q=80&w=2233&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=2233&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=2234&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2233&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2233&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=2233&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

let users = [
  {
    firstName: "Goku",
    lastName: "Son",
    email: "Goku@gmail.com",
    password: "Goku@1",
    age: 25,
    gender: "male",
    genderPreference: "female",
    profilePicUrl: imageUrls[0],
    bio: "I'm Goku, the strongest Saiyan! I love fighting strong opponents, eating a LOT, and protecting the world. Ready for an adventure?",
  },
  {
    firstName: "Naruto",
    lastName: "Uzumaki",
    email: "Naruto@gmail.com",
    password: "Naruto@1",
    age: 22,
    gender: "male",
    genderPreference: "female",
    profilePicUrl: imageUrls[1],
    bio: "Believe it! I'm Naruto Uzumaki, the future Hokage! I never give up, and I'm always up for a good bowl of ramen. Wanna join me?",
  },
  {
    firstName: "Luffy",
    lastName: "Monkey D.",
    email: "Luffy@gmail.com",
    password: "Luffy@1",
    age: 23,
    gender: "male",
    genderPreference: "female",
    profilePicUrl: imageUrls[2],
    bio: "I’m Monkey D. Luffy, the future Pirate King! If you love adventure, treasure, and endless fun, let’s set sail together!",
  },
  {
    firstName: "Hinata",
    lastName: "Hyuga",
    email: "Hinata@gmail.com",
    password: "Hinata@1",
    age: 21,
    gender: "female",
    genderPreference: "male",
    profilePicUrl: imageUrls[3],
    bio: "I’m Hinata. Soft-spoken but strong, I believe in love, kindness, and standing by those who matter. Let’s grow together!",
  },
  {
    firstName: "Mikasa",
    lastName: "Ackerman",
    email: "Mikasa@gmail.com",
    password: "Mikasa@1",
    age: 24,
    gender: "female",
    genderPreference: "male",
    profilePicUrl: imageUrls[4],
    bio: "I’m Mikasa. I protect what I love with my life. If you’re worth it, I’ll never let go.",
  },
  {
    firstName: "Levi",
    lastName: "Ackerman",
    email: "Levi@gmail.com",
    password: "Levi@1",
    age: 30,
    gender: "male",
    genderPreference: "female",
    profilePicUrl: imageUrls[5],
    bio: "I'm Levi. Strong, disciplined, and a clean freak. Only serious people need apply.",
  },
  {
    firstName: "Sasuke",
    lastName: "Uchiha",
    email: "Sasuke@gmail.com",
    password: "Sasuke@1",
    age: 23,
    gender: "male",
    genderPreference: "female",
    profilePicUrl: imageUrls[6],
    bio: "I'm Sasuke. Dark, mysterious, and on a path of redemption. Can you handle me?",
  },
  {
    firstName: "Eren",
    lastName: "Yeager",
    email: "Eren@gmail.com",
    password: "Eren@1",
    age: 22,
    gender: "male",
    genderPreference: "female",
    profilePicUrl: imageUrls[7],
    bio: "I'm Eren. Passionate, driven, and ready to break free. Join me in my fight for freedom.",
  },
  {
    firstName: "Nami",
    lastName: "Nami",
    email: "Nami@gmail.com",
    password: "Nami@1",
    age: 22,
    gender: "female",
    genderPreference: "male",
    profilePicUrl: imageUrls[8],
    bio: "I'm Nami. Smart, sassy, and always looking for adventure. Can you keep up?",
  },
  {
    firstName: "Zoro",
    lastName: "Roronoa",
    email: "Zoro@gmail.com",
    password: "Zoro@1",
    age: 24,
    gender: "male",
    genderPreference: "female",
    profilePicUrl: imageUrls[9],
    bio: "I'm Zoro. Swords, honor, and loyalty are my way of life. Join me, if you're strong enough.",
  },
];

const seedUsers = async () => {
  try {
    users = await Promise.all(
      users.map(async (user) => {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        return { ...user, password: hashedPassword };
      })
    );

    await Promise.all(
      users.map(async (user) => {
        await User.create(user);
      })
    );

    console.log(`Successfully seeded the database`);
  } catch (error) {
    console.log(`Error in seeding users ${error}`);
  }
};

const deleteTestUsers = async () => {
  try {
    await Promise.all(
      users.map(async (user) => {
        const username = user.username;
        await User.deleteMany({ username });
      })
    );
    console.log(`Test users deleted successfully`);
  } catch (error) {
    console.log(`Error deleting test usrers ${error}`);
  }
};

connectDB();
//deleteTestUsers();
seedUsers();
