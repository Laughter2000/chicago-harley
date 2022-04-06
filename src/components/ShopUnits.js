import React from 'react'

const shopUnits = [
    {
        bgimage: "public/images/chicagoharley-sbp-cta1.jpg",
        amount: "$100"
    },
    {
        bgimage: "public/images/chicagoharley-sbp-cta2.jpg",
        amount: "$250"
    },
    {
        bgimage: "public/images/chicagoharley-sbp-cta3.jpg",
        amount: "$500"
    }
]

function ShopUnits() {
  return (
    <div className=" bg-mobile md:bg-none h-full min-w-full bg-no-repeat bg-cover text-center mb-8">
        <button className="text-white bg-black rounded-lg border-4 border-black text-center h-[61px]  text-2xl md:text-4xl font-extrabold hover:bg-main hover:text-black w-[70%] tracking-widest relative top-[50px] md:static">SHOP OVER 1,000 UNITS</button>
        <div className="flex flex-col md:flex-row justify-center text-center mx-auto md:justify-between mt-[21px]  md:w-full pl-[10%] md:pl-0 divide-y pb-16">

                    <div className={`flex flex-row md:flex-col bg-cta1 h-[144px] md:h-[241px]  w-[90%] md:w-[342px] bg-cover align-middle justify-center  from-blue-500 to-transparent pt-16 md:pt-0 border-2 border-white md:border-none`}>
                        <p className="font-extrabold text-5xl text-white pr-4">
                            $100
                        </p>
                        <p className="font-extrabold text-5xl text-white md:mt-2">
                            per month
                        </p>
                    </div>


                    <div className={`flex flex-row md:flex-col bg-cta2 h-[144px] md:h-[241px]  w-[90%] md:w-[342px] bg-cover align-middle justify-center  from-blue-500 to-transparent pt-16 md:pt-0 border-2 border-white md:border-none`}>
                        <p className="font-extrabold text-5xl text-white pr-4">
                            $250
                        </p>
                        <p className="font-extrabold text-5xl text-white md:mt-2">
                            per month
                        </p>
                    </div>


                    <div className={`flex flex-row md:flex-col bg-cta3 h-[144px] md:h-[241px]  w-[90%] md:w-[342px] bg-cover align-middle justify-center  from-blue-500 to-transparent pt-16 md:pt-0 border-2 border-white md:border-none`}>
                        <p className="font-extrabold text-5xl text-white pr-4">
                            $500
                        </p>
                        <p className="font-extrabold text-5xl text-white md:mt-2">
                            per month
                        </p>
                    </div>
            
        </div>
    </div>
  )
}

export default ShopUnits