import React, { useState } from "react";
import HeroSlider from "react-slick";

const HeroCarousel = () => {
  const [images, setImages] = useState([]);

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider>
          {images.map((images) => (
            <div className="w-full h-56 md:h-80 py-3">
              <img
                src=""
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              ></img>
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
