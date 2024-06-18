import React from 'react'

const Btnlist = ({name}) => {
  return (
    <div >
       <button className=' m-2 px-4 w-max py-1  bg-slate-100 rounded-md hover:bg-slate-300 '>{name}</button>
    </div>
  )
}

export default Btnlist