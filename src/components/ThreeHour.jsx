import { useEffect, useState } from "react";
import TimeW from "./TimeW";

const FiveDayWea = ({ lat, lon }) => {
  const [forecast, setForecast] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // const getForecast = async () => {
  //   try {
  //     const res = await fetch(
  //       `https://api.openweathermap.org/data/2.5/forecast?lat=${lat.toFixed(
  //         1
  //       )}&lon=${lon.toFixed(2)}&appid=${
  //         process.env.REACT_APP_API_KEY
  //       }&units=metric`
  //     );
  //     const weather = await res.json();
  //     if (weather.cod === "200") {
  //       setForecast(weather.list);
  //     } else {
  //       setIsError(true);
  //       setForecast(weather);
  //     }
  //   } catch (error) {
  //     setIsError(true);
  //     setForecast({ message: error.message });
  //   }
  // };

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat.toFixed(
        1
      )}&lon=${lon.toFixed(2)}&appid=${
        process.env.REACT_APP_API_KEY
      }&units=metric`
    ).then((response) =>
      response.json().then((weather) => {
        if (weather.cod === "200") {
          setForecast(weather.list);
        } else {
          setIsError(true);
          setForecast(weather);
        }
      })
    );
    setIsLoading(false);
  }, [lat, lon]);

  return (
    <div className="w-full md:w-2/3 flex flex-wrap justify-center items-center lg:gap-4 gap-2">
      {forecast &&
        !isError &&
        !isLoading &&
        forecast?.slice(0, 7).map((item) => {
          return <TimeW data={item} key={item.dt} />;
        })}
      {isLoading && (
        <>
          <h2 className="h-full w-full flex justify-center items-center">
            loading...
          </h2>
        </>
      )}
      {isError && (
        <>
          <h2 className="h-full w-full flex justify-center items-center">
            {forecast.message}
          </h2>
        </>
      )}
    </div>
  );
};

export default FiveDayWea;
