import Image from "next/image";
export const CurrentWeatherCard = () => (
  <div className="ml-auto mr-auto">
    <div className="flex items-center">
      <div className="mr-20">
        <h2>Weather today in City Name, Country</h2>
        <p>Local time: </p>
      </div>
      <p>9</p>
    </div>

    <ul>
      <li>Humidity : 50%</li>
      <li>Pressure: 1005</li>
      <li>UV Index: 5</li>
      <li>Wind: 5.5 km/h</li>
    </ul>
    {/*<Image src="/test" alt="test" />*/}
  </div>
);
