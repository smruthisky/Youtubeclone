import React from 'react'

const Sidebar = () => {
  return (
    <div className='shadow-md w-48 p-6'>
        <ul>
            <li className='pt-3'>Home</li>
            <li className='pt-3' >Shorts</li>
            <li className='pt-3'>Games</li>
            <li className='pt-3'>Subscription</li>
        </ul>
        <hr className='mt-5'></hr>
        <div>
        <h1 className='font-medium pt-6'>You</h1>
        <ul>
            <li className='pt-3' >Home</li>
            <li className='pt-3'>Shorts</li>
            <li className='pt-3'>Games</li>
            <li className='pt-3'>Subscription</li>
        </ul>
        </div>
        
    </div>
  )
}

export default Sidebar