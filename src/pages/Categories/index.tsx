import React, { useState } from "react";
import Link from "next/link";
import { anton } from "../_app";

const imageData = [
  {
    id: 1,
    image: "/images/adventure.jpeg",
    link: "/Adventure",
    name: "Adventure",
  },
  {
    id: 2,
    image: "/images/khuni-setup.jpeg",
    link: "/Gaming",
    name: "Gaming",
  },
  {
    id: 3,
    image: "/images/photography.jpeg",
    link: "/Photography",
    name: "Photography",
  },
  {
    id: 4,
    image: "/images/khuni-nohair.jpeg",
    link: "/Audio",
    name: "Audio",
  },
  {
    id: 5,
    image: "/images/thought.jpeg",
    link: "/Product",
    name: "Thoughts",
  },
];

const Index = () => {
  const [bgImage, setBgImage] = useState("");

  const handleMouseEnter = (imageSrc: any) => {
    setBgImage(imageSrc);
  };

  const handleMouseLeave = () => {
    setBgImage("");
  };
  return (
    <section className="bg-[#1b1b1b] w-[100%] h-auto md:h-[100vh] bg-section">
      <div
        className="bg-overlay"
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : "none",
        }}
      />
      <div className="content">
        <ul className="flex flex-col md:flex-row w-[90%] m-auto py-[30px] md:py-[130px] gap-[2px] overflow-hidden">
          {imageData.map((data) => (
            <li
              key={data.id}
              className="group w-full md:w-[20%] md:hover:w-[600px] duration-500 list-container relative h-[300px] md:h-[100%] hover:h-[500px] md:hover:h-[100%]  overflow-hidden"
              onMouseEnter={() => handleMouseEnter(data.image)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={data.link}>
                <img
                  src={data.image}
                  alt={data.name}
                  className="custom-img grayscale-0 md:grayscale md:group-hover:grayscale-0 duration-300"
                />
                <span className="absolute bottom-0 text-white text-center opacity-100 md:opacity-0 md:group-hover:opacity-100 duration-300 bg-black w-[100%] text-sm-res">
                  {data.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Index;
