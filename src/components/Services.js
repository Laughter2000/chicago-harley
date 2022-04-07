import React from 'react'


const contents = [
    {
        name: "MOTORCLOTHES",
        image: "./images/CheckYourHelmetMonth_WebsiteOffer_866x378.jpg",
        description: "Hit the road in style with the latest OEM Harley-Davidson® MotorClothes® accessories and apparel!",
        link: "SHOP NOW",
        order: 0
    },

    {
        name: "SERVICE",
        image: "./images/chicagoharley-department-service-img.png",
        description: "Chicago Harley-Davidson® offers expert, factory-trained technicians on hand with dozens of years of experience to tackle all your motorcycle issues!",
        link: "SCHEDULE SERVICE",
        order: 1
    },

    {
        name: "PARTS & ACCESSORIES",
        image: ".//images/ppm.jpg",
        description: "Get the upgrades you deserve with our OEM Harley-Davidson® motorcycle parts and accessories for sale in Rosemont, IL!",
        link: "ORDER PARTS",
        order: 0
        },

    ]
function Services() {
  return (
    <div className="flex flex-col bg-patternrow bg-cover w-full h-full md:bg-none my-16 py-8">
        {
            contents.map(content => (
                <div className="flex flex-col mb-[35px] md:my-[45px] mx-auto">
                    <h3 className="font-extrabold text-3xl md:hidden mb-4">{content.name}</h3>
                    <div className="flex flex-row w-[100%]">
                        <img src={content.image} alt={content.name} className={`  h-[256px] md:order-${content.order}`}/>
                        <div className="hidden md:flex flex-col justify-between align-middle bg-patternrow bg-cover  w-[50%] h-[256px] p-4">
                            <h1 className="font-extrabold text-4xl ">{content.name}</h1>
                            <p className="font-light max-w-[90%]">{content.description}</p>
                            <button className="text-white bg-black rounded-lg border-4 border-black text-center h-[61px]  text-md  font-extrabold hover:bg-main hover:text-black w-[180px] tracking-widest mb-[18px] ">+ {content.link}</button>
                        </div>
                    </div>
                    <button className="text-white bg-black rounded-lg border-4 border-black text-center h-[61px]  text-md  font-extrabold hover:bg-main hover:text-black w-[100%] tracking-widest mb-[18px] md:hidden mt-4">+ {content.link}</button>
                </div>
            ))
        }
    </div>
  )
}

export default Services