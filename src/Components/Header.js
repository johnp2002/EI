import React, { useState } from "react";
import "./Header.css";
import { GoSearch } from "react-icons/go";

const Header = () => {
  const [cn, setcn] = useState("");
  const handleSelectChange = (e) => {
    setcn(e.target.value);
  };
  return (
    <div className=" text-blue-900 com flex h-16 bg-white w-full items-center justify-evenly text-xl ">
      <img src="./logo.png" width="100" alt="" />
      <ul className="flex list-none gap-14 font-bold">
        <li>custom order</li>
        <li>About us</li>
        <li>Contact us</li>
        <li></li>
      </ul>
      {/* search element */}
      <div className="flex gap-2 flex justify-between  items-center bg-slate-200 rounded-full overflow-hidden">
        <input
          className="p-1 px-2 flex-1 rounded-full  outline-none px-3 bg-transparent"
          placeholder="Search"
        />
        <span className="bg-yellow-500 p-2 rounded-full ">
          <GoSearch />
        </span>
      </div>

      {/* country select element */}
      <div className="flex gap-2">

        <img width={50} src={cn} alt="" />
      <select className="select w-full max-w-xs" onChange={handleSelectChange}>
        <option disabled defaultValue>
          Select your Country
        </option>
        <option value="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg">
          🇮🇳 India
        </option>
        <option value="https://upload.wikimedia.org/wikipedia/en/a/aa/Flag_of_the_United_States.svg">
          🇺🇸 United States
        </option>
        <option value="https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg">
          🇨🇦 Canada
        </option>
        <option value="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg">
          🇬🇧 United Kingdom
        </option>
        <option value="https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg">
          🇩🇪 Germany
        </option>
        <option value="https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg">
          🇫🇷 France
        </option>
      </select>
      </div>

      {/* corner icons  */}
      <div className="flex gap-4 ml-3">
        {/* cart icon */}
        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.5385 27.0004H4.25438C3.94311 27.0021 3.64217 26.8948 3.40965 26.6992C3.17713 26.5035 3.02952 26.2334 2.99528 25.9408L2.0006 11.8278C1.99536 11.6701 2.02433 11.5131 2.08575 11.3664C2.14717 11.2197 2.23972 11.0865 2.3577 10.9749C2.47568 10.8634 2.6166 10.7759 2.77173 10.7178C2.92686 10.6597 3.09294 10.6323 3.2597 10.6373H25.7409C26.0748 10.6373 26.3951 10.7627 26.6312 10.986C26.8673 11.2092 27 11.512 27 11.8278L25.7976 25.9527C25.7604 26.2431 25.6116 26.5104 25.3793 26.7036C25.1471 26.8968 24.8478 27.0025 24.5385 27.0004V27.0004Z"
            stroke="#031255"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.20117 14.5V7.95237C8.20117 6.3737 8.86446 4.85969 10.0451 3.7434C11.2257 2.62712 12.827 2 14.4967 2C16.1663 2 17.7676 2.62712 18.9483 3.7434C20.1289 4.85969 20.7922 6.3737 20.7922 7.95237V14.5"
            stroke="#031255"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        {/* favorites icon */}
        <svg
          width="30"
          height="29"
          viewBox="0 0 30 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.148 3.16553C23.8191 2.23636 22.2449 1.84463 20.6885 2.05585C19.132 2.26708 17.6877 3.06844 16.5969 4.32597L15.0036 6.07709H14.9663L13.3917 4.32597C12.3009 3.06844 10.8566 2.26708 9.30015 2.05585C7.74369 1.84463 6.16946 2.23636 4.84063 3.16553C4.06404 3.72705 3.40937 4.47482 2.92423 5.35445C2.43909 6.23407 2.13569 7.22341 2.03613 8.25044C1.93658 9.27748 2.04336 10.3164 2.34872 11.2915C2.65407 12.2667 3.15031 13.1535 3.80131 13.8876L14.9227 27L15.1468 26.7499L15.2153 26.8263L26.206 13.8876C26.8561 13.1521 27.3511 12.264 27.655 11.288C27.9588 10.3119 28.0639 9.27249 27.9626 8.24537C27.8612 7.21825 27.556 6.22931 27.0691 5.35055C26.5822 4.47178 25.9259 3.72532 25.148 3.16553V3.16553Z"
            stroke="#031255"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        {/* user icon */}
        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 26.9998C2.68772 24.5494 4.26305 22.3678 6.4834 20.7909C8.70376 19.2141 11.446 18.3295 14.2878 18.2734C17.1296 18.2172 19.9134 18.9926 22.2104 20.4802C24.5075 21.9678 26.1904 24.0851 27 26.5059"
            stroke="#031255"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.1233 13.4492H13.8692C12.2979 13.4492 10.791 12.8946 9.67988 11.9075C8.5688 10.9203 7.9446 9.58148 7.9446 8.18544V7.70364C7.9446 6.19099 8.62093 4.74027 9.82482 3.67067C11.0287 2.60106 12.6615 2.00018 14.3641 2.00018C15.2429 1.99939 16.1134 2.15262 16.9255 2.45107C17.7377 2.74952 18.4756 3.18734 19.097 3.73948C19.7185 4.29162 20.2113 4.94723 20.5472 5.66879C20.8831 6.39035 21.0556 7.16367 21.0547 7.94452V8.18544C21.0547 9.58148 20.4305 10.9203 19.3194 11.9075C18.2083 12.8946 16.7014 13.4492 15.1301 13.4492H15.1233Z"
            stroke="#031255"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
