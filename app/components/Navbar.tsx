import Image from "next/image";
export default function Navbar() {
    return (
      <nav className="bg-black w-full lg:h-28 px-4 sm:px-10 py-2">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-white text-sm">
          <div className="flex justify-start w-full">
            <p>Download App via SMS</p>
          </div>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <div className="text-red-400 cursor-pointer">URDU</div>
            <div className="cursor-pointer">SignUP</div>
            <div className="cursor-pointer">SignIn</div>
          </div>
        </div>
  
        <hr className="border-t-2 border-gray-600 my-2" />
  
        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full">
          {/* Logo */}
          <div className="w-36 h-16 flex-shrink-0">
            <Image
              src="/pw-logo.png"
              alt="pakwheels logo"
              width={200}
              height={200}
            />
          </div>
  
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center lg:justify-evenly items-center gap-4 lg:gap-6 pt-4 lg:pt-0 text-white font-bold">
            <div className="cursor-pointer hover:text-gray-300">Used Cars</div>
            <div className="cursor-pointer hover:text-gray-300">New Cars</div>
            <div className="cursor-pointer hover:text-gray-300">Bikes</div>
            <div className="cursor-pointer hover:text-gray-300">Auto Store</div>
            <div className="cursor-pointer hover:text-gray-300">Videos</div>
            <div className="cursor-pointer hover:text-gray-300">Forums</div>
            <div className="cursor-pointer hover:text-gray-300">Blog</div>
            <div className="cursor-pointer hover:text-gray-300">More</div>
          </div>
  
          {/* CTA Button */}
          <div className="pt-4 lg:pt-0">
            <button className="bg-rose-800 text-white rounded-2xl px-4 py-2 w-full sm:w-36 hover:bg-rose-700">
              Post an AD
            </button>
          </div>
        </div>
      </nav>
    );
  }
  