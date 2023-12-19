import React from "react";

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

const getRandomDuration = () => Math.random() * 2 + 1;
const getRandomDelay = () => Math.random() * 2;
const timingFunctions = ["ease", "ease-in", "ease-out", "linear"];
const getRandomTimingFunction = () =>
  timingFunctions[Math.floor(Math.random() * timingFunctions.length)];

const Index = () => {
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
    </section>
  );
};

export default Index;
