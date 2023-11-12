
import axios from "axios";

export default function Weather(props) {
  function showTemp(response) {
    alert(`The temperature in ${props.city} is ${response.data.main.temp}°C`);
  }
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=88724523008dc9e1be18f6eb6a959b67&units=metric`;
  axios.get(apiURL).then(showTemp);
}
