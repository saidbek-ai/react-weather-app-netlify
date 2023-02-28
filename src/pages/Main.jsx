import { useEffect, useState } from "react";
import { WiDaySunny } from "weather-icons-react";
import CurrentWeather from "../components/CurrentWeather";
import Details from "../components/Details";
import Footer from "../components/Footer";
import Search from "../components/Search";

const Main = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const getWeatherByLocation = (lat, lon) => {
    try {
      setIsLoading(true);
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat.toFixed(
          2
        )}&lon=${lon.toFixed(2)}&appid=${
          process.env.REACT_APP_API_KEY
        }&units=metric`
      ).then((response) =>
        response.json().then((data) => {
          if (data.cod !== 200) {
            setIsError(true);
          } else {
            setIsError(false);
          }
          setIsLoading(false);
          setData(data);
        })
      );
    } catch (error) {
      setIsLoading(false);
      // setData({ message: error.message });
      setIsError(true);
    }
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setIsError(true);
      setData({
        message: "Your browser doesn't support GPS please enter your city name",
      });
    }

    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      if (!lat) {
        setIsError(true);
        setData({
          message: "GPS is disabled! Please enable your gps",
        });
      }
      getWeatherByLocation(lat, lon);
    });
  }, []);

  const getData = (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      ).then((response) =>
        response.json().then((data) => {
          if (data.cod !== 200) {
            setIsError(true);
          } else {
            setIsError(false);
          }
          setIsLoading(false);
          setData(data);
        })
      );
    } catch (error) {
      setIsError(true);
      setData({ message: error.message });
      setIsLoading(false);
    }
  };

  console.log(isError);

  // Change Background

  let background;
  const weather = isError ? "Rain" : data?.weather[0].main;
  const temp = isError ? "" : data?.main.temp;
  if (weather === "Clouds") {
    background = " from-slate-600 via-slate-400 to-slate-400";
  } else if (weather === "Clear" && temp > 8) {
    background = " from-yellow-400 to-yellow-300";
  } else if (weather === "Thunderstorm") {
    background = " from-gray-600 via-gray-500 to-blue-400";
  } else if (weather === "Drizzle") {
    background = " from-teal-700 via-teal-500 to-gray-500";
  } else if (weather === "Rain") {
    background = " from-cyan-800 via-cyan-500 to-cyan-600";
  } else if (weather === "Snow") {
    background = " from-sky-500 via-sky-400 to-sky-300";
  } else {
    background = " from-slate-600 via-slate-400 to-slate-500";
  }

  return (
    <div
      className={
        "min-h-screen flex justify-center items-center bg-gradient-to-tl " +
        background
      }
    >
      <div className="bg-white bg-opacity-10 backdrop-blur-lg drop-shadow-md w-[90%] md:w-[80%] min-h-[90vh] mb-4 rounded max-w-[1440px]">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Search
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleSubmit={getData}
          />
          {/* <div className=" mr-4 text-white drop-shadow-lg cursor-pointer ">
            <span className="bg-gray-600 py-4 px-6 rounded inline-block">
              <span className="sm:hidden">Measurement in </span>&deg;
              {"F"}
            </span>
          </div> */}
        </div>
        <div className="flex flex-col gap-8">
          {data && !isError && !isLoading && (
            <>
              <CurrentWeather {...data} />
              <Details {...data} />
            </>
          )}
          {isError && !isLoading && (
            <>
              <h3 className="text-white text-2xl text-center font-bold capitalize flex justify-center items-center h-[65vh] px-4">
                {data.message}!
              </h3>
            </>
          )}
          {isLoading && (
            <>
              <h3 className="text-white text-2xl text-center font-bold capitalize flex justify-center items-center h-[65vh] px-4">
                <p className="animate-spin">
                  <WiDaySunny size={72} />
                </p>
                <p className=""> Loading...</p>
              </h3>
            </>
          )}

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;
