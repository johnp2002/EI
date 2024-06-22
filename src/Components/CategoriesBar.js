import React from "react";

const CategoriesBar = () => {
  return (
    <div className="flex w-full  justify-center gap-6 p-3 text-blue-800 com my-4">
      <div className="flex justify-center gap-14 px-6 border-2 rounded-xl border-yellow-300 p-3">
        <div className='flex justify-center flex-col items-center'>
          <img src="./icons/flour.svg" alt="" />
            <p>Flour</p>
        </div>
        <div className='flex justify-center flex-col items-center'>
          <img src="./icons/laddoo 4.svg" alt="" />
            <p>Sweets</p>
        </div>
        <div className='flex justify-center flex-col items-center'>
          <img src="./icons/pickle 4.svg" alt="" />
            <p>Pickles</p>
        </div>
        <div className='flex justify-center flex-col items-center'>
          <img src="./icons/snack 4.svg" alt="" />
            <p>Namkeen</p>
        </div>
        <div className='flex justify-center flex-col items-center'>
          <img src="./icons/pressure-cooker 3.svg" alt="" />
            <p>cookware</p>
        </div>
        <div className='flex justify-center flex-col items-center'>
          <img src="./icons/wheat.svg" alt="" />
            <p>Grains</p>
        </div>
        <div className='flex justify-center flex-col items-center'>
          <img src="./icons/spices.svg" alt="" />
            <p>spices</p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesBar;
