import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants';
import Videocard from './Videocard';

const VideoContainer = () => {
const [videos , setVideos]=useState([]) 
  useEffect(()=>{
    getVideos();
  },[]);
  const getVideos= async()=>{
    const data=await fetch(YOUTUBE_API);
     const json=await data.json();
    setVideos(json.items);
  }
  return (
    <div className='flex flex-wrap  '>
      {videos.map((videos)=><Videocard key={videos.id} info={videos}/>)}
      
    </div>
  )
}

export default VideoContainer