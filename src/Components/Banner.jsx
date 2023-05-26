import banner from "../assets/banner.jpg";

const Banner = () => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Caveat&display=swap";
  document.head.appendChild(link);

  return (
    <div className="mt-10">
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="w-full min-h-[400px] md:h-[700px] rounded-lg grid md:grid-cols-2 grid-flow-row bg-no-repeat bg-cover bg-center"
      >
        <div className="col-span-1 flex flex-col justify-center px-5 md:ms-16 md:px-0">
          <h1
            className="text-7xl text-orange-500 font-serif underline font-semibold md:ms-20 mb-4"
            style={{ fontFamily: "Caveat, cursive" }}
          >
            TheChefs.com
          </h1>
          <h1 className="font-bold text-4xl md:text-7xl text-white mb-5 md:mb-10">
            A Chef In Every <br /> Tasty Meal Box
          </h1>
          <p className="text-white text-base md:text-xl">
            Get pre-portioned ingredients for Gusto Meal Kits' best recipes.
          </p>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default Banner;
