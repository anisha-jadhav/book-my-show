import React from "react";

const Cast = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-32 h-32">
          <img
            src={`https://image.tmdb.org/t/p/original${props.image}`}
            alt="cast and crew member"
            className="w-full h-full rounded-full object-center object-cover"
          />
        </div>
        <h1 className="text-gray-800 text-xl">{props.castName}</h1>
        <h3 className="text-gray-800 text-sm">as {props.role}</h3>
      </div>
    </div>
  );
};

export default Cast;
