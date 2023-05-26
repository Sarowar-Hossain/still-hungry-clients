import Banner from "../../Components/Banner";
import Card from "../../Components/Card";
import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import FoodCard from "../../Components/foodCard";
import { FaIcons, FaStar, FaUser, FaUserCircle } from "react-icons/fa";
import { ContextProvider } from "../../context/AuthContext";
import Locations from "../../Components/Locations";

const Home = () => {
  const [foods, setFoods] = useState([]);
  const cards = useLoaderData();
  const { loader } = useContext(ContextProvider);

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Caveat&display=swap";
  document.head.appendChild(link);

  useEffect(() => {
    fetch("https://still-hungry-server-sarowar-hossain.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <div className="">
      {/* Home Page Banner */}
      <Banner></Banner>

      {/* Our Best Chefs Section */}

      <div className="my-16">
        <h1
          className="text-7xl text-orange-500 font-serif text-center underline font-semibold md:ms-20 mb-8"
          style={{ fontFamily: "Caveat, cursive" }}
        >
          Our Best Chefs
        </h1>
        <div className="flex flex-wrap gap-3 mx-auto justify-center md:justify-start">
          {cards.map((card) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
      </div>

      {/* Our Popular Chefs Recipes Section */}

      <div>
        <h1 className="text-7xl text-orange-500 font-serif text-center underline font-semibold md:ms-20 mb-8"
          style={{ fontFamily: "Caveat, cursive" }}>
          Our Popular Chefs Recipes
        </h1>
        <div className="flex justify-between flex-wrap">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food}></FoodCard>
          ))}
        </div>
      </div>

      {/* Clients Reviews Section */}

      <h1 className="text-7xl text-orange-500 font-serif text-center underline font-semibold md:ms-20 mt-8"
          style={{ fontFamily: "Caveat, cursive" }}>
        Clients Reviews
      </h1>
      <div className="w-full mx-auto p-3 md:w-[95%] text-white bg-black h-[420px] my-10 relative rounded-e-3xl">
        <h1 className="pt-14 font-semibold text-4xl md:text-5xl underline mb-6  md:ms-8">
          What Our Clients Say?
        </h1>
        <p className="md:ms-8 md:w-[500px]">
          We provide you with complete meal prep-which includes the prepackaged
          necessary for a divine dinner as well as an easy-to-follow recipe guid
          in beautiful
        </p>
        <div className="w-full md:w-[550px] mt-5 flex gap-4 md:ms-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-600">
              11K+
            </h1>
            <p className="text-lg md:text-xl mt-3">Happy Customers</p>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-600">
              100+
            </h1>
            <p className="text-lg md:text-xl mt-3">Professional Chef</p>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-600">
              500+
            </h1>
            <p className="text-lg md:text-xl mt-3">Recipe</p>
          </div>
        </div>

        <div className="bg-white hidden md:block w-[80%] sm:w-[90%] md:w-[40%] h-auto md:h-[200px] absolute right-0 md:right-[-150px] bottom-[100px] rounded-3xl">
          <FaUserCircle className="text-6xl text-black ms-20 mt-10"></FaUserCircle>
          <h1 className="text-lg md:text-xl text-black font-semibold ms-16">
            Jhon Snow
          </h1>
          <div className="flex ms-14">
            <FaStar className="text-2xl text-orange-600"></FaStar>
            <FaStar className="text-2xl text-orange-600"></FaStar>
            <FaStar className="text-2xl text-orange-600"></FaStar>
            <FaStar className="text-2xl text-orange-600"></FaStar>
            <FaStar className="text-2xl text-orange-600"></FaStar>
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-[50px] ">
        <Locations></Locations>
      </div>
    </div>
  );
};

export default Home;
