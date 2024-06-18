import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen =useSelector(store=>store.app.isMenuOpen);
  // console.log(!isMenuOpen);
  if(!isMenuOpen) return null;
  return (
    <div className='shadow-md  min-w-48 p-6'>
        <ul>
            <li className='pt-3'><Link to={"/"}>Home</Link></li>
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