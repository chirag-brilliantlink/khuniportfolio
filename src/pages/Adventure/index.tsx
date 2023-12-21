import React, { useEffect, useState } from "react";
import { anton, figtree } from "../_app";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
// import Back from "../../../components/Back";

interface TravelData {
  id: number;
  header: string;
  description: string;
  date: string;
  image: string;
}

const travelData = [
  {
    id: 1,
    header: "Ladhak",
    description:
      "My trip to ladhak and there i smoked so much weed i started fyling like high af.",
    date: "1st June 2020",
    image: "/images/ad1.jpg",
  },
  {
    id: 2,
    header: "Manali",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus risus et consequat pretium. Suspendisse tortor ante, ultricies a aliquet non, suscipit vel purus. Vestibulum eget sapien pharetra, pharetra augue.",
    date: "1st June 2020",
    image: "/images/ad2.jpg",
  },
  {
    id: 3,
    header: "Uttra Khand",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit tellus. Praesent consequat velit et urna fermentum, eget facilisis tortor lacinia. Morbi condimentum velit.",
    date: "1st June 2020",
    image: "/images/ad4.jpg",
  },
  {
    id: 4,
    header: "Ladhak",
    description:
      "My trip to ladhak and there i smoked so much weed i started fyling like high af.",
    date: "1st June 2020",
    image: "/images/ad1.jpg",
  },
  {
    id: 5,
    header: "Manali",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus risus et consequat pretium. Suspendisse tortor ante, ultricies a aliquet non, suscipit vel purus. Vestibulum eget sapien pharetra, pharetra augue.",
    date: "1st June 2020",
    image: "/images/ad2.jpg",
  },
  {
    id: 6,
    header: "Uttra Khand",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit tellus. Praesent consequat velit et urna fermentum, eget facilisis tortor lacinia. Morbi condimentum velit.",
    date: "1st June 2020",
    image: "/images/ad4.jpg",
  },
];

const INITIAL_ITEMS_COUNT = 3;

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<TravelData | null>(null);
  const [visibleItemCount, setVisibleItemCount] = useState(INITIAL_ITEMS_COUNT);

  const modalVariants = {
    hidden: {
      x: "100vw", // start off-screen to the right
      opacity: 0,
      transition: { duration: 0.5 },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "inetria",
        stiffness: 100,
        duration: 0.5,
      },
    },
    exit: {
      x: "100vw", // exit off-screen to the right
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const openModal = () => {
    console.log("Opening modal");
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const showMore = () => {
    setVisibleItemCount((current) => Math.min(current + 3, travelData.length));
  };

  const showLess = () => {
    setVisibleItemCount((current) =>
      Math.max(current - 3, INITIAL_ITEMS_COUNT)
    );
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  console.log(process.env.NEXT_PUBLIC_SANITY_DATASET);

  return (
    <section className="bg-black text-white w-full">
      <div
        className={`flex flex-col ${anton.className} w-full items-center py-[100px] custom-1`}
      >
        <div className="image-across-text">
          <h1 className="text-xl-res">TRAILS</h1>
          <h1 className="text-lg-res">AND</h1>
          <h1 className="text-xl-res">DESCOVERIES</h1>
        </div>
        <p
          className={`${figtree.className} w-[92%] md:w-[50%] leading-7 text-center pt-10 xs-res`}
        >
          Hi! I&apos;ve cruised down open roads and camped under mountain stars.
          My adventures? Think epic road trips and cozy campfires. It&apos;s
          been a wild, fun ride with stories to match!
        </p>
      </div>
      <div className="w-[95%] xl:w-[90%] m-auto h-full xl:h-[700px] flex flex-col xl:flex-row overflow-hidden pb-[50px] gap-[3px]">
        <div className="flex flex-col w-[100%] xl:w-[50%] gap-[3px] overflow-hidden">
          <div className="overflow-hidden h-[50%]">
            <img
              src="/images/ad1.jpg"
              alt=""
              className="w-[100%] object-cover hover:scale-[105%] duration-500 h-[150px] md:h-[300px] xl:h-full"
            />
          </div>
          <div className="overflow-hidden h-[50%]">
            <img
              src="/images/ad2.jpg"
              alt=""
              className="w-[100%] object-cover hover:scale-[105%] duration-500 h-[150px] md:h-[300px] xl:h-full"
            />
          </div>
        </div>
        <div className="overflow-hidden w-[100%] xl:w-[25%] ">
          <img
            src="/images/ad4.jpg"
            alt=""
            className="w-[100%] object-cover hover:scale-[105%] duration-500 h-[150px] md:h-[300px] xl:h-full"
          />
        </div>
        <div className="w-[100%] xl:w-[25%] flex flex-col gap-[3px]">
          <div className="overflow-hidden h-[50%]">
            <img
              src="/images/ad5.jpg"
              alt=""
              className="w-[100%] object-cover hover:scale-[105%] duration-500 h-[150px] md:h-[300px] xl:h-full"
            />
          </div>
          <div className="overflow-hidden h-[50%]">
            <img
              src="/images/ad3.jpg"
              alt=""
              className="w-[100%] object-cover hover:scale-[105%] duration-500 h-[150px] md:h-[300px] xl:h-full"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-full relative">
        <div className="w-[95%] xl:w-[73%] m-auto">
          <h1 className={`${anton.className} text-md-res`}>TRAVEL LOGS</h1>
          <p className="pb-[50px] w-[60%] text-xs-res">
            Take a peek into my travel logs and past trips. It&apos;s a
            collection of road trips, mountain adventures, and a lot of fun and
            unforgettable moments. Each journey has its own story to tell!.
          </p>
          <div className="flex flex-col gap-[40px] xl:gap-[3px] items-center pb-[100px]">
            {travelData.slice(0, visibleItemCount).map((data) => (
              <div
                key={data.id}
                className="flex flex-col xl:flex-row gap-[10px] xl:gap-[40px] w-[100%]"
              >
                <div className="w-[100%] xl:w-[50%] h-full">
                  <img
                    src={data.image}
                    alt={data.header}
                    className="h-[300px] object-cover w-[100%]"
                  />
                </div>
                <div className="w-[100%] xl:flex flex-col justify-center">
                  <h1 className={`${anton.className} text-md-res`}>
                    {data.header}
                  </h1>
                  <p className="text-xs-res">{data.description}</p>
                  <h4 className="pt-[70px]">{data.date}</h4>
                  <button
                    onClick={() => {
                      setSelectedData(data);
                      openModal();
                    }}
                    className="text-red-500 w-[200px] text-start"
                  >
                    Show More..
                  </button>
                </div>
              </div>
            ))}
            <div className="flex flex-col md:flex-row items-center gap-[20px]">
              <button
                onClick={showMore}
                className="text-black bg-white px-[20px] py-[10px] border rounded-[50px] flex justify-center w-[300px] mt-[50px]"
              >
                Show More
              </button>
              {visibleItemCount > INITIAL_ITEMS_COUNT && (
                <button
                  onClick={showLess}
                  className="text-black bg-white px-[20px] py-[10px] border rounded-[50px] flex justify-center w-[300px] mt-[50px]"
                >
                  Show Less
                </button>
              )}
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className={`fixed inset-0 bg-white bg-opacity-100 z-40 flex justify-center items-start top-0 bottom-0 right-0 left-[30px] md:left-[100px] p-4`}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
              >
                <div className="h-full overflow-y-auto w-full z-50 text-black">
                  <button className="text-black" onClick={closeModal}>
                    <X />
                  </button>
                  {selectedData && (
                    <div
                      key={selectedData.id}
                      className="w-[100%] flex flex-col items-start xl:items-end"
                    >
                      <h1 className={`${anton.className} text-xl-res`}>
                        {selectedData.header}
                      </h1>
                      <p className="text-sm-res w-[100%] xl:w-[60%] pb-[50px]">
                        {selectedData.description}
                      </p>
                      <div className="w-[100%]">
                        <img
                          src={selectedData.image}
                          alt={selectedData.header}
                          className="w-[100%] h-[200px] md:h-[300px] xl:h-[400px] object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {/* <div className="fixed bottom-[50px] right-[50px]">
        <Back />
      </div> */}
    </section>
  );
};

export default Index;
