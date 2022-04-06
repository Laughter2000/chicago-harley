import Header from 'components/Header'
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
    </div>
  )
}

export default Home