import Academy from 'components/Academy'
import Features from 'components/Features'
import Header from 'components/Header'
import Services from 'components/Services'
import ShopUnits from 'components/ShopUnits'
import BikeCarousel from 'components/TopBikesCarousel'
import WeekBike from 'components/WeekBike'
import React from 'react'

function Home() {
  return (
    <div className="lg:px-20">
        <Header />
        <BikeCarousel />
        <ShopUnits />
        <WeekBike />
        <Features />
        <Services />
        <Academy />
    </div>
  )
}

export default Home