import React, { useState } from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows.Component";

const HeroCarousel = () => {
  const [images, setImages] = useState([
    {
      adult: false,
      backdrop_path: "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
      genre_ids: [16, 28, 12, 35, 10751, 14],
      id: 315162,
      original_language: "en",
      original_title: "Puss in Boots: The Last Wish",
      overview:
        "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
      popularity: 9694.931,
      poster_path: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
      release_date: "2022-12-07",
      title: "Puss in Boots: The Last Wish",
      video: false,
      vote_average: 8.6,
      vote_count: 1981,
    },
    {
      adult: false,
      backdrop_path: "/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
      genre_ids: [878, 12, 28],
      id: 76600,
      original_language: "en",
      original_title: "Avatar: The Way of Water",
      overview:
        "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
      popularity: 2736.974,
      poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      release_date: "2022-12-14",
      title: "Avatar: The Way of Water",
      video: false,
      vote_average: 7.7,
      vote_count: 4330,
    },
    {
      adult: false,
      backdrop_path: "/sBOenwOZGRN5nZZGw4TxwtnfrEf.jpg",
      genre_ids: [28, 35, 80, 53],
      id: 899112,
      original_language: "en",
      original_title: "Violent Night",
      overview:
        "When a team of mercenaries breaks into a wealthy family compound on Christmas Eve, taking everyone inside hostage, the team isn’t prepared for a surprise combatant: Santa Claus is on the grounds, and he’s about to show why this Nick is no saint.",
      popularity: 1867.347,
      poster_path: "/1XSYOP0JjjyMz1irihvWywro82r.jpg",
      release_date: "2022-11-30",
      title: "Violent Night",
      video: false,
      vote_average: 7.7,
      vote_count: 948,
    },
    {
      adult: false,
      backdrop_path: "/q2fY4kMXKoGv4CQf310MCxpXlRI.jpg",
      genre_ids: [878, 27, 35],
      id: 536554,
      original_language: "en",
      original_title: "M3GAN",
      overview:
        "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
      popularity: 1913.805,
      poster_path: "/7CNCv9uhqdwK7Fv4bR4nmDysnd9.jpg",
      release_date: "2022-12-28",
      title: "M3GAN",
      video: false,
      vote_average: 7,
      vote_count: 305,
    },
    {
      adult: false,
      backdrop_path: "/sKK5bbQm15jzbMRwCJmPBbv9trN.jpg",
      genre_ids: [12, 10751, 14],
      id: 411,
      original_language: "en",
      original_title:
        "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
      overview:
        "Siblings Lucy, Edmund, Susan and Peter step through a magical wardrobe and find the land of Narnia. There, they discover a charming, once peaceful kingdom that has been plunged into eternal winter by the evil White Witch, Jadis. Aided by the wise and magnificent lion, Aslan, the children lead Narnia into a spectacular, climactic battle to be free of the Witch's glacial powers forever.",
      popularity: 1577.327,
      poster_path: "/iREd0rNCjYdf5Ar0vfaW32yrkm.jpg",
      release_date: "2005-12-07",
      title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
      video: false,
      vote_average: 7.1,
      vote_count: 9180,
    },
  ]);

  const settingsLG = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  const settings = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((images, index) => (
            <div className="w-full h-56 md:h-80 py-3" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>

      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((images, index) => (
            <div className="w-full h-96 px-2 py-3" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
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
