import React from "react";
import iconChanger from "./Icons";

const TimeW = ({ data }) => {
  const { dt, weather, main } = data;
  const wMAin = weather[0].main;
  const wId = weather[0].id;

  return (
    <div className="p-1 drop-shadow-md">
      <h3 className="text-md mb-2 text-center">
        {new Date(dt * 1000).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </h3>
      <div className="flex flex-col justify-center items-center bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-md rounded-2xl xl:rounded-3xl xl:py-4 xl:px-3 py-3 px-2">
        <span className="text-xl">{iconChanger(wMAin, wId)}</span>
        <span className="text-sm lg:text-md font-light">
          {Math.round(main.temp)}&deg;
        </span>
      </div>
    </div>
  );
};

export default TimeW;
