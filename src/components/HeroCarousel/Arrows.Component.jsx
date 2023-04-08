import React from "react";

// what does this do ?

// when we click next of prev , it will take all the properties of current slider
// and apply same class style to the scrolled slide

export function NextArrow(props) {
  return (
    <>
      <div
        className={props.className}
        style={{ ...props.style }}
        onClick={props.onClick}
      ></div>
    </>
  );
}

export function PrevArrow(props) {
  return (
    <>
      <div
        className={props.className}
        style={{ ...props.style }}
        onClick={props.onClick}
      ></div>
    </>
  );
}
