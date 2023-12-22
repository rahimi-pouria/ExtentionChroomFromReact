import React from 'react'
import Weather from '../components/Weather';
import DatePersian from '../components/DatePersian';
import DatePickerEm from 'components/DatePickerEm';
import DatePickerFa from 'components/DatePickerFa';
import SearchGoogle from 'components/SearchGoogle';
import ToolsComponent from 'components/ToolsComponent';
import NewVideo from 'components/NewVideo';
function Home() {
  return (
     <div className="flex w-full gap-[10px]">
       
     <div className="flex flex-col w-[25%] gap-[10px]">
        {/* show date and weather */}
          {/* weather  */}
          <div className="flex w-full text-white p-5 bg-[#495667] rounded-[16px]">
            <Weather />
          </div>
          {/* date persian */}
          <div className="flex w-full text-white p-5 bg-[#495667] rounded-[16px]">
            <DatePersian />
          </div>
        {/* show date picker persian */}
        <div className="flex w-full  text-white p-5 bg-[#495667] rounded-[16px]">
          <DatePickerFa />
        </div>
        {/* show date picker english */}
        {/* <div className="flex w-full  text-white p-5 bg-[#495667] rounded-[16px]">
          <DatePickerEm />
        </div> */}
     </div>
     <div className="flex flex-col w-[50%] gap-[16px]">
        <SearchGoogle />
        <ToolsComponent />
     </div>
     <div className="flex w-[25%]">
     <NewVideo />
     </div>
  </div>
  )
}

export default Home