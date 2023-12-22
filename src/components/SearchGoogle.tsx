import React, { useEffect, useState } from "react";


function SearchGoogle(){
     // create state
     const [searchInput, setSearchInput ] = useState('')
     useEffect(() => {
     
     }, [])

     // search google
     const searchGoogle = () => {
          const googleSearch = encodeURIComponent(searchInput)
          window.open(`https://www.google.com/search?q=${googleSearch}`, '_blank')
     }



     return(
          <>
               <div className="flex flex-col h-[160px] gap-2 w-full py-[10px] items-center justify-center  text-white p-5 bg-[#495667] rounded-[16px]">
                    <img className="w-[100px]" src="https://s30.picofile.com/file/8470713350/seasonal_holidays_2023_6753651837110165_sdrk.png" alt="" />
                    <div className="flex w-full gap-3">
                         <button onClick={searchGoogle} className="btn-primary border py-3 px-4 h-[33px] bg-[#3c9bf3] border-[#3c9bf3] flex items-center justify-center rounded-[16px]">....جستجو</button>
                         <input placeholder="....جستجو در گوگل"
                          type="search" 
                          value={searchInput}
                          onChange={e => setSearchInput(e.target.value)}
                          className="w-[100%] text-right text-white rounded-[16px] bg-gray-500 h-[33px]" />
                    </div>
                    
               </div>
          </>
     )
}


export default SearchGoogle