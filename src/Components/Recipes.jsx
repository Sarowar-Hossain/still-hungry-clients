import React, { useState } from "react";
import Swal from "sweetalert2";
import "@smastrom/react-rating/style.css";
import Rating from "react-rating";
import "font-awesome/css/font-awesome.min.css";

const Recipes = ({ recipe }) => {

  const { recipe_name, ingredients, cooking_method, rating } = recipe;

  const [isDisabled, setIsDisabled] = useState(false);

  const sweetAlert = () => {
    Swal.fire("Favorite!", "This recipe is your favorite!", "success");
    setIsDisabled(true);
  };

  return (
    <div className="w-[400px] h-[650px] px-3 py-4 text-start grid grid-cols-1 mb-8 border-4 bg-black rounded-lg shadow-lg  transition duration-300 hover:shadow-orange-700 ease-in-out transform hover:scale-105 hover:shadow-2xl ">
      {/* display recipe name */}
      <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-300">
        Name: {recipe_name}
      </h5>

      {/* display list of ingredients */}
      <p className="underline text-xl mb-2 text-gray-300">Ingredients:</p>
      <ul className="mb-3 font-normal text-gray-300">
        {ingredients.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>

      {/* display cooking method */}
      <p className="underline text-xl mb-2 text-gray-300">Cooking Method: </p>
      <p className="font-normal text-gray-300 mb-10">{cooking_method}</p>

      {/* display "Favorite" button and rating system */}
      <div className="flex justify-around items-center">
        <button
          onClick={sweetAlert}
          disabled={isDisabled}
          className={`bg-orange-600 text-white font-bold py-2 px-4 rounded ${
            isDisabled ? "disabled bg-red-700 " : "bg-orange-600 hover:bg-orange-700"
          }`}
        >
          {isDisabled ? "Favorited" : "Favorite"}
        </button>
        <Rating
          className="text-orange-500 text-2xl"
          emptySymbol="fa fa-star-o fa orange-text"
          fullSymbol="fa fa-star fa orange-text" 
          fractions={2}
          initialRating={rating}
          readonly 
        />
      </div>
    </div>
  );
};

export default Recipes;
