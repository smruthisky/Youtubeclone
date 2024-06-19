import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants';
import Videocard ,{AdVideocard} from './Videocard';
import { Link } from 'react-router-dom';
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
       {videos[0] && <AdVideocard info={videos[0]}/>}  
      {videos.map((videos)=>(
          <Link key={videos.id} to={"/watch?v="+ videos.id}  > 
          <Videocard  info={videos} />
          </Link>
      )
      )  
    }
      
    </div>
  )
}

export default VideoContainer