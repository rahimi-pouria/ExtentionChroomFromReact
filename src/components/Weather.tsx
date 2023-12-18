import React, { useEffect, useState } from 'react';
import axios from 'axios'
import moment from 'jalali-moment';



function Weather() {
     // useState hooks
     const [temper, setTemper] = useState(null)
     const [centigrade, setCentigrade] = useState(null)
  
     // variable
     let lat = 35.7000;
     let lang = 51.4167;
     useEffect(() => {
          // send request 
          const getWeather = async () => {
               try{
                    const response =
                    await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lang}&current_weather=true`)
                    console.log(response)
                    setTemper(response.data.current_weather.temperature)
                    setCentigrade(response.data.current_weather_units.temperature)
               }catch(error) {
                    console.error(error)
               }
          }
          getWeather()
     }, [])
  return (
     <>
     <div className='flex w-full flex-col gap-[15px]'>
     {/* name city */}
          <div className="flex items-center border-b py-3 justify-end gap-1">
               <p className='name-city f16-400'>تهران</p>
               <span className='circle mt-2 rounded-full bg-green-500
               w-[8px] h-[8px]'></span>
          </div>
          <div className="flex justify-between items-center gap-2">
               <img className='w-[60px]' src="https://s31.picofile.com/file/8470587950/weather.png" alt="" />
               <div className="flex items-center gap-2">
                    <p className='show-weather f16-400 text-green-500'>
                    { temper }{centigrade}
                    </p>
                    <span className='f14-400'>دمای امروز </span>
               </div>
          </div>
     </div>
     </>
  )
}

export default Weather