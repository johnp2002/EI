import React from 'react'
import Header from '../Components/Header'
import CategoriesBar from '../Components/CategoriesBar'
import HeroBanner from '../Components/HeroBanner'
import CategoriesSection from '../Components/CategoriesSection'
import ItemsSection from '../Components/ItemsSection'
const Home = () => {
  return (
    <div className='scr overflow-x-hidden'>
        <Header />
        <CategoriesBar />
        <HeroBanner/>
        <CategoriesSection/>
        <ItemsSection/>
    </div>
  )
}

export default Home