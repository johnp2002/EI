import React from "react";
import Item from "./Item";
const ItemsSection = () => {
  return (
    // <div className="w-full h-screen p-8 flex overflow-scroll flex-wrap">
    <div  className="scrollbar-hidden pl-28 flex-shrink-0 w-full flex-col gap-12 flex-wrap overflow-x-scroll h-64  mr-4 mb-4 flex">
      <Item />
      {Array(10)
        .fill()
        .map((_, idx) => (
          <Item key={idx} />
        ))}
    </div>
  );
};

export default ItemsSection;
