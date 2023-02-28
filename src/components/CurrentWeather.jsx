import { IoLocationSharp } from "react-icons/io5";
import iconChanger from "./Icons";
import ThreeHour from "./ThreeHour";

const CurrentWeather = ({ coord, main, name, sys, weather, dt }) => {
  const regionNamesInEnglish = new Intl.DisplayNames(["en"], {
    type: "region",
  });

  return (
    <div className="text-white bg-white bg-opacity-10 backdrop-blur-lg shadow-md p-2 rounded mx-4 flex flex-col md:flex-row gap-2">
      <div className="w-full md:w-1/3">
        <div className="flex flex-col">
          <div className="flex justify-center gap-4 lg:gap-6">
            <div className="text-center">
              <span className="text-2xl font-bold text-gray-700 drop-shadow-md">
                Today
              </span>
              <span className="text-md block drop-shadow-md">
                {new Date(dt * 1000).toLocaleString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  day: "2-digit",
                  month: "short",
                })}
              </span>
            </div>
            <div className="text-7xl flex justify-center items-center drop-shadow-md">
              {iconChanger(weather[0].main, weather[0].id)}
            </div>
          </div>

          <div className="text-7xl text-center drop-shadow-md">
            {Math.round(main.temp)}&deg;
          </div>
          <h3 className="col-span-2 text-xl flex justify-center items-center text-gray-700 capitalize font-semibold drop-shadow-md ">
            {weather[0].description}
          </h3>
          <h3 className="col-span-2 text-md flex justify-center items-center drop-shadow-md ">
            <IoLocationSharp size={24} />
            {`${name}, ${regionNamesInEnglish.of(sys.country)} `}
          </h3>
        </div>
      </div>
      <ThreeHour {...coord} />
    </div>
  );
};

export default CurrentWeather;
