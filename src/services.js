import moment from 'moment';
import { DateTime } from "luxon";

//get local time by fetched city timezone
const formatToLocalTime=(timezone)=>{
  const timezoneInMinutes = timezone / 60;
  const LocalTime = moment().utcOffset(timezoneInMinutes).format("dddd, MMMM Do YYYY, h:mm:ss A")
  return LocalTime
}

//get day forecast date by fetched date and timezone
const formatTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

//get weather icon by fetched weather icon code
const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

//get background image by fetched weather id
function BackgroundImage(data) {
  let id = 0;
  //define weather code
  if (!Array.isArray(data) && data.list[0].weather[0].id) {
    id = data.list[0].weather[0].id;
  }
  //return image url by weather id
  function getImageUrl(weatherId) {
    if (weatherId >= 200 && weatherId < 300) {
      return 'https://dionnerbellcom.files.wordpress.com/2020/04/live-thunderstorm.gif'; // thunderstorm
    } else if (weatherId >= 300 && weatherId < 400) {
      return 'https://i.gifer.com/Rhhw.gif'; // drizzle
    } else if (weatherId >= 500 && weatherId < 600) {
      return 'https://archive.org/download/rainingday_202002/raining%20day.gif'; // rain
    } else if (weatherId >= 600 && weatherId < 700) {
      return 'https://www.teahub.io/photos/full/178-1781493_winter-gif-snow-winter-animated-gif.gif'; // snow
    } else if (weatherId >= 700 && weatherId < 800) {
      return 'https://i.gifer.com/fzmZ.gif'; // strong wind
    } else if (weatherId === 800) {
      return 'https://i.gifer.com/1Ex4.gif'; // clear day Image
    } else {
      return 'https://wallpapercave.com/wp/wp2757859.gif'; // cloudy day
    }
  }
  return getImageUrl(Number(id));
}

export default formatToLocalTime;
export {iconUrlFromCode,formatTime,BackgroundImage}