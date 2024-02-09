import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className="section-padding mt-20 bg-indigo-50 mb-12 rounded-bl-[15rem]">
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-5">
            <h2 className="mt-12 text-3xl lg:text-6xl md:text-5xl text-gray-600 font-semibold leading-relaxed tracking-wider">
              Discover the future of electronics, delivered to your doorstep!
            </h2>
            <p className="text-md text-gray-500 tracking-wider leading-7">
              Experience unparalleled electronic innovation. Explore
              cutting-edge electronics designed to elevate modern living.
              Discover limitless possibilities and embrace excellence at our
              trusted destination.
            </p>
            <Link
              to="/products"
              className="mt-8 self-start flex items-center justify-center gap-2 bg-blue-200 px-10 py-2 text-blue-600 font-medium text-xl rounded-full hover:bg-blue-400 hover:text-blue-100 duration-500 hover:shadow-lg  "
            >
              <span >Order Now</span>{" "}
              <span className="">
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
          <div className="overflow-hidden bg-slate-50 shadow-md rounded-full ">
            <Player
              autoplay
              loop
              src="https://lottie.host/33660d71-3e62-41a6-9ba8-cd2c7ba56541/LN7DpimxTg.json"
              className="h-full w-full overflow-hidden"
              style={{ height: "70%", width: "70%" }}
            ></Player>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
