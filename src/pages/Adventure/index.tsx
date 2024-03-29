import React, { useEffect, useState } from "react";
import { anton, figtree } from "../_app";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Masonry } from "@mui/lab";
import { createClient } from "@sanity/client";
import Back from "../back";
import { useRouter } from "next/router";

// Sanity client initialization
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET,
  useCdn: true,
  apiVersion: "2023-10-21",
});

interface TravelData {
  title: string;
  description: string;
  description2: string;
  date: string;
  images: Array<{ url: string }>;
}

const INITIAL_ITEMS_COUNT = 3;

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<TravelData | null>(null);
  const [visibleItemCount, setVisibleItemCount] = useState(INITIAL_ITEMS_COUNT);
  const [travelData, setTravelData] = useState<TravelData[]>([]);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      if (isOpen) {
        closeModal();
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [isOpen]);

  const getRandomHeight = () => {
    // Generate a random height between some min and max values, for example, 200px to 400px
    return Math.floor(Math.random() * (400 - 200 + 1) + 200);
  };

  useEffect(() => {
    const fetchTravelData = async () => {
      const query = `*[_type == "category"]{
    title,
    description,
    description2,
    date,
    images[]{
      "url": asset->url
    }
  }`;
      const data = await client.fetch(query);
      setTravelData(data);
    };

    fetchTravelData();
  }, []);

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
          <h1 className="text-xl-res">DiSCOVERIES</h1>
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
              src="/images/ad1.jpeg"
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
              src="/images/adventure.jpeg"
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
            {Array.isArray(travelData) &&
              travelData.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col xl:flex-row gap-[10px] xl:gap-[40px] w-[100%]"
                >
                  <div className="w-[100%] xl:w-[50%] h-full">
                    <img
                      src={data.images[0].url} // Use the first image
                      alt={data.title}
                      className="h-[300px] object-cover w-[100%]"
                    />
                  </div>
                  <div className="w-[100%] xl:flex flex-col justify-center">
                    <h1 className={`${anton.className} text-md-res`}>
                      {data.title}
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
                className={`fixed inset-0 bg-white bg-opacity-100 z-40 flex justify-center items-start top-0 bottom-0 right-0 left-[0px] p-4`}
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
                    <div className="w-[100%] flex flex-col items-start xl:items-end">
                      <h1 className={`${anton.className} text-xl-res`}>
                        {selectedData.title}
                      </h1>
                      <p className="text-sm-res w-[100%] xl:w-[60%] pb-[50px] text-end">
                        {selectedData.description}
                      </p>
                      <p
                        className="text-sm-res w-[100%] m-auto text-start
                       pt-[100px] pb-[50px]"
                      >
                        {selectedData.description2}
                      </p>
                      <div className="w-[100%] flex flex-col gap-5">
                        <Masonry columns={{ xs: 2, md: 3 }} spacing={1}>
                          {selectedData.images.map((image, index) => (
                            <div key={index}>
                              <a
                                href={image.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img
                                  src={image.url}
                                  alt={selectedData.title}
                                  className="w-full object-cover cursor-pointer rounded-sm"
                                  style={{
                                    display: "block",
                                    width: "100%",
                                    height: `${getRandomHeight()}px`,
                                  }}
                                />
                              </a>
                            </div>
                          ))}
                        </Masonry>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="fixed top-[20px] left-[20px] w-[40px] h-[40px]">
          <Back />
        </div>
      </div>
    </section>
  );
};

export default Index;
