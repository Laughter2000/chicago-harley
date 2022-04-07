import React from 'react'

const contents = [
    {
        name: "FINANCE",
        image: "./images/finance.png",
        link: "GET APPROVED",
        description: "We offfer 100% credit approval to everyone regardless of credit score. You must be at least 18 years old, have a valid driver's license, and make at least $2,000 gross income a month to qualify.",
    },

    {
        name: "WE BUY BIKES",
        image: "./images/we_buy_bikes.jpg",
        link: "VALUE A TRADE",
        description: "Trade in your motorcycle for a price it deserves! Whether you're upgrading or selling, we are here to offer competitive pricing for all used motorcycle purchases."    },

    {
        name: "DEALERSHIP EVENTS",
        image: "./images/dealership.png",
        link: "SET EVENT",
        description: "Chicago Harley-Davidson® offers a wide range of riding events, new bike demonstrations, charity gatherings, and more at our dealership in Rosemont, IL!"
        }
]

const MobileFeatures = () => {
    return (

<div className="flex flex-col  lg:hidden justify-center align-middle bg-cta5 bg-cover h-[290px] w-full  mb-8 p-4 mx-auto">
        <button className="text-white bg-black rounded-lg border-4 border-black text-center h-[61px]  text-2xl md:text-4xl font-extrabold hover:bg-main hover:text-black w-[50%] tracking-widest mb-[18px] mx-auto">+ GET APPROVED</button>
        <button className="text-white bg-black rounded-lg border-4 border-black text-center h-[61px]  text-2xl md:text-4xl font-extrabold hover:bg-main hover:text-black w-[50%] tracking-widest mb-[18px] mx-auto">+ VALUE A TRADE</button>
        <button className="text-white bg-black rounded-lg border-4 border-black text-center h-[61px]  text-2xl md:text-4xl font-extrabold hover:bg-main hover:text-black w-[50%] tracking-widest mx-auto">+ SET EVENT</button>
</div>
    )
}


const DesktopFeature = () => {
    return (
        <div className="hidden lg:flex justify-between align-middle my-16">
            {contents.map(content => (
            <div className="flex flex-col flex-wrap">
            <div>
                <img src={content.image} alt={content.name} className="h-[361px] w-[357px]"/>
                <button className="text-white bg-black rounded-lg border-4 border-black text-center h-[41px]  text-md  font-extrabold hover:bg-main hover:text-black w-[170px] tracking-widest mb-[18px] relative top-[-20px] right-[-52%]">+ {content.link}</button>
            </div>

            <div className="flex flex-col flex-wrap w-[357px]">
                <h2 className="font-extrabold text-3xl mb-4">{content.name}</h2>
                <p className="font-light max-w-[90%]">{content.description}</p>
            </div>

            </div>
            ))}
        </div>
    )
}
function Features() {
  return (
    <>
        <MobileFeatures /> 
        <DesktopFeature />
    </>
  )
}

export default Features