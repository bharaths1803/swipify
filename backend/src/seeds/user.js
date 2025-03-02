import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config();

let users = [
  // Male users (5 prefer female, 5 prefer both)
  {
    firstName: "Goku",
    lastName: "Son",
    email: "Goku@gmail.com",
    password: "Goku@1",
    age: 25,
    gender: "male",
    genderPreference: "female",
    profilePicUrl:
      "https://images.immediate.co.uk/production/volatile/sites/3/2023/03/goku-dragon-ball-guru-824x490-11b2006-e1697471244240.jpg?quality=90&resize=600,400",
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
    profilePicUrl:
      "https://wallpapers-clan.com/wp-content/uploads/2024/02/smiling-naruto-uzumaki-anime-desktop-wallpaper-cover.jpg",
    bio: "Believe it! I'm Naruto Uzumaki, the future Hokage! I never give up, and I'm always up for a good bowl of ramen. Wanna join me?",
  },
  {
    firstName: "Monkey D.",
    lastName: "Luffy",
    email: "Luffy@gmail.com",
    password: "Luffy@1",
    age: 23,
    gender: "male",
    genderPreference: "female",
    profilePicUrl:
      "https://i.pinimg.com/736x/51/09/ba/5109ba1cf72642b6f68a35f37491b340.jpg",
    bio: "I’m Monkey D. Luffy, the future Pirate King! If you love adventure, treasure, and endless fun, let’s set sail together!",
  },
  {
    firstName: "Ichigo",
    lastName: "Kurosaki",
    email: "Ichigo@gmail.com",
    password: "Ichigo@1",
    age: 21,
    gender: "male",
    genderPreference: "female",
    profilePicUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrqqocqvAjzAVEiEVNMQh_-exOnHqJgJkGZg&s",
    bio: "I’m Ichigo Kurosaki. I protect those who matter to me, and I take my duty as a Soul Reaper seriously. But I’m also chill—wanna hang?",
  },
  {
    firstName: "Levi",
    lastName: "Ackerman",
    email: "Levi@gmail.com",
    password: "Levi@1",
    age: 28,
    gender: "male",
    genderPreference: "female",
    profilePicUrl:
      "https://i.pinimg.com/originals/ad/cc/f6/adccf626e25f670ca8c41b2835bb0ba4.jpg",
    bio: "I'm Captain Levi. I like cleanliness, discipline, and taking down Titans. If you can keep up, let’s talk.",
  },
  {
    firstName: "Roronoa",
    lastName: "Zoro",
    email: "Zoro@gmail.com",
    password: "Zoro@1",
    age: 26,
    gender: "male",
    genderPreference: "both",
    profilePicUrl:
      "https://i.pinimg.com/736x/32/70/42/3270425600f6bde5b7f8e4a2917a6339.jpg",
    bio: "I’m Zoro, the greatest swordsman in the world. I might get lost sometimes, but I never lose a fight. Got a map?",
  },
  {
    firstName: "Sasuke",
    lastName: "Uchiha",
    email: "Sasuke@gmail.com",
    password: "Sasuke@1",
    age: 24,
    gender: "male",
    genderPreference: "both",
    profilePicUrl:
      "https://www.hdwallpapers.in/download/smiling_sasuke_uchiha_sky_background_hd_naruto-1920x1080.jpg",
    bio: "I’m Sasuke Uchiha. I have my own path, but maybe we can walk part of it together.",
  },
  {
    firstName: "Satoru",
    lastName: "Gojo",
    email: "Gojo@gmail.com",
    password: "Gojo@1",
    age: 29,
    gender: "male",
    genderPreference: "both",
    profilePicUrl:
      "https://i.pinimg.com/564x/cb/c6/6b/cbc66b077d222dc2bf0c664df4185c09.jpg",
    bio: "I’m Satoru Gojo, the strongest sorcerer alive. I have six eyes, unlimited power, and a great sense of humor. Try to impress me!",
  },
  {
    firstName: "Kakashi",
    lastName: "Hatake",
    email: "Kakashi@gmail.com",
    password: "Kakashi@1",
    age: 30,
    gender: "male",
    genderPreference: "both",
    profilePicUrl:
      "https://i.pinimg.com/736x/9e/e1/98/9ee19837b75a238a8278ac955bf831ee.jpg",
    bio: "I’m Kakashi Hatake, the Copy Ninja. I’m cool, calm, and always one step ahead. Let’s see if you can keep up.",
  },
  {
    firstName: "Vegeta",
    lastName: "Vegeta", // No known last name
    email: "Vegeta@gmail.com",
    password: "Vegeta@1",
    age: 27,
    gender: "male",
    genderPreference: "both",
    profilePicUrl: "https://i.ytimg.com/vi/gNarwV5IQtY/maxresdefault.jpg",
    bio: "I am the Prince of all Saiyans. Power, pride, and strength define me. Only the best can stand beside me.",
  },
  // Female users (5 prefer male, 5 prefer both)
  {
    firstName: "Hinata",
    lastName: "Hyuga",
    email: "Hinata@gmail.com",
    password: "Hinata@1",
    age: 21,
    gender: "female",
    genderPreference: "male",
    profilePicUrl:
      "https://i.pinimg.com/736x/4d/6e/e8/4d6ee8ebd1473452a3feb7eb71c424f0.jpg",
    bio: "I’m Hinata. Soft-spoken but strong, I believe in love, kindness, and standing by those who matter. Let’s grow together!",
  },
  {
    firstName: "Sakura",
    lastName: "Haruno",
    email: "Sakura@gmail.com",
    password: "Sakura@1",
    age: 22,
    gender: "female",
    genderPreference: "male",
    profilePicUrl:
      "https://i.pinimg.com/736x/f3/4e/fd/f34efd546621387f5f0cda54a5b75aa5.jpg",
    bio: "I’m Sakura Haruno, a medical ninja with a punch that can break mountains. Are you strong enough for me?",
  },
  {
    firstName: "Nami",
    lastName: "Nami", // No confirmed last name
    email: "Nami@gmail.com",
    password: "Nami@1",
    age: 23,
    gender: "female",
    genderPreference: "male",
    profilePicUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp6qIII_iBJK520009U2Kt3YLPmkN7VvFUkQ&s",
    bio: "I’m Nami, the smartest navigator around! I love adventure and treasure—got something valuable to offer?",
  },
  {
    firstName: "Mikasa",
    lastName: "Ackerman",
    email: "Mikasa@gmail.com",
    password: "Mikasa@1",
    age: 24,
    gender: "female",
    genderPreference: "male",
    profilePicUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRteNjA2caj9FyW0MbgkWVsGfxFHhW7iiI29A&s",
    bio: "I’m Mikasa. I protect what I love with my life. If you’re worth it, I’ll never let go.",
  },
  {
    firstName: "Bulma",
    lastName: "Brief",
    email: "Bulma@gmail.com",
    password: "Bulma@1",
    age: 26,
    gender: "female",
    genderPreference: "male",
    profilePicUrl:
      "https://image-cdn.flowgpt.com/avatars/Cu5GpAaKENaAFWsRe1qVH/1708616580356",
    bio: "I’m Bulma, a genius inventor. I love science, adventure, and a little bit of chaos. Ready to build something amazing together?",
  },
  {
    firstName: "Rem",
    lastName: "Rem", // No confirmed last name
    email: "Rem@gmail.com",
    password: "Rem@1",
    age: 20,
    gender: "female",
    genderPreference: "both",
    profilePicUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uadcLhPua57KIM38jIRq7hPmvpk9PfvjfA&s",
    bio: "I’m Rem. I’m loyal, caring, and always here to support you. Let’s create a beautiful story together!",
  },
  {
    firstName: "Nezuko",
    lastName: "Kamado",
    email: "Nezuko@gmail.com",
    password: "Nezuko@1",
    age: 19,
    gender: "female",
    genderPreference: "both",
    profilePicUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx1VgHZ-GjDel7wJx85bs9SSP5Fz-6qLoYrg&s",
    bio: "I’m Nezuko Kamado. Sweet but fierce, I’ll always stand by your side. Let’s protect what matters together!",
  },
  {
    firstName: "Zero",
    lastName: "Two",
    email: "ZeroTwo@gmail.com",
    password: "ZeroTwo@1",
    age: 22,
    gender: "female",
    genderPreference: "both",
    profilePicUrl: "https://images4.alphacoders.com/923/923935.png",
    bio: "I’m Zero Two, a partner like no other. Wild, fearless, and full of surprises—think you can handle me, darling?",
  },
  {
    firstName: "Asuna",
    lastName: "Yuuki",
    email: "Asuna@gmail.com",
    password: "Asuna@1",
    age: 21,
    gender: "female",
    genderPreference: "both",
    profilePicUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBgBBMVjIIL8kOfCTw4OKBA30Rj_TC8FBbjQ&s",
    bio: "I’m Asuna, a warrior with a kind heart. I fight fiercely, love deeply, and always stand by my partner’s side. Let’s conquer together!",
  },
  {
    firstName: "Rukia",
    lastName: "Kuchiki",
    email: "Rukia@gmail.com",
    password: "Rukia@1",
    age: 23,
    gender: "female",
    genderPreference: "both",
    profilePicUrl:
      "https://i.pinimg.com/736x/c3/3c/8e/c33c8eeb8d1b4727b5cfa3c99e9ba966.jpg",
    bio: "I’m Rukia Kuchiki, a Soul Reaper with a sharp blade and a sharper wit. Life’s a battle—let’s fight it together.",
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
