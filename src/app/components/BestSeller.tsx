import Image from "next/image";
import CardTextone from "./CardTextone";

export default function BestSeller() {
  return (
    <div className="w-full flex justify-center bg-white py-10 lg:pt-10 pb-20">
      <div className="w-full max-w-[1124px] flex flex-col gap-20 mt-12 sm:mt-8 md:ml-12  sm:px-4">
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-Montserrat sm:text-start  font-bold text-2xl md:text-[24px] text-center sm:w-full tracking-tight text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center lg:grid-cols-4 lg:gap-x-4 lg:gap-y-20 gap-4">
          {[
            "/pink1.png",
            "/pink2.png",
            "/pink3.png",
            "/pink4.png",
            "/pink5.png",
            "/pink6.png",
            "/pink1.png",
            "/pink2.png",
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
              <CardTextone />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
