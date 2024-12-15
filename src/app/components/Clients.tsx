

import Image from "next/image";
import CardText from "./CardText";

const Clients = () => {
  const productImages = [
    '/product-cover-5 (8).png',
    '/product-cover-5 (9).png',
    '/product-cover-5 (10).png',
    '/product-cover-5 (11).png',
    '/product-cover-5 (12).png',
    '/product-cover-5 (13).png',
    '/product-cover-5 (14).png',
    '/product-cover-5 (15).png',
    '/product-cover-5 (16).png',
    '/product-cover-5 (17).png',
    '/product-cover-5 (18).png',
    '/product-cover-5 (19).png'
  ];

  const renderProductCards = () => {
    return productImages.map((pic, index) => (
      <div key={index} className="w-full sm:w-[238px] mx-auto mb-[30px]">
        <div className="w-full h-full flex flex-col items-center mb-[50px]">
          <div className="w-[239px] h-[427px]">
            <Image src={pic} alt={`Product Image ${index + 1}`} width={239} height={427} />
            <CardText />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="max-w-[1440px] mx-auto">   
      {/* Container for products */}
      <div className="w-full h-auto mx-auto py-[48px] gap-[48px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {/* Product Cards */}
          {renderProductCards()}
        </div>

        {/* Pagination Button */}
        <div className="w-full flex justify-center mt-[40px]">
          <div className="w-[313px] h-[74px] rounded-[6.73px] border-[1.35px] border-[#BDBDBD] shadow-md flex items-center justify-center space-x-2">
            <div className="bg-[#F3F3F3] text-[#737373] font-extrabold py-6 px-8 border border-[#d5d5d5] rounded-l-md cursor-pointer">
              First
            </div>
            <div className="bg-white text-[#1D4ED8] py-6 px-5 border border-[#d5d5d5] shadow-md cursor-pointer">
              1
            </div>
            <div className="bg-[#1D4ED8] text-white py-6 px-5 border border-[#d5d5d5] shadow-md cursor-pointer">
              2
            </div>
            <div className="bg-white text-[#1D4ED8] py-6 px-5 border border-[#d5d5d5] shadow-md cursor-pointer">
              3
            </div>
            <div className="bg-white text-[#1D4ED8] py-6 px-8 border border-[#d5d5d5] rounded-r-md shadow-md cursor-pointer">
              Next
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
