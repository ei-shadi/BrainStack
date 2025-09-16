

import { PiBookOpenUserFill, PiSparkleBold } from "react-icons/pi";

const Hero = () => {
  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* X Organizations Black Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
        }}
      />

      <section className="h-[100vh] xl:h-[90vh] w-full relative overflow-hidden">
        {/* Gradient Background */}
        <div
          className="absolute inset-0 z-0" />

        {/* Other Content */}
        <div className="absolute z-10 top-[5%] md:top-[5%] left-1/2 -translate-x-1/2">
          {/* Headline and Description */}
          <div className="mb-12">
            {/* Badge */}
            <div className="flex md:items-center text-center gap-2 bg-[#192420] px-4 py-2 rounded-full border-[2px] border-[#afe029] w-[300px] md:w-fit mx-auto mb-6">

              <PiBookOpenUserFill width={50} className="text-[#afe029]"/>
              <p className="text-[#B2B2B2] text-xs md:text-sm">
                Smarter Course Management & Student Tools in One Place.
              </p>
            </div>

            {/* Headline */}
            <h1 className="text-[#F5F5F5] mx-auto md:w-[614px] l xl:w-[1020px] text-[36px] md:text-5xl xl:text-7xl text-center font-bold pb-4 font-manrope leading-tight">
              All-in-One Platform for <span className="text-[#afe029]">Courses & Student</span> Success
            </h1>

            {/* Description */}
            <p className="text-[#F5F5F5] text-xs md:text-lg text-center w-[370px] md:w-[635px] lg:w-[900px] xl:w-[1014px]  mx-auto leading-relaxed">
              Stop juggling multiple apps. Get a seamless platform to manage courses, collaborate, and access essential student tools—built for students and educators who want to save time and boost productivity
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
