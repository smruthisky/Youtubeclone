import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col p-3 pl-9  shadow-lg'>
        <div className='flex col-span-1'>
        <img  alt="menuimg" src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' className='h-6 mt-2  '></img>
        <img alt='ytlogo' src='https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png' className='h-5 mt-2 ml-5  '></img>
        
        </div>
        
        <div className='flex col-span-4 pl-12'>
        <input type='text' placeholder='Search' className=' pl-4 w-[400px] border rounded-3xl rounded-r-none h-10 ' />
        
        <button className='border rounded-3xl rounded-l-none w-16 bg-slate-50' > <img alt='searchicon' src='https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png' className='h-5 mt-1 ml-3 '></img></button>
        
        </div>
        <div className='flex col-span-2'>
       
        <button><img src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png' alt='userimg' className='h-8 ml-7'></img></button>

        </div>
        
    </div>
  )
}

export default Head;