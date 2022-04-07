import { LocationMarkerIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LineUp, Links, hours, siteDetails } from './data'

 
function Footer() {
    const [activateLink, setActivateLink] = useState(true)
    const [activateLine, setActivateLine] = useState(true)
  return (
    <div className="bg-footer bg-cover w-full h-full p-[30px] flex flex-wrap justify-between">



        <div className="flex flex-col text-white w-full md:w-[25%] justify-items-start mb-8 md:mb-0">
            <h2 className="font-extrabold text-lg mb-8">INFO</h2>

        <div className=" py-0 mt-2 flex text-white">
                <LocationMarkerIcon className="h-12 w-12"/>
                <p className="text-white mt-1 max-w-[200px]">5490 Park Place Rosemont, IL 60018</p>
        </div>

        <p className="font-extrabold text-4xl cursor-pointer hover:text-main my-4">847.450.7368</p>
        
        <p>"Powered by Windy City Motorcycle Company with 15 locations across Chicagoland and Southern Wisconsin.</p>
        </div>


        <div className="flex flex-col text-white mb-8 md:mb-0"> 
        <h2 className="font-extrabold text-lg mb-8 border-b-4 border-white md:border-none w-[85px] cursor-pointer" onClick={() => setActivateLine(prev => !prev)}>LINE UP
            {!activateLine && <i className="fa fa-chevron-down mt-1 ml-2 md:hidden" aria-hidden="true"></i>}
            {activateLine && <i className="fa fa-chevron-up mt-1 ml-2 md:hidden" aria-hidden="true"></i>}
            </h2> 

            <ul className={` ${!activateLine && `hidden`} flex flex-col list-none rounded-none cursor-pointer text-white`}>
            {
                            LineUp.map(item => (
                                <li key={item.name}>
                                <Link
                                className="text-sm  py-1  font-thin block hover:text-main"
                                to={`${item.link}`}
                              >{item.name}
                              </Link>
                              </li>
                            ))
                        }
            </ul>
        </div>


        <div className="flex flex-col text-white mb-8 md:mb-0">
            <h2 className="font-extrabold text-lg mb-8 border-b-4 border-white md:border-none w-[75px] cursor-pointer" onClick={() => setActivateLink(prev => !prev)}>LINKS
            {!activateLink && <i className="fa fa-chevron-down mt-1 ml-2 md:hidden" aria-hidden="true"></i>}
            {activateLink && <i className="fa fa-chevron-up mt-1 ml-2 md:hidden" aria-hidden="true"></i>}
            </h2> 

            <ul className={` ${!activateLink && `hidden`} flex md:flex flex-col list-none rounded-none cursor-pointer text-white`}>
            {
                            Links.map(item => (
                                <li key={item.name}>
                                <Link
                                className="text-sm  py-1  font-thin block hover:text-main"
                                to={`${item.link}`}
                              >{item.name}
                              </Link>
                              </li>
                            ))
                        }
            </ul>
        </div>
        
        <div className="flex flex-col text-white mb-8 md:mb-0">
            <h2 className="font-extrabold text-lg mb-8">HOURS</h2>

            <ul className="flex flex-col list-none rounded-none cursor-pointer text-white">
            {
                            Object.keys(hours).map(item => (
                                <div className="flex justify-between text-white" key={item}>
                                    <p>{item}</p>
                                    <p className="pl-8">{hours[item]}</p>
                                </div>
                            ))
                        }
            </ul>
        </div>


        <div className="flex flex-wrap justify-between md:justify-start md:flex-col text-white mb-8 md:mb-0">
            <h2 className=" w-full font-extrabold text-lg mb-8">SOCIAL</h2>
                                <div className="flex justify-between text-white mb-4 mr-4 md:mr-0">
                                    <i className="fab fa-facebook mt-1" aria-hidden="true"></i>
                                    <p className="pl-4">Facebook</p>
                                </div>
                                <div className="flex justify-between text-white mb-4 mr-4 md:mr-0">
                                    <i className="fab fa-instagram mt-1" aria-hidden="true"></i>
                                    <p className="pl-4">Instagram</p>
                                </div>
                                <div className="flex justify-between text-white mb-4 mr-4 md:mr-0">
                                    <i className="fab fa-youtube mt-1" aria-hidden="true"></i>
                                    <p className="pl-4">Youtube</p>
                                </div>
                                <div className="flex justify-between text-white mb-4 mr-4 md:mr-0">
                                    <i className="fa fa-commenting mt-1" aria-hidden="true"></i>
                                    <p className="pl-4">Text Club</p>
                                </div>
                        
        </div>


        <div className="flex flex-col text-white mb-8 md:mb-0">
            <h2 className="font-extrabold text-lg mb-8">LEGAL</h2>

            <p className="font-light">Copyright© 2022 Dealer Spike
            All Rights Reserved</p>

            <div className="flex flex-wrap cursor-pointer text-white my-4">
            {
                            siteDetails.map(item => (
                                <p className="px-2" key={item.name}>
                                <Link
                                className="text-sm  py-1  font-thin block hover:text-main"
                                to={`${item.link}`}
                              >
                                  {item.name}
                                  </Link>
                                    </p>
                            ))
                        }
            </div>

            <img src="./images/ds-logo-light.png" alt="footer" className="w-20 h-10"/>
        </div>

    </div>
  )
}

export default Footer