import {
  WiDayThunderstorm,
  WiDayRainMix,
  WiDayRain,
  WiSnowflakeCold,
  WiDust,
  WiDaySunny,
  WiCloudy,
} from "weather-icons-react";

const iconChanger = (wMain, wCode) => {
  let icon;
  const weatherCodes = [701, 711, 721, 731, 741, 751, 761, 762, 771, 781];
  switch (wMain) {
    case "Thunderstorm":
      icon = <WiDayThunderstorm />;
      break;
    case "Drizzle":
      icon = <WiDayRainMix />;
      break;
    case "Rain":
      icon = <WiDayRain />;
      break;
    case "Snow":
      icon = <WiSnowflakeCold />;
      break;
    case "Clear":
      icon = <WiDaySunny />;
      break;
    case "Clouds":
      icon = <WiCloudy />;
      break;

    default:
      break;
  }

  weatherCodes.map((code) => {
    if (code === wCode) {
      icon = <WiDust />;
    }
    return icon;
  });

  return icon;
};

export default iconChanger;
