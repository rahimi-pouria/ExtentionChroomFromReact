import React from 'react'

function weather() {
  return (
    <div className='flex w-full flex-col'>
     {/* name city */}
     <div className="flex items-center border-b border-teal-500 py-2">
          <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="تهران" />
          <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
               results
          </button>
     </div>
    </div>
  )
}

export default weather