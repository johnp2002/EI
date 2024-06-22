import React from 'react'
import Category from './Category'
const CategoriesSection = () => {
  return (
    <div className='w-full h-screen p-8 grid grid-cols-3 place-items-center'>
        <Category/>
        <Category name='Flour' link='./icons/flour.svg' />
        <Category name='Sweets' link='./icons/laddoo 4.svg' />
        <Category name='Snacks' link='./icons/snack 4.svg' />
        <Category name='Pickles' link='./icons/pickle 4.svg' />
        <Category name='Grains' link='./icons/wheat.svg' />
    </div>
  )
}

export default CategoriesSection