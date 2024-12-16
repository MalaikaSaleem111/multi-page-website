import React from 'react'
import Link from 'next/link'

const Feature = () => {
  return (
    <section className="w-full bg-gray-200 px-4 sm:px-10 lg:px-20 py-5">
      <div className="flex flex-col sm:flex-row justify-between items-center h-auto">
        <h3 className="font-bold text-xl text-center sm:text-left">Featured New Cars</h3>
        <h4 className="text-blue-600 mt-2 sm:mt-0">View All New Cars</h4>
      </div>

      <div className="flex justify-start py-6 text-lg gap-6 sm:gap-10 overflow-x-auto">
        <h2 className="font-semibold whitespace-nowrap">Popular</h2>
        <h2 className="whitespace-nowrap">Upcoming</h2>
        <h2 className="whitespace-nowrap">Newly Launched</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <Link href="/toyota-corolla">
            <img
              src="https://cache1.pakwheels.com/system/car_generation_pictures/5361/medium/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674"
              alt="Toyota Corolla"
              className="h-48 w-full object-cover rounded-md"
            />
            <h3 className="text-blue-950 font-bold text-center mt-2">Toyota Corolla</h3>
            <p className="text-green-500 text-center">PKR 59.7 - 75.5 lacs</p>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <Link href="/suzuki_alto">
            <img
              src="https://cache4.pakwheels.com/system/car_generation_pictures/6013/medium/Suzuki_Alto_-_PNG.png?1635945100"
              alt="Suzuki Alto"
              className="h-48 w-full object-cover rounded-md"
            />
            <h3 className="text-blue-950 font-bold text-center mt-2">Suzuki Alto</h3>
            <p className="text-green-500 text-center">PKR 23.3 - 30.5 lacs</p>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <Link href="/honda_city">
            <img
              src="https://cache1.pakwheels.com/system/car_generation_pictures/6425/medium/Honda_City_Front.jpg?1651424945"
              alt="Honda City"
              className="h-48 w-full object-cover rounded-md"
            />
            <h3 className="text-blue-950 font-bold text-center mt-2">Honda City</h3>
            <p className="text-green-500 text-center">PKR 46.5 - 58.5 lacs</p>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <Link href="/honda_civic">
            <img
              src="https://cache4.pakwheels.com/system/car_generation_pictures/7370/medium/Cover.jpg?1677570254"
              alt="Honda Civic"
              className="h-48 w-full object-cover rounded-md"
            />
            <h3 className="text-blue-950 font-bold text-center mt-2">Honda Civic</h3>
            <p className="text-green-500 text-center">PKR 86.6 - 99.0 lacs</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Feature;