import { useLoaderData } from "react-router-dom";
import Recipes from "./Recipes";
import LazyLoad from "react-lazy-load";
import banner from '../assets/bannerBG.jpg'

const ChefRecipes = () => {
  const cards = useLoaderData();
  const {
    chef_picture,
    chef_name,
    id,
    chef_bio,
    number_of_recipes,
    years_of_experience,
  } = cards;
  const recipes = cards.recipes;

  return (
    <div >
      {/* -------Chef Banner---- */}
      <div className="border-2  rounded-lg flex justify-center items-center h-[600px] my-10 bg-no-repeat 
      bg-cover bg-center"
      
      style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="w-[50%] px-10">
          <h1 className="font-bold text-6xl text-orange-500">{chef_name}</h1>
          <p className="text-xl my-3 text-white">{chef_bio}</p>
          <p className="font-semibold text-2xl text-white">
            Number of Recipes: {number_of_recipes}
          </p>
          <p className="font-semibold text-2xl my-4 text-white">Like: 965</p>
          <p className="font-semibold text-2xl text-white">
            Experience: {years_of_experience} years
          </p>
        </div>
        <div>
          <LazyLoad
            height={550}
            width={400}
            threshold={0.95}
            onContentVisible={() => {
              console.log("loaded!");
            }}
          >
            <img className="rounded-3xl w-[500px] h-[550px] object-cover" src={chef_picture} alt="" />
          </LazyLoad>
        </div>
      </div>
          {/* Recipes Loads */}
      <h1 className="font-bold text-orange-600 text-6xl underline text-gray-black mb-10 text-center">
        Chef Recipes
      </h1>
      <div className="flex gap-5 my-5 ">
        {recipes.map((recipe) => (
          <Recipes key={recipe.id} recipe={recipe}></Recipes>
        ))}
      </div>
    </div>
  );
};

export default ChefRecipes;
