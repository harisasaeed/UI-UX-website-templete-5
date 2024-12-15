
import Image from "next/image";

const ProductSectionone = () => {
  return (
    <div className="container mx-auto px-4  flex flex-col lg:flex-row gap-8 font-Montserrat">
      {/* Left Section - Image Slider */}
      <div className="flex-1 lg:w-[600px] mx-auto">
        <div className="relative">
          <Image  
            src={'/single-product-1-cover-2.jpg'}
            alt="Product Image"
            className="rounded-lg"
            width={600}
            height={400}
          />
          {/* Arrows */}
          <button className="absolute top-1/2 left-2 transform -translate-y-1/2  rounded-full p-2">
          <Image
            src={'/arrowleft.png'}
            alt="arrow 1"
           
            width={23}
            height={47}
          />
          </button>
          <button className="absolute top-1/2 right-2 transform -translate-y-1/2  rounded-full p-2">
          <Image
            src={'/arrowright.png'}
            alt="arrow 1"
            
            width={23}
            height={47}
          />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex mt-4 gap-4 justify-start lg:justify-start">
          <Image
            src={'/single-product-1-thumb-1.jpg'}
            alt="Thumbnail 1"
            className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
            width={100}
            height={100}
          />
          <Image
            src={'/single-product-1-thumb-2.jpg'}
            alt="Thumbnail 2"
            className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
            width={100}
            height={100}
          />
        </div>
      </div>

      {/* Right Section - Product Details */}
      <div className="flex-1 lg:w-[600px] mx-auto">
        {/* Product Title and Rating */}
        <h1 className="text-2xl font-semibold text-gray-800">
          Floating Phone
        </h1>
        <div className="flex items-center mt-2">
          <span className="flex items-center text-yellow-400">
          <Image src={'/star.png'} alt="star" width={24} height={24} />
          <Image src={'/star.png'} alt="star" width={24} height={24} />
          <Image src={'/star.png'} alt="star" width={24} height={24} />
          <Image src={'/star.png'} alt="star" width={24} height={24} />
          <Image src={'/starr.png'} alt="starr" width={24} height={24} />
          
          </span>
          <p className="ml-2 text-sm text-gray-500">(10 Reviews)</p>
        </div>

        {/* Price and Availability */}
        <p className="text-xl font-Montserrat font-semibold text-black mt-4">
          $1,139.33
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Availability:{" "}
          <span className="text-[#23A6F0] font-medium">In Stock</span>
        </p>

        {/* Description */}
        <p className="text-gray-700 mt-4">
        Met minim Mollie non desert<br className="sm:hidden"/> Alamo est sit cliquey dolor <br className=" hidden sm:block"/>
do <br className="sm:hidden"/>met sent. RELIT official consequent<br className="sm:hidden"/> door ENIM RELIT Mollie. <br className=" hidden sm:block"/>
Excitation <br className="sm:hidden"/>venial consequent sent nostrum met.
        </p>

        {/* Color Options */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-gray-700">Color:</h3>
          <div className="flex items-center gap-2 mt-2">
            {/* Color Option Circles */}
            <span className="h-6 w-6 rounded-full bg-blue-500 border border-gray-300 cursor-pointer"></span>
            <span className="h-6 w-6 rounded-full bg-green-500 border border-gray-300 cursor-pointer"></span>
            <span className="h-6 w-6 rounded-full bg-orange-500 border border-gray-300 cursor-pointer"></span>
            <span className="h-6 w-6 rounded-full bg-black border border-gray-300 cursor-pointer"></span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex items-center gap-4">
          <button className="px-6 py-2 bg-[#23A6F0] text-white rounded-md hover:bg-blue-600">
            Select Options
          </button>
          {/* Favorite/Action Icons */}
          <div className="flex items-center gap-4">
            <Image src={'/heart.png'} alt="heart" width={24} height={24} />
            <Image src={'/icn favorite.png'} alt="heart" width={24} height={24} />
            <Image src={'/icn favorite (1).png'} alt="eye" width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSectionone;
