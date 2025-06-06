import photo1 from "./_photos/1.jpg";
import photo2 from "./_photos/2.jpg";
import photo3 from "./_photos/3.jpg";
import photo4 from "./_photos/4.jpg";
import photo5 from "./_photos/5.jpg";
import photo6 from "./_photos/6.jpg";
import photo7 from "./_photos/7.jpg";

import { StaticImageData } from "next/image";

export type Wonder7Type = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};
export const data: Wonder7Type[] = [
  {
    id: "1",
    name: "Great Wall of China",
    src: photo1,
    photographer: "Photo by Max van den Oetelaar on Unsplash",
    location: "China",
  },
  {
    id: "2",
    name: "Petra",
    src: photo2,
    photographer: "Photo by Reiseuhu on Unsplash",
    location: "Jordan",
  },
  {
    id: "3",
    name: "Christ the Redeemer",
    src: photo3,
    photographer: "Photo by Andrea Leopardi on Unsplash",
    location: "Brazil",
  },
  {
    id: "4",
    name: "Machu Picchu",
    src: photo4,
    photographer: "Photo by Jared Schwitzke on Unsplash",
    location: "Peru",
  },
  {
    id: "5",
    name: "Chichen Itza",
    src: photo5,
    photographer: "Photo by E Mens on Unsplash",
    location: "Mexico",
  },
  {
    id: "6",
    name: "Roman Colosseum",
    src: photo6,
    photographer: "Photo by Andrea Cipriano on Unsplash",
    location: "Italy",
  },
  {
    id: "7",
    name: "Taj Mahal",
    src: photo7,
    photographer: "Photo by Su San Lee on Unsplash",
    location: "India",
  },
];
