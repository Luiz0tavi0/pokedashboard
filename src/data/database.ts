import Image1 from "./../assets/Game1.jpeg";
import Image2 from "./../assets/Game2.jfif";
import Image3 from "./../assets/Game3.jpeg";

export interface iGame {
  image: string;
  name: string;
  category: string;
}

export interface iMyGame extends iGame {
  install: boolean;
  playedHours: number;
}

export const myGameData: iMyGame[] = [
  {
    image: Image1,
    name: "Lorem ipsum",
    category: "RPG",
    install: true,
    playedHours: 25,
  },
  {
    image: Image2,
    name: "Dolor sit amet",
    category: "Action",
    install: false,
    playedHours: 3,
  },
  {
    image: Image3,
    name: "Consectetur adipiscing",
    category: "Adventure",
    install: false,
    playedHours: 4.5,
  },
  {
    image: Image1,
    name: "Consectetur Game 4 adipiscing",
    category: "RPG",
    install: false,
    playedHours: 2,
  },
];
export const gameData: iGame[] = [
  {
    image: Image1,
    name: "Lorem ipsum",
    category: "RPG",
  },
  {
    image: Image2,
    name: "Dolor sit amet",
    category: "Action",
  },
  {
    image: Image3,
    name: "Consectetur adipiscing",
    category: "Adventure",
  },
  {
    image: Image1,
    name: "Consectetur Game 4 adipiscing",
    category: "RPG",
  },
];
