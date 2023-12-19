import React, { useEffect, useState } from "react";
import { anton } from "../_app";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const Data = [
  {
    id: 1,
    image: "/images/ad1.jpg",
    header: "product one review",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    image: "/images/ad2.jpg",
    header: "product two review",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    image: "/images/ad3.jpg",
    header: "product three review",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    image: "/images/ad4.jpg",
    header: "product four review",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    image: "/images/ad5.jpg",
    header: "product five review",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    image: "/images/product.jpg",
    header: "product six review",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const ITEMS_PER_PAGE = 3;

interface PhotoData {
  id: number;
  header: string;
  image: string;
  description: string;
}

const index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [previousPage, setPreviousPage] = useState(0);
  const lastIndex = currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE;
  const firstIndex = lastIndex - ITEMS_PER_PAGE;
  const currentItems = Data.slice(firstIndex, lastIndex);
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

  const paginate = (newDirection: any) => {
    setCurrentPage((prev) => {
      const newIndex = prev + newDirection;
      if (newIndex !== prev) {
        setPreviousPage(prev);
      }
      return newIndex;
    });
  };

  return (
    <section className="pt-[150px] flex flex-col bg-[#ededed]">
      <div className="flex flex-col gap-0 w-[73%] m-auto text-center">
        <h1 className={`${anton.className} text-2xl-res`}>THOUGHTS?</h1>
        <p className="text-sm-res">
          Step into my world of cherished finds! Here, I share my personal
          reviews on products that have caught my eye and won my heart. No
          latest trends, just genuine love for items that enhance my everyday
          life. Discover my favorites and why they're special to me.
        </p>
      </div>
      <div className="pt-9 w-[95%] m-auto">
        <img
          src="/images/thoughts.jpeg"
          alt=""
          className="object-cover h-[400px] w-full"
        />
      </div>
      <div className="w-[95%] md:w-[73%] m-auto py-[50px]">
        <h1 className={`${anton.className} text-lg-res text-center py-[50px]`}>
          SOME OF MY THOUGHTS?
        </h1>
        <div className=" overflow-hidden">
          <div className="flex flex-row flex-wrap gap-[3px] justify-center">
            {currentItems.map((data) => (
              <div
                key={data.id}
                className="w-[33%] bg-white min-w-[100%] xl:min-w-[400px]"
              >
                <img
                  src={data.image}
                  alt={data.image}
                  className="h-[400px] w-full object-cover"
                />
                <div className="p-2 flex flex-col gap-[10px]">
                  <h1 className={`${anton.className} text-sm-res`}>
                    {data.header}
                  </h1>
                  <p>{data.description}</p>
                  <button
                    className="text-red-500 w-[100px]"
                    onClick={() => openModal(data)}
                  >
                    Show more...
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <AnimatePresence>
          {isOpen && selectedData && (
            <motion.div
              className="fixed inset-0 bg-white bg-opacity-100 flex justify-center items-start p-4 left-[20px] md:left-[50px] shadow-lg z-[9999]"
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
                      className="w-full h-[300px] md:h-[500px] object-cover cursor-pointer"
                    />
                  </a>
                  <p>{selectedData.description}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex w-[100%] justify-end gap-[10px] pt-[40px]">
          <button
            onClick={() => paginate(-1)}
            className="z-[999] cursor-pointer border-[1px] bg-black p-5 text-white rounded-[50%] border-black "
            disabled={currentPage === 0}
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() => paginate(1)}
            className="z-[999] cursor-pointer border-[1px] bg-black p-5 text-white rounded-[50%] border-black "
            disabled={
              currentPage === Math.ceil(Data.length / ITEMS_PER_PAGE) - 1
            }
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default index;
