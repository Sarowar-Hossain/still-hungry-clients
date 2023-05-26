import LazyLoad from "react-lazy-load";

const FoodCard = ({ food }) => {
  const { name, image } = food;
  return (
    <div className="w-full md:w-[350px] h-auto md:h-[450px] rounded-lg bg-orange-500 border-2 my-4 md:mx-4 shadow-lg  transition duration-300 hover:shadow-orange-700 ease-in-out transform hover:scale-105 hover:shadow-2xl">
      
      {/*---------LazyLoad added---------*/}
      
      <LazyLoad
        threshold={0.95}
        onContentVisible={() => {
          console.log("loaded!");
        }}
      >
        <img
          className="w-full h-[400px] md:h-[350px] rounded-t-lg object-cover"
          src={image}
          alt=""
        />
      </LazyLoad>
      <div className="border-t-2 mx-3  mt-6">
        <h1 className="text-center text-white py-3 font-bold text-3xl">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default FoodCard;
