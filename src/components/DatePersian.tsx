import React, { useState, useEffect } from 'react'
import moment from 'jalali-moment';
function DatePersian() {
     // create use state hook
     const [ todayDate, setTodayDate ] = useState('')
     const [ todayEnglish, setTodayEnglish ] = useState('')
     // create useEffect hook
     useEffect(() => {
          // gettoday persian
          const getToday = () => {
               // persian date and day
               const Today = moment().locale('fa')
               const nameDay = Today.format('dddd')
               const dayDate = Today.format('YYYY/M/D')
               setTodayDate(`${nameDay} - ${dayDate}`);
               // english date and day
               const Todaymilady = moment().locale('en')
               const Name_Day = Todaymilady.format('dddd')
               const day_Date = Todaymilady.format('YYYY/M/D')
               setTodayEnglish(`${Name_Day} - ${day_Date}`)
          }



          getToday()
     }, [])


  return (
     <>
          <div className='flex w-[100%] flex-col gap-[10px] justify-end items-end'>
               <div className="flex flex-col gap-[10px] justify-end items-end">
                    <p className='f15-400'>تاریخ شمسی امروز </p>
                    <p className='f15-400 text-green-500'>{ todayDate }</p>
               </div>
               <div className="flex flex-col gap-[10px] justify-end items-end">
                    <p className='f15-400'>تاریخ میلادی امروز </p>
                    <p className='f15-400 text-green-500'>{ todayEnglish }</p>
               </div>
          </div>
     </>
  )
}

export default DatePersian