import React from "react";
import DetailsItem from "./DetailsItem";
import {
  WiSunrise,
  WiSunset,
  WiHumidity,
  WiThermometer,
  WiThermometerExterior,
  WiThermometerInternal,
  WiStrongWind,
  WiDirectionDown,
} from "weather-icons-react";

const Details = ({ main, sys, wind }) => {
  const { sunrise, sunset } = sys;
  const { feels_like, humidity, pressure, temp_max, temp_min } = main;

  const dateLocal = (date) => {
    return new Date(date * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 pb-4">
      <DetailsItem
        title={"Sunrise"}
        info={`${dateLocal(sunrise)}`}
        icon={<WiSunrise />}
      />
      <DetailsItem
        title={"Sunset"}
        info={`${dateLocal(sunset)}`}
        icon={<WiSunset />}
      />
      <DetailsItem
        title={"Max Temp"}
        info={Math.round(temp_max) + "\u00b0"}
        icon={<WiThermometer />}
      />
      <DetailsItem
        title={"Min Temp"}
        info={Math.round(temp_min) + "\u00b0"}
        icon={<WiThermometerExterior />}
      />
      <DetailsItem
        title={"Feels Like"}
        info={Math.round(feels_like) + "\u00b0"}
        icon={<WiThermometerInternal />}
      />
      <DetailsItem
        title={"Humidity"}
        info={`${humidity}%`}
        icon={<WiHumidity />}
      />
      <DetailsItem
        title={"Wind Speed"}
        info={`${wind.speed}km/h`}
        icon={<WiStrongWind />}
      />
      <DetailsItem
        title={"Pressure"}
        info={`${pressure} hPa`}
        icon={<WiDirectionDown />}
      />
    </div>
  );
};

export default Details;
