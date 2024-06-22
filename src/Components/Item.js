import React from "react";
import { FiHeart } from "react-icons/fi";

function Item({name="Achari Masala Powder " ,link='./assets/thumb.png'}) {
  return (
    <div className="w-72 bg-slate-200 h-80 com rounded-lg overflow-hidden relative text-blue-950">
      <div className="absolute flex w-full p-2 items-center justify-between  ">
        <p className="bg-yellow-500 text-blue-950 p-1 px-4 rounded-full">
          20% OFF
        </p>
        <div className="bg-white p-2 rounded-full flex justify-center items-center">
          <FiHeart className=" text-yellow-500 " />
        </div>
      </div>
      <div className="h-4/6 w-full bg-slate-300 " style={{background:`url(${link})`,backgroundSize:'cover',backgroundPosition:'center'}}></div>
      <div className="w-full flex justify-between items-center p-2">
        <p className=" truncate com text-xl">{name}</p>
        <p className="flex items-center bg-amber-100 text-blue-900 p-1 rounded-md">
          3.5
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0.772521L12.0086 6.64524L12.0664 6.81434H12.2451H18.7083L13.4907 10.4156L13.3349 10.5231L13.3962 10.7022L15.396 16.5493L10.142 12.9229L10 12.8249L9.85799 12.9229L4.60401 16.5493L6.60383 10.7022L6.6651 10.5231L6.5093 10.4156L1.29175 6.81434H7.75486H7.93357L7.99141 6.64524L10 0.772521Z"
              fill="#FFB800"
              stroke="#E89D0E"
              stroke-width="0.5"
            />
          </svg>
        </p>
      </div>
      <div className="flex justify-between  px-1 com  ">
        <div className="flex gap-1 items-center pb-2 bg-yellow-100 rounded-md p-1 justify-center text-blue-950">
          <svg
            width="30"
            height="30"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#FFB800" />
            <path
              d="M13 20H27"
              stroke="black"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
          <p>2.5grams</p>
          <svg
            width="30"
            height="30"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#FFB800" />
            <path
              d="M20 27L20 13"
              stroke="black"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M13 20H27"
              stroke="black"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <p className="text-blue-950 text-2xl">₹200</p>
      </div>
    </div>
  );
}

export default Item;
