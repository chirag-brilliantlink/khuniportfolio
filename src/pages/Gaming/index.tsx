import React, { useEffect, useState } from "react";
import { anton, figtree } from "../_app";
import { motion } from "framer-motion";
// import Back from "../../../components/Back";
import Link from "next/link";
import Back from "../back";

const setupData = [
  "/images/mouse1.jpg",
  "/images/mouse2.JPEG",
  "/images/mouse3.jpg",
  "/images/mouse4.jpg",
  "/images/setup2.jpg",
  "/images/keyboard.jpg",
];

const platformData = [
  {
    logo: "/images/steam.jpeg",
    link: "https://steamcommunity.com/id/Khunimurderer",
    background: "#000000",
    border: "#FFFFFF",
  },
  {
    logo: "/images/Pa.jpeg",
    link: "https://blackdesert.pearlabyss.com/ASIA/en-US/Game/Profile/Adventure?_target=ZCyZbFxP3UChmiY3BPi1tO5ZoprrbU%2BN9lUTijc3WUNwysJxHZXE40KrpxAMCj7GDc9L0yew3M%2B9E7oz7u4MXoD0VZNtkY75xSGVJ98FSP7zWsOqmNM0BHHXZaTeDnrukhaiWaKUmFSlj%2B9qL%2FnZ3Q%3D%3D",
    background: "#FFFFFF",
    border: "#FFFFFF",
  },
  {
    logo: "/images/youtubegaming.jpeg",
    link: "https://www.youtube.com/khunimurderer",
    background: "#FFFFFF",
    border: "#FFFFFF",
  },
  {
    logo: "/images/twitch.jpeg",
    link: "https://www.twitch.tv/khunimurderer",
    background: "#9047FF",
    border: "#9047FF",
  },
  {
    logo: "/images/blizzard.jpeg",
    link: "https://overwatch.blizzard.com/en-us/career/Dkhuni-1504/",
    background: "#FFFFFF",
    border: "#FFFFFF",
  },
];

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const images = [
    "/images/khuni-setup.jpeg",
    "images/gaming1.png",
    "images/gaming2.JPG",
    "/images/bdoo.JPG",
    "images/cs2.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((current) => (current + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black w-[100%] h-auto text-white">
      <div className="w-[100%] bg-gray-500 h-[400px] md:h-[650px] xl:h-[850px] overflow-hidden relative">
        <div
          className={`text-xl-text ${anton.className} flex flex-col w-[100%] absolute text-center top-[130px] md:top-[200px] xl:top-[300px] z-20 px-[20px]`}
        >
          <h4 className="font-bold text-xl-res">GAME ON WITH ME</h4>
          <p className={`font-light text-md-res ${figtree.className}`}>
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
      <div className="w-[95%] md:w-[73%] m-auto pb-[100px]">
        <div className="py-[100px]">
          <h1 className={`${anton.className} text-xl-res `}>WHO AM I</h1>
          <p className="text-sm-res">
            Hello, I&apos;m khunimurderer, your not-so-typical gamer who&apos;s
            been joyfully bumbling through virtual worlds for over 10 years. My
            gaming life? A mix of &apos;Oops!&apos; and &apos;Wow!&apos;
            moments. Arcade games saw me as the player who celebrated every tiny
            win as if I&apos;d won an Olympic medal. In FPS games, I&apos;m
            known for my impressive ability to miss every shot and still have a
            blast. When it comes to MMOs, you&apos;ll find me accidentally
            starting quests and then wondering how I got there. And open-world
            games? They&apos;re my digital playgrounds where I often forget
            quests and just enjoy the scenery.
          </p>
          <p className="text-sm-res pt-6">
            Join me on this whimsical journey of gaming where the main goal is
            to laugh at our own gaming blunders and relish in the joy of just
            playing around. Here, every click and keyboard smash is a step
            towards another hilarious gaming tale!
          </p>
        </div>
        <img
          src="/images/bdoo.JPG"
          alt="gaming"
          className="h-[420px] object-cover rounded-lg w-[100%]"
        />
        <div className="py-[70px]">
          <h1 className={`${anton.className} text-xl-res`}>GAMES I PLAY</h1>
          <p className="text-sm-res">
            Here&apos;s my go-to games. Join in sometime for the full, hilarious
            tour, no tutorials needed!
          </p>
          <p className="text-sm-res pt-[30px]">
            From the tense shootouts of &apos;Counter-Strike 2&apos; to the
            strategic gameplay of &apos;Valorant&apos;, FPS is where my heart
            lies. But there&apos;s more &apos;Black Desert Online&apos; whisks
            me away to expansive realms for epic MMO escapades. And when the
            mood strikes, I shift gears to the adrenaline-pumping tracks of
            MotoGP and F1, where speed is king and precision is everything. My
            gaming world is a thrilling blend of sharpshooting, magical quests,
            and high-speed racing, offering a diverse playground of excitement
            and adventure at every turn!
          </p>
          <div className="w-[100%] flex gap-[3px] pt-[50px]">
            <iframe
              width="50%"
              height="315"
              src="https://www.youtube.com/embed/oCueRUcLmmM?si=k25qmt-q3h5jvwMC"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <iframe
              width="50%"
              height="315"
              src="https://www.youtube.com/embed/ecWzaqt5tlY?si=4HX1xf2q8BYB77j9"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div>
          <h1 className={`${anton.className} text-xl-res`}>PLATFORMS</h1>
          <div className="py-[50px] flex flex-col gap-3">
            {platformData.map((data, index) => (
              <ul key={index}>
                <Link href={data.link}>
                  <li>
                    <div
                      className={`flex flex-row justify-between items-center m-auto duration-500 rounded-[75px] w-[100%] px-[10px] md:px-[50px]`}
                      style={{
                        backgroundColor: `${data.background}`,
                        border: `1px solid ${data.border}`,
                        width: hoveredIndex === index ? "100%" : "60%",
                      }}
                      onMouseEnter={() => setHoveredIndex(index as any)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className="flex items-center justify-center py-3 xl:py-8 w-full">
                        <img
                          src={data.logo}
                          alt={data.logo}
                          className="w-[150px] md:w-[250px] h-[50px] md:h-[80px] object-cover"
                        />
                      </div>
                    </div>
                  </li>
                </Link>
              </ul>
            ))}
          </div>
        </div>
        <div>
          <h1 className={`${anton.className} text-xl-res`}>
            MY GAMING PERIPHERALS
          </h1>
          <p className="text-sm-res">
            My gaming setup where top-notch gear meets a healthy dose of
            &apos;how did I win that?&apos; moments.
          </p>
          <div className="pt-[50px]">
            <ul className="flex flex-wrap w-[100%] gap-[2px]">
              {setupData.map((images, index) => (
                <li key={index} className="w-[49%]">
                  <img
                    src={images}
                    alt={images}
                    className="h-[400px] w-full object-cover"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="fixed top-[20px] left-[20px] w-[40px] h-[40px] z-[100]">
        <Back />
      </div>
    </section>
  );
};

export default Index;
