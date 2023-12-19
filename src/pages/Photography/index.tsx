import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import React, { useState } from "react";
import { anton } from "../_app";

const photoData = [
  {
    id: 1,
    image: "/images/wildlife.jpeg",
    header: "Wildlife",
  },
  {
    id: 2,
    image: "/images/product.jpg",
    header: "Product Photography",
  },
  {
    id: 3,
    image: "/images/macro.jpeg",
    header: "Macro Shots",
  },
  {
    id: 4,
    image: "/images/portrait.jpg",
    header: "Portrait Shots",
  },
  {
    id: 5,
    image: "/images/ad2.jpg",
    header: "Adventure",
  },
];

interface PhotoData {
  id: number;
  header: string;
  image: string;
}

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<PhotoData | null>(null);

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
        {photoData.map((data) => (
          <div
            key={data.id}
            className="w-full group relative"
            onClick={() => openModal(data)}
          >
            <img
              src={data.image}
              alt={data.header}
              className="h-[400px] w-full object-cover blur-none group-hover:blur-[5px] duration-700"
            />
            <h2 className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-xl-res text-white opacity-0 group-hover:opacity-100 duration-700">
              {data.header}
            </h2>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {isOpen && selectedData && (
          <motion.div
            className="fixed inset-0 bg-white bg-opacity-100 z-40 flex justify-center items-start p-4 left-[20px] md:left-[50px] shadow-lg"
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
                className="w-full flex flex-col items-start pt-[50px]"
              >
                <h1 className={`text-xl-res ${anton.className}`}>
                  {selectedData.header}
                </h1>
                <a
                  href={selectedData.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[100%]"
                >
                  <img
                    src={selectedData.image}
                    alt={selectedData.header}
                    className="w-full h-[200px] md:h-[300px] object-cover cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Index;
