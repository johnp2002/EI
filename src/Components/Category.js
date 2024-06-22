import React from 'react'

const Category = ({name="Grains",link="./icons/spices.svg"}) => {
  return (
    <div className='w-2/3 bg-amber-100 h-2/3 flex items-center p-4 rounded-lg'>
        <h1 className='text-black text-5xl com font-bold text-yellow-500'>{name}</h1>
        <img src={link} width={120} alt="" />
    </div>
  )
}

export default Category