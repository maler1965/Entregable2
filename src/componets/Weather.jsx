import { useState } from "react"
//import { temp } from '../utils/temp.js';
//import { temp } from '../utils/KelvinToCelsius';
//import { temp2 } from '../utils/KelvinToFahrenheit';
//import temp from '../utils/temp'



const Weather = ({ weatherInfo }) => {

    console.log(weatherInfo)
    const [isCelsius, setisCelsius] = useState(true)

    const handleChangeTemp = () => {
        setisCelsius(!isCelsius)
    }

    //style={{ backgroundImage: `url(${fondoImagen})` }}
    //{weatherImages[weatherInfo?.weather[0].icon]}
    //{`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`
    //{isCelsius ? KelvinToCelsius(weatherInfo?.main.temp) : KelvinToFahrenheit(weatherInfo?.main.temp)}
    return (
        <section className='text-center grid gap-6' >
            <h2 className='font-bold  text-2xl'>{weatherInfo?.name}, {weatherInfo?.sys.country}</h2>

            <section className='grid gap-4 sm:grid-cols-[1fr_auto]' style={{ color: 'green' }}>

                {/*seccion arriba */}
                <article className='bg-white/70 p-2 rounded-3xl grid grid-cols-2 items-center '>

                    <h3 className='col-span-2 capitalize'>{weatherInfo?.weather[0].description}</h3>

                    <span className='text-4xl'>{isCelsius ? `${((weatherInfo?.main.temp) - 273.15).toFixed(1)} °C` : `${(((weatherInfo?.main.temp) - 273.15) * (9 / 5) + 32).toFixed(1)} °F`}</span>

                    <div>
                        <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt="" />
                    </div>

                </article>

                {/*seccion abajo */}
                <section className='bg-white/70 p-2 rounded-3xl grid grid-cols-3 justify-items-center sm:grid-cols-1 sm:items-center'>

                    <article className='flex gap-2 sm:items-center'>
                        <div>
                            <img src="./images/wind.png" alt="" />
                        </div>
                        <span>{weatherInfo?.wind.speed}  m/s</span>
                    </article>


                    <article className='flex  sm:items-center'>
                        <div className="pr-5" >
                            <img src="./images/humidity.png" alt="" />
                        </div>
                        <span>{weatherInfo?.main.humidity}  %</span>
                    </article>


                    <article className='flex gap-2 sm:items-center'>
                        <div>
                            <img src="./images/pressure.png" alt="" />
                        </div>
                        <span>{weatherInfo?.main.pressure}  hPa</span>
                    </article>

                </section>

            </section>

            <div style={{ display: 'inline-block' }} >
                <button onClick={handleChangeTemp} className="bg-white/70 p-2  rounded-3xl" style={{ color: 'green' }}   >Change F/C</button>

            </div>

        </section>


    )
}

export default Weather