import React, {useState} from 'react'
import { FaMapMarkerAlt, FaMobileAlt} from "react-icons/fa"
import { Link } from "react-router-dom";
import "@fontsource/roboto-condensed";
import { ChevronDownIcon, LocationMarkerIcon } from '@heroicons/react/solid'
import Links from './Links';


const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeNav, setActiveNav] = useState(null)
    
    return (
        <div className="flex flex-col mt-4 lg:hidden">
            <div className="flex flex-row justify-between align-middle px-8">
            <div className="align-middle mt-8 flex justify-between w-12 md:hidden">
            <FaMapMarkerAlt />
            <FaMobileAlt />
            </div>
            <div className="flex flex-col align-middle h-24 w-24">
                <img src="./images/chicagoharley-logo.png" alt="logo" className="w-15 h-15"/>
            </div>

            <button className="text-main w-10 h-10 relative focus:outline-none bg-white mt-6" onClick={() => setIsOpen(previous => !previous)}>
                <span className="sr-only">Open main menu</span>
                <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                    <span aria-hidden="true" className={`block absolute h-0.5 w-10 bg-current transform transition duration-500 ease-in-out ${isOpen && `rotate-45`} ${!isOpen && `-translate-y-1.5`}`}></span>
                    <span aria-hidden="true" className={`block absolute  h-0.5 w-10 bg-current transform transition duration-500 ease-in-out" ${isOpen && 'opacity-0'}`}></span>
                    <span aria-hidden="true" className={`block absolute h-0.5 w-10 bg-current transform transition duration-500 ease-in-out ${isOpen && `-rotate-45`} ${!isOpen && `translate-y-1.5`}`}></span>
                </div>
            </button>

            <div className="hidden md:flex align-middle justify-between mt-7">
                <div className="flex w-50 align-middle">
                <LocationMarkerIcon className="h-5 w-5 mt-4" />
                <p className="max-w-[150px] pl-3">5490 Park Place RoseMont, IL 6DD18</p>
                </div>
                <div className="p-3 h-6 bg-main py-0 mt-4">
                <p className="text-white">847.454.7244</p>

                </div>
            </div>
            </div>  

            <div className={`${!isOpen && `hidden`} transition ease-in-out`}>
                <ul className={`min-w-full flex flex-col list-none rounded-none  bg-black text-white divide-y `} >
                {Object.keys(Links).map(link =>
                    <div className="flex flex-col" key={link}>
                    <div className={`flex py-3 px-2 ${activeNav === link && `bg-main`}`} onClick={() => setActiveNav(prev => {return prev === link ? null : link})}>
                    <li className="text-xs">{link}</li>
                    <ChevronDownIcon className="h-3 w-3 text-white" />
                    </div>
                    <ul className={`min-w-full flex flex-col list-none rounded-none  bg-primary text-white divide-y divide-black  ${activeNav !== link && `hidden`} transition-transform linear`}>
                        {
                            Links[link].map(item => (
                                <li key={item.name}>
                                <Link
                                className="text-sm capitalize py-2 px-4 font-thin block text-black"
                                to={`${item.link}`}
                              >{item.name}
                              </Link>
                              </li>
                            ))
                        }
                    </ul>
                        </div>)}
                </ul>
            </div>

        </div>
    )
}



const DesktopNav = () => {
    return (
        <div className="hidden lg:flex mt-16 align-middle text-xs justify-between cursor-pointer hover:border-">
                <div className="p-3 h-6 bg-main py-0 mt-2 hover:bg-gray-900">
                <p className="text-white mt-1">847.454.7244</p>
                </div>

                {
                    Object.keys(Links).slice(0,4).map(link => (
                        <div className="dropdown inline-block relative cursor-pointer " key={link}>
                        <p className="text-black font-semibold py-2 px-4 cursor-pointer inline-flex items-center border-b-4 border-white hover:border-main">
                         {link}
                        </p>
                        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 w-44">
                        {
                            Links[link].map(item => (
                                <li key={item.name}>
                                <Link
                                className="bg-primary text-sm capitalize py-2 px-4 font-bold block text-black hover:text-white hover:bg-main"
                                to={`${item.link}`}
                              >{item.name}
                              </Link>
                              </li>
                            ))
                        }                        </ul>
                      </div>
                    ))
                }
              <div className="flex flex-col h-25 w-25 relative top-[-50px]">
                <img src="./images/chicagoharley-logo.png" alt="logo" className="w-15 h-15"/>
            </div>

            {
                    Object.keys(Links).slice(5,).map(link => (
                        <div className="dropdown inline-block relative cursor-pointer" key={link}>
                        <p className="text-black font-semibold py-2 px-4 cursor-pointer inline-flex items-center border-b-4 border-white hover:border-main">
                         {link}
                        </p>
                        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 w-44">

                        {
                            Links[link].map(item => (
                                <li key={item.name}>
                                <Link
                                className="bg-primary text-sm capitalize py-2 px-4 font-bold block text-black hover:text-white hover:bg-main"
                                to={`${item.link}`}
                              >{item.name}
                              </Link>
                              </li>
                            ))
                        }


                          {/* <li><Link className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to={`#`}>Two</Link></li> */}
                        </ul>
                      </div>
                    ))
                }

            <div className="p-3 h-6 w-34 py-0 mt-2 flex bg-gray-700 hover:bg-main">
                <LocationMarkerIcon />
                <p className="text-white mt-1">Rosemont,IL</p>
                </div>

        </div>
    )
}

function Header() {
  return (
    <div>
        <img src="./images/chicagoharley-image-price-guarantee-te.png" alt="chicagoharly-price-guarantee"/>
        <MobileNav />
        <DesktopNav />
        <div className="bg-torn-pattern">
        <img src="./images/new-trade-asset.jpg" alt="new-trade-asset" className="bg-torn-pattern"/>
        </div>
    </div>
  )
}

export default Header