import React, { useState } from "react";
import Link from "next/link";

const imageData = [
  {
    id: 1,
    Images: "/images/adventure.jpeg",
    Link: "/Adventure",
  },
  {
    id: 2,
    Images: "/images/khuni-setup.jpeg",
    Link: "/Gaming",
  },
  {
    id: 3,
    Images: "/images/photography.jpeg",
    Link: "/Photography",
  },
  {
    id: 4,
    Images: "/images/audio.jpeg",
    Link: "/Audio",
  },
  {
    id: 5,
    Images: "/images/thought.jpeg",
    Link: "/Product",
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
    <section className="bg-[#1b1b1b] w-[100%] bg-section">
      <div
        className="bg-overlay"
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : "none",
        }}
      />
      <div className="content">
        <ul className="flex w-[90%] m-auto py-[130px] gap-[2px]">
          {imageData.map((data) => (
            <li
              className="w-[20%] list-container"
              onMouseEnter={() => handleMouseEnter(`${data.Images}`)}
              onMouseLeave={handleMouseLeave}
              key={data.id}
            >
              <Link href={data.Link}>
                <img
                  src={data.Images}
                  alt={data.Images}
                  className="custom-img grayscale hover:grayscale-0 duration-300"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Index;
