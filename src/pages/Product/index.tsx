import React, { useEffect, useState } from "react";
import { anton } from "../_app";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Data = [
  {
    id: 1,
    image: "/images/product1.jpg",
    header: "product one review",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    image: "/images/product2.jpg",
    header: "product two review",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    image: "/images/product3.jpg",
    header: "product three review",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    image: "/images/product4.jpg",
    header: "product four review",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    image: "/images/product5.jpg",
    header: "product five review",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    image: "/images/product6.jpg",
    header: "product six review",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 7,
    image: "/images/product7.jpg",
    header: "product seven review",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 8,
    image: "/images/product8.jpg",
    header: "product eight review",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 9,
    image: "/images/product9.jpg",
    header: "product nine review",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const ITEMS_PER_PAGE = 3;

const index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [previousPage, setPreviousPage] = useState(0);
  const lastIndex = currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE;
  const firstIndex = lastIndex - ITEMS_PER_PAGE;
  const currentItems = Data.slice(firstIndex, lastIndex);

  const variants = {
    enter: {
      opacity: 0,
      translateX: "100%", // Slide in from the right side
    },
    center: {
      opacity: 1,
      translateX: 0, // Slide to its final position
    },
    exit: {
      opacity: 0,
      translateX: "-100%", // Slide out to the left side
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

  const transition = {
    x: { type: "spring", stiffness: 300, damping: 30, duration: 0.5 },
    opacity: { duration: 0.2 },
  };

  return (
    <section className="pt-[150px] flex flex-col bg-[#ededed]">
      <div className="flex flex-col gap-0 w-[73%] m-auto text-center">
        <h1 className={`${anton.className} text-[140px]`}>THOUGHTS?</h1>
        <p className="text-[20px]">
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
      <div className="w-[73%] m-auto py-[50px]">
        <h1 className={`${anton.className} text-[70px] text-center`}>
          SOME OF MY?
        </h1>
        <div className="h-[500px] overflow-hidden">
          <AnimatePresence initial={false} custom={currentPage}>
            <motion.div
              className="flex flex-row flex-wrap gap-[3px] justify-center"
              key={currentPage}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
            >
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
                    <h1 className={`${anton.className} text-[24px]`}>
                      {data.header}
                    </h1>
                    <p>{data.description}</p>
                    <a href="/" className="text-red-500">
                      Show more...
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex w-[100%] justify-end gap-[10px] pt-[40px]">
          <button
            onClick={() => paginate(-1)}
            className="z-[9999] cursor-pointer border-[1px] bg-black p-5 text-white rounded-[50%] border-black "
            disabled={currentPage === 0}
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() => paginate(1)}
            className="z-[9999] cursor-pointer border-[1px] bg-black p-5 text-white rounded-[50%] border-black "
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
