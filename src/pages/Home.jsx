import React from 'react'
import Banner from '../components/Banner/Banner'
import BannerBottom from '../components/Banner/BannerBottom'
import SerCards from '../components/Cards/SerCards'
import StateCards from '../components/Cards/StateCards'
import Footer from '../components/Footer/Footer'



const Home = () => {
  return (
    <div>
      <Banner/>
      <BannerBottom/>
      <SerCards/>
      <StateCards/>
      <Footer/>
     
    </div>
  )
}

export default Home
