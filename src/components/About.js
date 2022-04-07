import React from 'react'

const commitments = [
    "Mission: Fulfill our customers and our employees motorcycle dreams, so that we create Raving Fans and deliver profitable growth.",
    "Vision: Define the future of the motorcycle retail experience.",
    "Pledge: Choice, Convenience and Value",
    "Values: Honest, Professional and Fun"

]


const windy = [
    "Locations in 30 counties in Illinois and Wisconsin with 13 Harley-Davidson®, 2 Triumph, 1 BMW, 1 KTM, and 1 retail location",
    "Use Windy City Gift Cards at any of our locations",
    "Exchange/return items at any of our locations",
    "Rider-to-Rider Financing Program available"

]

function About() {
  return (
    <div className="text-center">
        <hr className="border-4 border-main"/>
        <div className="max-w-[90%] mx-auto">

        <h1 className="font-semibold text-4xl mt-16 font">About Us</h1>
        <h3 className="font-medium text-2xl mt-4">Chicago Harley-Davidson®</h3>

        <p className="mt-4 text-center">
        Owned and operated by riders for riders, <span className="font-bold decoration-solid underline cursor-pointer">Our Staff</span> lives and breathes the lifestyle with a passion for the iconic <span className="font-bold decoration-solid underline cursor-pointer">Harley-Davidson®</span> brand. Our core pledge to our valued customers always begins Choice, Convenience and Value. We're engaged in our communities and strive to connect one-on-one with you every day to meet and exceed your expectations long after the purchase.
        </p>

        <p className="mt-4 text-center">
        Visit Chicago Harley-Davidson® today to fulfill your personal dreams to freedom on the open road. We have access to one of the <span className="font-bold decoration-solid underline cursor-pointer">Largest Inventories</span>  of up to 1,000 New and quality Pre-Owned motorcycles in the country. Our Sales Associates will guide you with bike selection, proper fitting and Test Rides. No matter which bike you decide on, our professional Finance Team will go the extra mile to make sure you get competitive Financing and worry-free <span className="font-bold decoration-solid underline cursor-pointer">Warranties</span>. Check out our award-winning Service, Parts and Accessories and MotorClothes® departments.
        </p>

        <p className="mt-4 text-center">
        If you're new to riding, take a comprehensive, riding course by registering online for one of our many Chicago & Milwaukee Motorcycle School classes. Try before you buy with Chicago Motorcycle Rentals to see which bike suits your riding style best. Continue your journey with awesome adventures with group rides at Chicago Motorcycle Tours. Find out for yourself firsthand, why our customers ultimately become Raving Fans!       
        </p>
        
        </div>

        <div className="max-w-[90%] mx-auto mt-8">

        <h3 className="font-medium text-2xl mt-4">Our Story</h3>

        <p className="mt-4 text-center">
        Chicago Harley-Davidson® dates its historical roots clear back to Harley-Davidson®'s first official dealer. Charles H. Lang. Mr. Lang was a German-born businessman from Chicago, Illinois, who worked out of a small factory in downtown Chicago, manufacturing tools for piano tuners. Even then, Lang was a motorcycle rider. In 1904, he learned of the new Harley-Davidson® Motor Company and visited Milwaukee. It was then that he bought one motorcycle and agreed to become the first Harley-Davidson® dealer.
        </p>

        <p className="mt-4 text-center">
        Because of his success, Lang moved from his original location on East Adams Street to Michigan Avenue in the South Loop neighborhood of Chicago during the spring of 1912. Interestingly, one of the first Harley-Davidson® motorcycles that Lang sold eventually ended up back in his possession, and he kept it on display at his new dealership for several years. In time, Lang traded the motorcycle back to the company as partial payment on a later model. Lang's contributions were not limited by being the first dealer; they were substantial. He had grown close to the company in his earliest years as a dealer. Alongside the four founders and two other individuals, Lang was voted in as a member of the original Board of Directors in October 1907. At that time, he was allotted five shares of stock, and in many board meetings that followed Lang would be instrumental in contributing to major decisions regarding company growth, motorcycle retail prices and other matters of business.
</p>

        <p className="mt-4 text-center">
        Later in 2019, and the <span className="font-bold decoration-solid underline cursor-pointer">Windy City</span> Motorcycle Company was formed and moved the location of Chicago Harley-Davidson® from Glenview to Rosemont that same year. The new Chicago Harley-Davidson® location is in Rosemont's trendy restaurant and entertainment district known as the Parkway Bank Park Entertainment District. This 'ultra cool' area boasts weekly concerts right out front in the park area during the summer and an ice rink in the winter. Visit Chicago Harley-Davidson® at their Rosemont location soon, and see all the latest models, test ride, hang out with the friendly staff and have fun at night with all that the Rosemont Entertainment District has to offer!
        </p>                
        
        </div>


        <div className="max-w-[70%] mx-auto mt-8 text-center">
        <h3 className="font-medium text-2xl my-4">Our Commitment</h3>

        {
            commitments.map((commitment, index) => 
            <div className="flex text-center justify-center" key={index}>
                <div className="rounded-full w-[20px] h-[20px] bg-main text-white mr-4" >
                    <i className="fa fa-check" aria-hidden="true"></i>
                </div>
                <p>{commitment}</p>            
                </div>
        )
}
<div className="flex text-center justify-center">
                <div className="rounded-full w-[20px] h-[20px] bg-main text-white mr-4" >
                    <i className="fa fa-check" aria-hidden="true"></i>
                </div>
                <p>Best Price Guarantee: We will Meet or Beat any price - <span className="font-bold decoration-solid underline cursor-pointer">Click here for details</span> </p>            
                </div>


                <div className="flex text-center justify-center">
                <div className="rounded-full w-[20px] h-[20px] bg-main text-white mr-4" >
                    <i className="fa fa-check" aria-hidden="true"></i>
                </div>
                <p>100% Credit Approval Guarantee: We can finance anyone - <span className="font-bold decoration-solid underline cursor-pointer">Click here for details</span> </p>            
                </div>
        </div>


        <div className="max-w-[70%] mx-auto mt-8 text-center">
        <h3 className="font-medium text-2xl my-4">The Windy City Motorcycle Company Advantage</h3>

        {
            windy.map((commitment, index) => 
            <div className="flex justify-center" key={index}>
                <div className="rounded-full w-[20px] h-[20px] bg-main text-white mr-4" >
                    <i className="fa fa-check" aria-hidden="true"></i>
                </div>
                <p>{commitment}</p>            
                </div>
        )
}

<div className="flex text-center justify-center">
                <div className="rounded-full w-[20px] h-[20px] bg-main text-white mr-4" >
                    <i className="fa fa-check" aria-hidden="true"></i>
                </div>
                <p>Try before you buy with <span className="font-bold decoration-solid underline cursor-pointer">Chicago Motorcycle Tours</span> </p>            
                </div>
 
        </div>


        <div className="flex text-center justify-center">
                <div className="rounded-full w-[20px] h-[20px] bg-main text-white mr-4" >
                    <i className="fa fa-check" aria-hidden="true"></i>
                </div>
                <p>Group ride adventures with <span className="font-bold decoration-solid underline cursor-pointer">Chicago Motorcycle Tours</span> </p>            
                </div>


                <p className="font-thin mt-8">Chicago Harley-Davidson® is a proud member of the Windy City Motorcycle Company. That means that no matter what you're looking for, we have what you need.</p>

                <button className="text-white bg-black rounded-lg border-4 border-black text-center h-[41px]  text-sm md:text-md  font-extrabold hover:bg-main hover:text-black w-[90%] tracking-widest my-[18px]">Contact Us</button>
                <hr className="border-1 border-black w-[90%] mx-auto"/>
                <p className="font-thin mt-4 mb-20 text-xs">We proudly serve the motorcycle communities of Evanston, Kenosha, Naperville and Joliet..</p>

    </div>


  )
}

export default About