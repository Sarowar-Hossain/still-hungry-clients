import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";
import Lottie from "react-lottie";
import fun from "../assets/fun.json";

const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: fun,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Welcome to TheChefs.com
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            We are a team of passionate chefs dedicated to creating delicious
            and visually stunning culinary experiences for our clients.
          </p>
        </div>
        <div className="mt-16 md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Our Team of Experienced Chefs
            </h2>
            <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <HiOutlineLocationMarker />
                <span className="ml-1">
                  Worldwide experience in renowned restaurants
                </span>
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <IoMdTime />
                <span className="ml-1">
                  Knowledge and expertise in each dish
                </span>
              </div>
            </div>
            <p className="mt-3 text-lg text-gray-600">
              We bring our knowledge and expertise to every dish we create,
              ensuring that each bite is packed with flavor and an explosion of
              taste.
            </p>
          </div>
          <div className="mt-6 flex justify-center md:mt-0 md:ml-4">

            <Lottie options={defaultOptions} height={350} width={600} />
          </div>
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Using the Freshest and Highest Quality Ingredients
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            We take pride in using only the freshest and highest quality
            ingredients in all of our dishes. Our menus are carefully crafted to
            showcase the best of local and seasonal produce, with each
            ingredient chosen for its flavor and visual appeal.
          </p>
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Tailored to Your Preferences and Dietary Requirements
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Whether you're looking for an intimate dinner party, a large wedding
            reception, or anything in between, we have the expertise to make
            your event unforgettable. We will work closely with you to
            understand your preferences and dietary requirements, ensuring that
            every dish is tailored to your tastes.
          </p>
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Food is an Experience
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            At our Chef's Website, we believe that food is more than just
            sustenance - it's an experience. We strive to create memorable
            culinary experiences for our clients, whether through unique flavor
            combinations or beautifully presented dishes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
