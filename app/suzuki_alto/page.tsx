import Link from "next/link"
export default function Suzuki_Alto(){
    return (
      <div className="bg-sky-100 min-h-screen px-4 sm:px-10 py-8">
        {/* Page Title */}
        <h1 className="font-bold text-center text-lg sm:text-xl lg:text-2xl">
          Suzuki Alto 2024 Price in Pakistan, Images, Reviews & Specs
        </h1>
  
        {/* Image Section */}
        <div className="flex justify-center mt-6">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D12AQEr5JRcTtzWVg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1712558027267?e=2147483647&v=beta&t=HDQM6AqzsfAdGSCCOIQ3z0bgLn6voI2pdxGwvhpxbH4"
            className="h-40 w-60 sm:h-52 sm:w-72 lg:h-60 lg:w-80 object-cover rounded-md"
            alt="Suzuki Alto 2024"
          />
        </div>
  
        {/* Buttons Section */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button className="w-40 h-12 sm:w-48 sm:h-14 bg-blue-900 text-white rounded-lg">
            Book a Test Drive
          </button>
          <button className="w-48 h-12 sm:w-56 sm:h-14 bg-white text-blue-800 rounded-lg border border-blue-800">
            Request Bank Finance
          </button>
          <button className="w-40 h-12 sm:w-48 sm:h-14 bg-white text-blue-800 rounded-lg border border-blue-800">
            Visit Place
          </button>
          <button className="w-40 h-12 sm:w-48 sm:h-14 bg-white text-blue-800 rounded-lg border border-blue-800">
            Car Inspection
          </button>
        </div>
  
        {/* Vehicle Description */}
        <h2 className="font-bold text-center text-lg sm:text-xl pt-8">
          Vehicle Description
        </h2>
        <p className="text-center pt-4 text-sm sm:text-base">
          <b>Number of Doors:</b> 4 &nbsp; <b>Engine:</b> 1800 CC &nbsp;
          <b>Condition:</b> 8.5/10 &nbsp; <b>Driven:</b> 95,000 KM <br />
          <b>Suspension Type:</b> Soft Suspension &nbsp; <b>Avg:</b> 13 Km per
          liter &nbsp; <b>Transmission:</b> Automatic &nbsp; <b>Fuel Type:</b>{" "}
          High Octane
        </p>
  
        {/* Price */}
        <h3 className="text-center font-bold text-green-600 pt-6 text-lg sm:text-xl">
          PKR 30,00,000
        </h3>
  
        {/* Payment Button */}
        <div className="flex justify-center mt-6">
          <Link href="/form">
            <button className="w-40 h-12 sm:w-48 sm:h-14 bg-blue-900 text-white rounded-lg">
              Make Payment
            </button>
          </Link>
        </div>
      </div>
    );
  }
  