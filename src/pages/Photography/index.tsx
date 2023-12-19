import React, { useState } from "react";

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

const index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const openModal = (data: any) => {
    setSelectedData(data);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };
  return (
    <section className="p-[20px]">
      <div className="flex flex-col w-full gap-[30px]">
        {photoData.map((data) => (
          <div key={data.id} className="w-full group relative">
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
    </section>
  );
};

export default index;
