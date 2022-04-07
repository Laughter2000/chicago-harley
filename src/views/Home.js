import Academy from 'components/Academy'
import Features from 'components/Features'
import Footer from 'components/Footer'
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
        <div className="bg-torn-pattern">
        <img src="./images/new-trade-asset.jpg" alt="new-trade-asset" className="bg-torn-pattern"/>
        </div>
        <BikeCarousel />
        <ShopUnits />
        <WeekBike />
        <Features />
        <Services />
        <Academy />
        <Footer />
    </div>
  )
}

export default Home