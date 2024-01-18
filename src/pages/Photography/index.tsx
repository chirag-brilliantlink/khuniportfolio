import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { anton } from "../_app";
import { createClient } from "next-sanity";
import { Masonry } from "@mui/lab";
import Back from "../back";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET,
  useCdn: true,
  apiVersion: "2023-10-21",
});

interface PhotoData {
  id: number;
  title: string;
  images: Array<{ url: string }>;
}

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<PhotoData | null>(null);
  const [photographyData, setPhotographyData] = useState<PhotoData[]>([]);

  const getRandomHeight = () => {
    return Math.floor(Math.random() * (400 - 200 + 1) + 200);
  };

  useEffect(() => {
    const fetchPhotographyData = async () => {
      const query = `*[_type == "photography"]{
        title,
        images[]{
          "url": asset->url
        }
      }`;
      const data = await client.fetch(query);
      setPhotographyData(data);
    };

    fetchPhotographyData();
  }, []);

  const openModal = (data: any) => {
    setSelectedData(data);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const modalVariants = {
    hidden: {
      x: "100vw",
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
      x: "100vw",
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="p-[20px]">
      <div className="flex flex-col w-full gap-[30px]">
        {photographyData.map((data, index) => (
          <div
            key={index}
            className="w-full group relative"
            onClick={() => openModal(data)}
          >
            <img
              src={data.images[0].url}
              alt={data.title}
              className="h-[250px] md:h-[400px] w-full object-cover"
            />
            <h2 className="absolute top-0 left-0 right-0 bottom-0 flex text-center items-center justify-center text-lg-res text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 duration-700">
              {data.title}
            </h2>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {isOpen && selectedData && (
          <motion.div
            className="fixed inset-0 bg-white bg-opacity-100 z-40 flex justify-center items-start p-4 left-0 shadow-2xl"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            <div className="h-full overflow-y-auto w-full z-50 text-black">
              <button className="text-black" onClick={closeModal}>
                <X />
              </button>
              <div
                key={selectedData.id}
                className="w-full flex flex-col gap-5 items-start pt-[50px]"
              >
                <h1 className={`text-xl-res ${anton.className}`}>
                  {selectedData.title}
                </h1>
                <Masonry columns={{ xs: 2, md: 3 }} spacing={1}>
                  {selectedData.images.map((image, imgIndex) => (
                    <a
                      key={imgIndex}
                      href={image.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={image.url}
                        alt={selectedData.title}
                        className="w-[100%] object-cover cursor-pointer"
                        style={{
                          display: "block",
                          width: "100%",
                          height: `${getRandomHeight()}px`,
                        }}
                      />
                    </a>
                  ))}
                </Masonry>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="fixed top-[20px] left-[20px] w-[40px] h-[40px]">
        <Back />
      </div>
    </section>
  );
};

export default Index;
