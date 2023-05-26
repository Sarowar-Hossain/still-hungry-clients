import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const {
    chef_picture,
    chef_name,
    id,
    number_of_recipes,
    years_of_experience,
  } = card;
  return (
    <div className="h-[600px] w-[300px] md:w-[400px] mx-auto shadow-lg  transition duration-300 hover:shadow-orange-700 ease-in-out transform hover:scale-105 hover:shadow-2xl">
      <div className="text-center border border-gray-200 rounded-lg shadow bg-black">
        <LazyLoad
          threshold={0.95}
          onContentVisible={() => {
            console.log("loaded!");
          }}
        >
          <img
            className="rounded-t-lg h-[400px] w-full object-cover"
            src={chef_picture}
            alt=""
          />
        </LazyLoad>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {chef_name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Experience: {years_of_experience} Years
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Number Of Recipes: {number_of_recipes}
          </p>
          <div className="flex justify-around items-center">
            <Link
              to={`chef/${id}`}
              className="inline-flex items-center px-2 py-2 font-medium text-center text-white rounded-lg hover:bg-orange-800 bg-orange-600"
            >
              View Recipes
            </Link>
            <div className="flex justify-center items-center gap-3  rounded-lg">
              <FaThumbsUp className="text-orange-600 text-3xl"></FaThumbsUp>
              <p className="text-white">965</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
