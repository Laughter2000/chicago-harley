import React from 'react'

const contents = [
    {
        name: "LEARN TO RIDE",
        image: "./images/learn-to-ride.jpg",
        link: "RIDING ACADEMY",
        description: "Jumpstart your journey to becoming a confident motorcycle rider at Chicago Motorcycle School. We're here to help you learn on the open road!"
        },

    {
        name: "RENT A BIKE",
        image: "./images/rent-a-bike.jpg",
        link: "RENTALS",
        description: "Chicago Motorcycle Rentals are here to help serve your motorcycle needs! Find the right bike for you through a demo ride or take on a new adventure exploring the open road."},

    {
        name: "MOTORCYCLE TOURS",
        image: "./images/motorcyles-tour.jpg",
        link: "MOTORCYCLE TOURS",
        description: "Experience more from the saddle and build meaningful relationships with fellow riders. Chicago Motorcycle Tours is here to help you explore the nation on two wheels and make everlasting memories."        }
]

const MobileFeatures = () => {
    return (

<div className="flex flex-col  lg:hidden justify-center align-middle bg-cta5 bg-cover h-[290px] w-full  mb-8 p-4 mx-auto">
        <button className="text-white bg-black rounded-lg border-4 border-black text-center h-[61px]  text-2xl md:text-4xl font-extrabold hover:bg-main hover:text-black w-[60%] tracking-widest mb-[18px] mx-auto">+ RIDING ACADEMY</button>
        <button className="text-white bg-black rounded-lg border-4 border-black text-center h-[61px]  text-2xl md:text-4xl font-extrabold hover:bg-main hover:text-black w-[60%] tracking-widest mb-[18px] mx-auto">+ MOTORCYCLE RENTALS</button>
        <button className="text-white bg-black rounded-lg border-4 border-black text-center h-[61px]  text-2xl md:text-4xl font-extrabold hover:bg-main hover:text-black w-[60%] tracking-widest mx-auto">+ MOTORCYCLE TOURS</button>
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
function Academy() {
  return (
    <>
        <MobileFeatures /> 
        <DesktopFeature />
    </>
  )
}

export default Academy