import { useState } from "react"
import axios from 'axios'

const Weather = ({ weatherInfo }) => {

    var weatherInfo2 = ' '

    const [control, setControl] = useState(true)

    const [isCelsius, setIsCelsius] = useState(true)
    const [city, setCity] = useState(null)

    if (control) {
        weatherInfo2 = weatherInfo
    } else {
        weatherInfo2 = city

    }

    const handleChangeTemp = () => {
        setIsCelsius(!isCelsius)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;

        if (name === "") return setCity(null)
        const API_KEY = "ad6474321134f3593207f792067c1a1e"

        setControl(!control)

        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q= ${name}&appid=${API_KEY}`)
            .then((res) => setCity(res.data))
            .catch((err) => console.log(err));
    };

    return (

        <main >
            <section className='text-center grid gap-6'  >

                <h2 className='font-bold  text-2xl'>{weatherInfo2?.name}, {weatherInfo2?.sys.country}</h2>


                <section className='grid gap-4 sm:grid-cols-[1fr_auto]' style={{ color: 'green' }}>

                    <article className='bg-white/70 p-2 rounded-3xl grid grid-cols-2 items-center '>

                        <h3 className='col-span-2 capitalize'>{weatherInfo2?.weather[0].description}</h3>

                        <span className='text-4xl'>{isCelsius ? `${((weatherInfo2?.main.temp) - 273.15).toFixed(1)} °C` : `${(((weatherInfo2?.main.temp) - 273.15) * (9 / 5) + 32).toFixed(1)} °F`}</span>

                        <div>
                            <img src={`https://openweathermap.org/img/wn/${weatherInfo2?.weather[0].icon}@4x.png`} alt="" />
                        </div>

                    </article>




                    <section className='bg-white/70 p-2 rounded-3xl grid grid-cols-3 justify-items-center sm:grid-cols-1 sm:items-center'>

                        <article className='flex gap-2 sm:items-center'>
                            <div>
                                <img src="./images/wind.png" alt="" />
                            </div>
                            <span>{weatherInfo2?.wind.speed}  m/s</span>
                        </article>


                        <article className='flex  sm:items-center'>
                            <div className="pr-5" >
                                <img src="./images/humidity.png" alt="" />
                            </div>
                            <span>{weatherInfo2?.main.humidity}  %</span>
                        </article>


                        <article className='flex gap-2 sm:items-center'>
                            <div>
                                <img src="./images/pressure.png" alt="" />
                            </div>
                            <span>{weatherInfo2?.main.pressure}  hPa</span>
                        </article>

                    </section>

                </section>



                <div className='hidden md:block' >

                    <div className=" flex gap-2"  >

                        <form onSubmit={handleSubmit} className="max-w-max mx-auto">
                            <div className="flex rounded-md overflow-hidden ">
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Write your city..."
                                    className="text-black outline-none p-2"
                                />
                                <button className="bg-red-500 p-2"> Search by City</button>
                            </div>
                        </form>

                        <button onClick={handleChangeTemp} className="bg-white/70 p-2  rounded-3xl" style={{ color: 'green' }} >Change F/C</button>
                    </div>

                </div>



                <div className='block md:hidden' >
                    <div   >

                        <form onSubmit={handleSubmit} className="max-w-max mx-auto">
                            <div className="p-2 rounded-md overflow-hidden ">

                                <button className="bg-red-500 rounded-md  mt-4 p-2"> Search by City</button>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Write your city..."
                                    className="text-black outline-none mt-4 rounded-md p-2"
                                />

                            </div>
                        </form>

                        <button onClick={handleChangeTemp} className="bg-white/70 p-2  rounded-3xl" style={{ color: 'green' }} >Change F/C</button>
                    </div>
                </div>


            </section>
        </main>

    )
}

export default Weather