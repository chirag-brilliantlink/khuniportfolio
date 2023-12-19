import React, { useEffect, useRef, useState } from "react";
import { anton } from "../_app";
import Link from "next/link";
import { SkipBack, SkipForward } from "lucide-react";

const Data = [
  { height: "100px", hover: "125px" },
  { height: "200px", hover: "225px" },
  { height: "300px", hover: "363px" },
  { height: "400px", hover: "308px" },
  { height: "250px", hover: "202px" },
  { height: "200px", hover: "105px" },
  { height: "91px", hover: "141px" },
  { height: "150px", hover: "100px" },
  { height: "250px", hover: "125px" },
  { height: "407px", hover: "237px" },
  { height: "200px", hover: "407px" },
  { height: "53px", hover: "103px" },
  { height: "100px", hover: "139px" },
  { height: "250px", hover: "119px" },
  { height: "300px", hover: "406px" },
  { height: "159px", hover: "209px" },
];

const photoData = [
  {
    id: 1,
    image: "/images/ify.webp",
    description: "this is an amp",
  },
  {
    id: 2,
    image: "/images/supernova.jpeg",
    description: "",
  },
  {
    id: 3,
    image: "/images/fosii.png",
    description: "",
  },
  {
    id: 4,
    image: "/images/toppings.jpg",
    description: "",
  },
  {
    id: 5,
    image: "/images/hifi.webp",
    description: "",
  },
  {
    id: 6,
    image: "/images/hyper.jpeg",
    description: "",
  },
  {
    id: 7,
    image: "/images/seinheiser.png",
    description: "",
  },
  {
    id: 8,
    image: "/images/airpods.jpeg",
    description: "",
  },
];

const tracks = [
  { src: "/audio/summer.mp3", name: "Summer Of 69 - Bryan Adams" },
  { src: "/audio/bruno.mp3", name: "Just the way you are - Bruno Mars" },
  { src: "/audio/blank.mp3", name: "Blank space - taylor Swift" },
];

const shuffleArray = (array: any) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

const getRandomDuration = () => Math.random() * 2 + 1;
const getRandomDelay = () => Math.random() * 2;
const timingFunctions = ["ease", "ease-in", "ease-out", "linear"];
const getRandomTimingFunction = () =>
  timingFunctions[Math.floor(Math.random() * timingFunctions.length)];

const Index = () => {
  const [hidePlayer, setHidePlayer] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const shuffledTracks = useRef(shuffleArray([...tracks]));

  const togglePlayerVisibility = () => {
    setHidePlayer(!hidePlayer);
  };

  const resetAutoCloseTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setHidePlayer(true);
    }, 5000);
  };

  useEffect(() => {
    resetAutoCloseTimer();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [hidePlayer]);

  const changeTrack = (increment: any) => {
    const newTrackIndex =
      (currentTrack + increment + shuffledTracks.current.length) %
      shuffledTracks.current.length;
    setCurrentTrack(newTrackIndex);
  };

  return (
    <section className="py-[150px] bg-black">
      <div className="flex items-center justify-center h-[500px]">
        {Data.map((item, index) => {
          const animationName = `barAnimation${index}`;
          const duration = getRandomDuration();
          const delay = getRandomDelay();
          const timingFunction = getRandomTimingFunction();

          const animationStyle = {
            animation: `${animationName} ${duration}s ${timingFunction} infinite ${delay}s`,
          };

          const keyframes = `@keyframes ${animationName} {
            0%, 100% { height: ${item.height}; }
            50% { height: ${item.hover}; }
          }`;

          const barStyle = {
            ...animationStyle,
            backgroundImage: `url('/images/audio-background.jpeg')`, // Replace with your image path
            backgroundSize: `${Data.length * 50}px auto`, // Adjust based on the number of bars and their width
            backgroundPosition: `-${index * 50}px center`, // Position each segment of the image
          };

          return (
            <div
              key={index}
              style={barStyle}
              className="mx-1 bg-white w-[50px] rounded-[25px] cursor-pointer flex flex-col relative overflow-hidden"
            >
              <style>{keyframes}</style>
            </div>
          );
        })}
      </div>
      <div className="text-[20px] text-white pt-[100px]">
        <p className="w-[60%] text-center m-auto">
          In my world, music is like a box of chocolates – you never know what
          you're gonna get. From the soulful strums of old classics to the
          electric buzz of modern tracks, my ears are open to all. I'm an
          audiophile who swings between decades and genres like a pendulum.
          Sometimes I'm lost in the nostalgia of a vinyl record, other times I'm
          syncing with the latest digital beat. It's a symphony of the old and
          new, and boy, does it make my heart sing!
        </p>
      </div>
      <div className="text-white pt-[100px] flex flex-col items-center w-[95%] md:w-[73%] m-auto">
        <h1 className={`${anton.className} text-xl-res`}>MY PLAYLISTS?</h1>
        <ul className="flex w-[100%] gap-[5px] pt-[50px]">
          <li className="w-[50%]">
            <Link href="https://open.spotify.com/user/xsn6gmm077eo9tt62td605m8r">
              <img
                src="/images/spotify.jpg"
                alt="spotify"
                className="h-[400px] object-cover w-[100%]"
              />
            </Link>
          </li>
          <li className="w-[50%]">
            <Link href="https://music.apple.com/us/listen-now?l=en-US">
              <img
                src="/images/apple.webp"
                alt="apple-music"
                className="h-[400px] object-cover w-[100%]"
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-white flex flex-col items-center pt-[150px]">
        <h1 className={`${anton.className} text-xl-res`}>AUDIO GEARS?</h1>
        <p className="text-sm-res">
          My sonic playground, where budget meets beats that move your soul.
        </p>
        <div className="w-[95%] md:w-[73%] m-auto flex flex-col gap-[30px] pt-[100px]">
          {photoData.map((data) => (
            <div key={data.id} className="w-[100%]">
              <img
                src={data.image}
                alt={data.image}
                className="w-[100%] h-[300px] object-cover"
              />
              <p className="text-center">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`fixed top-4 ${
          hidePlayer ? "right-[-335px]" : "right-4"
        } bg-[#F0F3F4] py-1 rounded-[25px] shadow w-[340px] transition-all duration-500 cursor-pointer`}
        onClick={togglePlayerVisibility}
      >
        <h4 className="text-black">
          {/* Now Playing: {shuffledTracks.current[currentTrack].name} */}
          <div className="flex items-center gap-[10px] justify-between px-4">
            <button
              onClick={() => changeTrack(-1)}
              className="p-1 border-black border-[1px] rounded-[50%] w-[25px] h-[25px] flex items-center justify-center"
            >
              <SkipBack />
            </button>
            <audio
              src={shuffledTracks.current[currentTrack].src}
              controls
              loop
              autoPlay
            ></audio>
            <button
              onClick={() => changeTrack(1)}
              className="p-1 border-black border-[1px] rounded-[50%] w-[25px] h-[25px] flex items-center justify-center"
            >
              <SkipForward />
            </button>
          </div>
        </h4>
      </div>
    </section>
  );
};

export default Index;
