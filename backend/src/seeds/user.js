import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config();

let users = [
  // Male users (5 prefer female, 5 prefer both)
  {
    username: "Goku",
    email: "Goku@gmail.com",
    password: "Goku@1",
    age: 25,
    gender: "male",
    genderPreference: "female",
    profilePicUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/30/Goku_Artwork.png",
    bio: "I'm Goku, the strongest Saiyan! I love fighting strong opponents, eating a LOT, and protecting the world. Ready for an adventure?",
  },
  {
    username: "Naruto",
    email: "Naruto@gmail.com",
    password: "Naruto@1",
    age: 22,
    gender: "male",
    genderPreference: "female",
    profilePicUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    bio: "Believe it! I'm Naruto Uzumaki, the future Hokage! I never give up, and I'm always up for a good bowl of ramen. Wanna join me?",
  },
  {
    username: "Luffy",
    email: "Luffy@gmail.com",
    password: "Luffy@1",
    age: 23,
    gender: "male",
    genderPreference: "female",
    profilePicUrl: "https://upload.wikimedia.org/wikipedia/en/6/6c/Luffy.png",
    bio: "I’m Monkey D. Luffy, the future Pirate King! If you love adventure, treasure, and endless fun, let’s set sail together!",
  },
  {
    username: "Ichigo",
    email: "Ichigo@gmail.com",
    password: "Ichigo@1",
    age: 21,
    gender: "male",
    genderPreference: "female",
    profilePicUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/11/Ichigo_Kurosaki.png",
    bio: "I’m Ichigo Kurosaki. I protect those who matter to me, and I take my duty as a Soul Reaper seriously. But I’m also chill—wanna hang?",
  },
  {
    username: "Levi",
    email: "Levi@gmail.com",
    password: "Levi@1",
    age: 28,
    gender: "male",
    genderPreference: "female",
    profilePicUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/9e/Levi_Ackerman.png",
    bio: "I'm Captain Levi. I like cleanliness, discipline, and taking down Titans. If you can keep up, let’s talk.",
  },
  {
    username: "Zoro",
    email: "Zoro@gmail.com",
    password: "Zoro@1",
    age: 26,
    gender: "male",
    genderPreference: "both",
    profilePicUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f3/Roronoa_Zoro.png",
    bio: "I’m Zoro, the greatest swordsman in the world. I might get lost sometimes, but I never lose a fight. Got a map?",
  },
  {
    username: "Sasuke",
    email: "Sasuke@gmail.com",
    password: "Sasuke@1",
    age: 24,
    gender: "male",
    genderPreference: "both",
    profilePicUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/79/SasukeUchiha.png",
    bio: "I’m Sasuke Uchiha. I have my own path, but maybe we can walk part of it together.",
  },
  {
    username: "Gojo",
    email: "Gojo@gmail.com",
    password: "Gojo@1",
    age: 29,
    gender: "male",
    genderPreference: "both",
    profilePicUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/1a/Satoru_Gojo.png",
    bio: "I’m Satoru Gojo, the strongest sorcerer alive. I have six eyes, unlimited power, and a great sense of humor. Try to impress me!",
  },
  {
    username: "Kakashi",
    email: "Kakashi@gmail.com",
    password: "Kakashi@1",
    age: 30,
    gender: "male",
    genderPreference: "both",
    profilePicUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3f/Kakashi_Hatake.png",
    bio: "I’m Kakashi Hatake, the Copy Ninja. I’m cool, calm, and always one step ahead. Let’s see if you can keep up.",
  },
  {
    username: "Vegeta",
    email: "Vegeta@gmail.com",
    password: "Vegeta@1",
    age: 27,
    gender: "male",
    genderPreference: "both",
    profilePicUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a5/Vegeta_Dragon_Ball.png",
    bio: "I am the Prince of all Saiyans. Power, pride, and strength define me. Only the best can stand beside me.",
  },

  // Female users (5 prefer male, 5 prefer both)
  {
    username: "Hinata",
    email: "Hinata@gmail.com",
    password: "Hinata@1",
    age: 21,
    gender: "female",
    genderPreference: "male",
    profilePicUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b9/Hinata_Naruto_Chapter_615.png",
    bio: "I’m Hinata. Soft-spoken but strong, I believe in love, kindness, and standing by those who matter. Let’s grow together!",
  },
  {
    username: "Sakura",
    email: "Sakura@gmail.com",
    password: "Sakura@1",
    age: 22,
    gender: "female",
    genderPreference: "male",
    profilePicUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/fd/Sakura_Haruno.png",
    bio: "I’m Sakura Haruno, a medical ninja with a punch that can break mountains. Are you strong enough for me?",
  },
  {
    username: "Nami",
    email: "Nami@gmail.com",
    password: "Nami@1",
    age: 23,
    gender: "female",
    genderPreference: "male",
    profilePicUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/2e/NamiOnePiece.png",
    bio: "I’m Nami, the smartest navigator around! I love adventure and treasure—got something valuable to offer?",
  },
  {
    username: "Mikasa",
    email: "Mikasa@gmail.com",
    password: "Mikasa@1",
    age: 24,
    gender: "female",
    genderPreference: "male",
    profilePicUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b6/Mikasa_Ackerman.png",
    bio: "I’m Mikasa. I protect what I love with my life. If you’re worth it, I’ll never let go.",
  },
  {
    username: "Bulma",
    email: "Bulma@gmail.com",
    password: "Bulma@1",
    age: 26,
    gender: "female",
    genderPreference: "male",
    profilePicUrl: "https://upload.wikimedia.org/wikipedia/en/3/34/Bulma.png",
    bio: "I’m Bulma, a genius inventor. I love science, adventure, and a little bit of chaos. Ready to build something amazing together?",
  },
  {
    username: "Rem",
    email: "Rem@gmail.com",
    password: "Rem@1",
    age: 20,
    gender: "female",
    genderPreference: "both",
    profilePicUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/5e/Rem_Re_Zero.png",
    bio: "I’m Rem. I’m loyal, caring, and always here to support you. Let’s create a beautiful story together!",
  },
  {
    username: "Nezuko",
    email: "Nezuko@gmail.com",
    password: "Nezuko@1",
    age: 19,
    gender: "female",
    genderPreference: "both",
    profilePicUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3f/Nezuko_Kamado.png",
    bio: "I’m Nezuko Kamado. Sweet but fierce, I’ll always stand by your side. Let’s protect what matters together!",
  },
  {
    username: "ZeroTwo",
    email: "ZeroTwo@gmail.com",
    password: "ZeroTwo@1",
    age: 22,
    gender: "female",
    genderPreference: "both",
    profilePicUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e7/Zero_Two_Darling_in_the_Franxx.png",
    bio: "I’m Zero Two, a partner like no other. Wild, fearless, and full of surprises—think you can handle me, darling?",
  },
  {
    username: "Asuna",
    email: "Asuna@gmail.com",
    password: "Asuna@1",
    age: 21,
    gender: "female",
    genderPreference: "both",
    profilePicUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/42/Asuna_%28Sword_Art_Online%29.png",
    bio: "I’m Asuna, a warrior with a kind heart. I fight fiercely, love deeply, and always stand by my partner’s side. Let’s conquer together!",
  },
  {
    username: "Rukia",
    email: "Rukia@gmail.com",
    password: "Rukia@1",
    age: 23,
    gender: "female",
    genderPreference: "both",
    profilePicUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/9d/RukiaKuchikiBleach.png",
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
seedUsers();
//deleteTestUsers();
