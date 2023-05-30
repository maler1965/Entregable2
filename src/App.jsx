
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Weather from './componets/Weather'
import image1 from "/images/weather/bg1.jpg";
import image2 from "/images/weather/bg2.jpg";
import image3 from "/images/weather/bg3.jpg";
import image4 from "/images/weather/bg4.jpg";
import image5 from "/images/weather/bg5.jpg";
import image6 from "/images/weather/bg6.jpg";

import image7 from "/images/weather/bg7.webp";
import image8 from "/images/weather/bg8.jpg";
import image9 from "/images/weather/bg9.jpg";
import image10 from "/images/weather/bg10.webp";
import image11 from "/images/weather/bg11.jpg";
import image12 from "/images/weather/bg12.jpg";
import Loader from './componets/Loader';


function App() {

  const images1 = [image2, image3, image1, image4, image5, image6];
  const images2 = [image7, image8, image9, image10, image11, image12];

  const [weatherInfo, setweatherInfo] = useState(null)
  const [randomImage, setRandomImage] = useState(null)



  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY = "ad6474321134f3593207f792067c1a1e"
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    axios.get(URL)
      .then(({ data }) => setweatherInfo(data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])


  useEffect(() => {
    if (weatherInfo?.dt >= weatherInfo?.sys.sunrise && weatherInfo?.dt <= weatherInfo?.sys.sunset) {
      const randomImageIndex = Math.floor(Math.random() * images1.length);
      const randomImg = images1[randomImageIndex];
      setRandomImage(randomImg);
      console.log(true)

    }
    else {
      const randomImageIndex = Math.floor(Math.random() * images2.length);
      const randomImg = images2[randomImageIndex];
      setRandomImage(randomImg);
      console.log(false)
    }
    console.log(null)
  }, [])


  /*<Weather weatherInfo={weatherInfo} />
   
   */

  return (
    <main className="bg-black min-h-screen text-white flex justify-center items-center font-principal-font p-2  background-size: cover  background-position: center" style={{
      backgroundImage: `url(${randomImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }} >

      {weatherInfo ? <Weather weatherInfo={weatherInfo} /> : <Loader />}



    </main>
  )
}

export default App
