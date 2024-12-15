import Image from "next/image";

const TeamSection = () => {
  return (
 

      <div>
      {/* Team Section */}
      <section className="relative bg-white py-16">
      <div className="container mx-auto flex flex-col items-center gap-16 px-4">
        {/* Heading */}
        <div className="text-center max-w-lg">
          <h2 className="text-4xl font-bold text-[#252B42]">
            Meet Our Team
          </h2>
          <p className="text-base text-[#737373] mt-4">
            Problems trying to resolve the conflict between the two major
            realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-white  rounded-lg overflow-hidden">
            <div className="w-full h-[230px] relative">
              <Image
                src={"/team-1-user-1.jpg"}
                alt="Team Member 1"
                className="object-cover w-full h-full"
                width={315}
                height={230}
                />
            </div>
            <div className="p-6 text-center">
              <h5 className="text-xl font-bold text-[#252B42]">John Doe</h5>
              <h6 className="text-sm font-semibold text-[#737373]">
                Software Engineer
              </h6>
              {/* Social Media */}
              <div className="flex justify-center gap-4 mt-4">
                <Image
                  src={"/facebook.png"}
                  alt="Facebook"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/ant-design_instagram-outlined.png"}
                  alt="Instagram"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/ant-design_twitter-outlined.png"}
                  alt="Twitter"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                  />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center bg-white  rounded-lg overflow-hidden">
            <div className="w-full h-[230px] relative">
              <Image
                src={"/team-1-user-2.jpg"}
                alt="Team Member 2"
                className="object-cover w-full h-full"
                width={315}
                height={230}
                />
            </div>
            <div className="p-6 text-center">
              <h5 className="text-xl font-bold text-[#252B42]">
                Jane Smith
              </h5>
              <h6 className="text-sm font-semibold text-[#737373]">
                Marketing Head
              </h6>
              <div className="flex justify-center gap-4 mt-4">
                <Image
                  src={"/facebook.png"}
                  alt="Facebook"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/ant-design_instagram-outlined.png"}
                  alt="Instagram"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/ant-design_twitter-outlined.png"}
                  alt="Twitter"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
   

          {/* Card 3 */}
          <div className="flex flex-col items-center bg-white  rounded-lg overflow-hidden">
            <div className="w-full h-[230px] relative">
              <Image
                src={"/team-1-user-3.jpg"}
                alt="Team Member 3"
                className="object-cover w-full h-full"
                width={315}
                height={230}
              />
            </div>
            <div className="p-6 text-center">
              <h5 className="text-xl font-bold text-[#252B42]">
                Emily Rose
              </h5>
              <h6 className="text-sm font-semibold text-[#737373]">
                UI/UX Designer
              </h6>
              <div className="flex justify-center gap-4 mt-4">
                <Image
                  src={"/facebook.png"}
                  alt="Facebook"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/ant-design_instagram-outlined.png"}
                  alt="Instagram"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
                <Image
                  src={"/ant-design_twitter-outlined.png"}
                  alt="Twitter"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</div>
  )
};

export default TeamSection;
