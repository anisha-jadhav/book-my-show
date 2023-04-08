import React, { useContext } from "react";
import PaymentModel from "../PaymentModel/Payment.Component";
import { MovieContext } from "../../context/Movie.context";

const MovieInfo = ({ movie }) => {
  const { price, setIsOpen, isOpen, rentMovie, buyMovie } =
    useContext(MovieContext);

  const genres = movie.genres?.map(({ name }) => name).join(", ");
  const languages = movie.spoken_languages
    ?.map(({ english_name }) => english_name)
    .join(", ");

  //console.log(genres);
  //console.log(languages);

  return (
    <>
      <PaymentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
      <div className="flex flex-col gap-8">
        <h1 className="text-white text-5xl font-bold">
          {movie.original_title}
        </h1>

        <div className=" flex flex-col gap-2 text-white">
          <h4>4K rating</h4>
          <h4>{languages}</h4>
          <h4>
            {movie.runtime} min | {genres}
          </h4>
        </div>
        <div className="flex item-center gap-3 w-full">
          <button
            onClick={rentMovie}
            className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg"
          >
            Rent ₹ 149
          </button>
          <button
            onClick={buyMovie}
            className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg"
          >
            Buy ₹ 599
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
