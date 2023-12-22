import React from 'react'
import { Link } from 'react-router-dom'

export interface ToolsType {
     id: number,
     name: string, 
     path: string,
     icon:string
}

function ToolsComponent() {
     const tools: ToolsType[] = [
          {
               id: 1,
               name: 'یوتیوب',
               path: 'https://www.youtube.com/',
               icon: 'https://s31.picofile.com/file/8470728242/youtub.png'
          },
          {
               id: 2,
               name: 'گوگل',
               path: 'https://www.google.com/',
               icon: 'https://s30.picofile.com/file/8470713350/seasonal_holidays_2023_6753651837110165_sdrk.png'
          }
     ]
     // functions
     const openTools = (event: React.MouseEvent, path: string) => {
          if(String(path).startsWith('chrome://')) {
          window.location.href = path;
          }
         }
         
           
  return (
     <div className='flex w-full gap-[30px] flex-wrap justify-end'>
          <a href="about:blank" target='_blank' className='w-[20%] gap-3 flex justify-center items-center bg-[#495667] rounded-[16px] p-5'>
               <div className="flex flex-col items-center justify-center gap-[10px] text-white">
                    +
                    <p className='f14-400'>پنججره جدید</p>
               </div>
          </a>
          { tools.map(item => (
          <a href={item.path} onClick={(event) => openTools(event, item.path)} className='w-[20%] gap-3 flex justify-center items-center bg-[#495667] rounded-[16px] p-5'>
          <div className="flex flex-col items-center justify-center gap-[10px] text-white">
               <img className='w-[50%]' src={item.icon} alt="" />
               <p>{item.name}</p>
          </div>
          </a>
          )) }
    </div>
  )
}

export default ToolsComponent