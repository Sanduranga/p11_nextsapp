"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Slider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const moveSlide = () => {
      const max = slider!.scrollWidth - slider!.clientWidth;
      const left = slider!.clientWidth;

      if (max === slider!.scrollLeft) {
        slider!.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider!.scrollBy({ left, behavior: "smooth" });
      }

      setTimeout(moveSlide, 2000);
    };

    setTimeout(moveSlide, 2000);
  }, []);

  return (
    <div
      className="max-w-md h-2/3 mx-auto overflow-hidden flex flex-nowrap text-center my-5"
      ref={sliderRef}
    >
      <div className="bg-blue-600 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
        <Image
          src={"/one.jpg"}
          alt="ss"
          width={300}
          height={600}
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="bg-pink-400 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
        <Image
          src={"/two.jpg"}
          alt="image2"
          width={100}
          height={600}
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="bg-teal-500 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
        <Image
          src={"/three.jpg"}
          alt="image2"
          width={300}
          height={600}
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default Slider;
