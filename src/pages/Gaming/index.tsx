import React, { useEffect, useState } from "react";
import { anton, figtree } from "../_app";
import { motion } from "framer-motion";
// import Back from "../../../components/Back";
import Link from "next/link";

const setupData = [
  "/images/mouse.jpg",
  "/images/cloud2.webp",
  "/images/4090.webp",
  "/images/setup.jpeg",
];

const platformData = [
  {
    logo: "/images/steam.jpg",
    link: "this is the link for steam :)",
    background: "#161a23",
    border: "#161a23",
  },
  {
    logo: "/images/PA.png",
    link: "/this is the link for god tier game",
    background: "#FFFFFF",
    border: "#FFFFFF",
  },
  {
    logo: "/images/riot.png",
    link: "/this is the link for riot :))",
    background: "#ec0029",
    border: "#ec0029",
  },
  {
    logo: "/images/EA.png",
    link: "/this is the link for EA games :(",
    background: "#231f20",
    border: "#231f20",
  },
  {
    logo: "/images/blizzard.jpg",
    link: "/this is the link for idk who",
    background: "#11111",
    border: "#FFFFFF",
  },
];

const index = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const images = [
    "/images/valorant.jpg",
    "/images/gaming.jpg",
    "/images/bdo.jpg",
    "/images/cs2.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((current) => (current + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black w-[100%] h-auto text-white">
      <div className="w-[100%] bg-gray-500 h-[850px] overflow-hidden relative">
        <div
          className={`text-xl-text ${anton.className} flex flex-col w-[100%] absolute text-center top-[300px] z-20`}
        >
          <h4 className="font-bold">GAME ON WITH ME</h4>
          <p className={`font-light text-[35px] ${figtree.className}`}>
            Peek into my gaming corner for a few games, some laughs and loads of
            fun.
          </p>
        </div>
        {images.map((img, index) => (
          <motion.img
            key={img}
            src={img}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImage === index ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full object-cover absolute top-0 left-0 z-10"
          />
        ))}
      </div>
      <div className="w-[73%] m-auto pb-[100px]">
        <div className="py-[100px]">
          <h1 className={`${anton.className} text-[100px] `}>WHO AM I?</h1>
          <p className="text-[20px]">
            Hello, I'm khunimurderer, your not-so-typical gamer who's been
            joyfully bumbling through virtual worlds for over 10 years. My
            gaming life? A mix of 'Oops!' and 'Wow!' moments. Arcade games saw
            me as the player who celebrated every tiny win as if I'd won an
            Olympic medal. In FPS games, I'm known for my impressive ability to
            miss every shot and still have a blast. When it comes to MMOs,
            you'll find me accidentally starting quests and then wondering how I
            got there. And open-world games? They're my digital playgrounds
            where I often forget quests and just enjoy the scenery.
          </p>
          <p className="text-[20px] pt-6">
            Join me on this whimsical journey of gaming where the main goal is
            to laugh at our own gaming blunders and relish in the joy of just
            playing around. Here, every click and keyboard smash is a step
            towards another hilarious gaming tale!
          </p>
        </div>
        <img
          src="/images/moto.jpg"
          alt="gta5"
          className="h-[250px] object-cover rounded-lg w-[100%]"
        />
        <div className="py-[70px]">
          <h1 className={`${anton.className} text-[100px] `}>GAMES I PLAY?</h1>
          <p className="text-[20px]">
            Here's my go-to games. Join in sometime for the full, hilarious
            tour, no tutorials needed!
          </p>
          <p className="text-[20px] pt-[30px]">
            From the tense shootouts of 'Counter-Strike 2' to the strategic
            gameplay of 'Valorant', FPS is where my heart lies. But there's more
            – 'Black Desert Online' whisks me away to expansive realms for epic
            MMO escapades. And when the mood strikes, I shift gears to the
            adrenaline-pumping tracks of MotoGP and F1, where speed is king and
            precision is everything. My gaming world is a thrilling blend of
            sharpshooting, magical quests, and high-speed racing, offering a
            diverse playground of excitement and adventure at every turn!
          </p>
        </div>
        <div>
          <h1 className={`${anton.className} text-[100px] `}>PLATFORMS?</h1>
          <div className="py-[50px] flex flex-col gap-3">
            {platformData.map((data, index) => (
              <ul key={index}>
                <li>
                  <div
                    className={`flex flex-col items-center m-auto duration-500 rounded-[75px]`}
                    style={{
                      backgroundColor: `${data.background}`,
                      border: `1px solid ${data.border}`,
                      width: hoveredIndex === index ? "100%" : "60%",
                    }}
                    onMouseEnter={() => setHoveredIndex(index as any)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="w-[100%] flex items-center justify-center py-5">
                      <img
                        src={data.logo}
                        alt={data.logo}
                        className="w-[300px] h-[100px] object-cover"
                      />
                    </div>
                    {hoveredIndex === index && (
                      <Link href={data.link} className="mix-blend-difference">
                        {data.link}
                      </Link>
                    )}
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div>
          <h1 className={`${anton.className} text-[100px] `}>
            MY GAMING PERIPHERALS?
          </h1>
          <p className="text-[20px]">
            My gaming setup where top-notch gear meets a healthy dose of 'how
            did I win that?' moments.
          </p>
          <div className="pt-[50px]">
            <ul className="flex flex-wrap w-[100%] gap-[2px]">
              {setupData.map((images, index) => (
                <li key={index} className="w-[49%]">
                  <img src={images} alt={images} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="fixed bottom-[50px] right-[50px]">
        <Back />
      </div> */}
    </section>
  );
};

export default index;
