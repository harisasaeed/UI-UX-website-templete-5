
import CardText from "./CardText";

import Image from "next/image";

export default function ProductCardhome() {
  return (
    <div className="w-full flex justify-center bg-white py-10 lg:pt-10 pb-20">
      <div className="w-full max-w-[1124px] flex flex-col gap-20 mt-12 sm:mt-8 md:ml-12  sm:px-4">

        <div className="flex flex-col items-center gap-2">
          <h4 className="font-Montserrat font-medium tracking-wider text-xl md:text-[20px]  text-[#737373]">
            Featured Products
          </h4>
          <h3 className="font-Montserrat font-bold text-2xl md:text-[24px] text-center w-40 sm:w-full tracking-tight text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-Montserrat font-medium tracking-wider text-[14px] md:text-[16px] w-52 sm:w-full text-[#737373] text-center">
            Problems trying to resolve the conflict between
          </p>
        </div>


        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center lg:grid-cols-4 lg:gap-x-4 lg:gap-y-20 gap-4">

          {[
            '/product-cover-5.png',
            '/product-cover-5 (1).png',
            '/product-cover-5 (2).png',
            '/product-cover-5 (3).png',
            '/product-cover-5 (4).png',
            '/product-cover-5 (5).png',
            '/product-cover-5 (6).png',
            '/product-cover-5 (7).png',
          ].map((pic, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#F9F9F9] rounded-md mx-auto  shadow-sm"
            >
              <div className="w-full h-auto">
                <Image
                  src={pic}
                  alt={`picture${index + 1}`}
                  className="rounded-md object-cover"
                  width={239}
                  height={427}
                />
              </div>
              <CardText />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
