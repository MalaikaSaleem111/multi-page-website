
export default function Hero(){
    return(
        
        <div className="w-full h-auto bg-white pt-8 px-4">
        <h1 className="text-center font-bold text-xl sm:text-2xl">
            Sell Your Car on PakWheels and Get the Best Price
        </h1>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly mt-6  rounded-md mx-4 sm:mx-12 lg:mx-36 py-10 space-y-8 lg:space-y-0">
            <div className="text-center lg:text-left">
                <h2 className="text-blue-900 font-semibold text-lg pb-6">Post your Ad on PakWheels</h2>
                <ul className="pb-4 list-disc text-justify">
                    <li>Post your Ad for Free in 3 Easy Steps</li>
                    <li>Get Genuine offers from Verified Buyers</li>
                    <li>Sell your car Fast at the Best Price</li>
                </ul>
                <button className="bg-red-600 rounded-lg py-2 px-6 text-white mt-4 hover:bg-red-700 transition">
                    Post Your Ad
                </button>
            </div>
    
            <h3 className="text-center font-semibold text-gray-600 text-xl lg:text-2xl mt-4 lg:mt-20">
                OR
            </h3>
    
            <div className="text-center lg:text-left">
                <h2 className="text-blue-900 font-semibold text-lg pb-6">Try PakWheels Sell It For Me</h2>
                <ul className="pb-4 list-disc text-justify">
                    <li>Dedicated Sales Expert to Sell your Car</li>
                    <li>We Bargain for you and share the Best Offer</li>
                    <li>We ensure Safe & Secure Transaction</li>
                </ul>
                <button className="bg-blue-600 rounded-lg py-2 px-6 text-white mt-4 hover:bg-blue-700 transition">
                    Register Your Car
                </button>
            </div>
        </div>
    </div>
    )    
}