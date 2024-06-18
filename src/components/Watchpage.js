import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import useVideoInfo from '../utils/useVideoInfo';

const Watchpage = () => {
  const dispatch=useDispatch();
  const [searchparam]=useSearchParams();
  // console.log(searchparam.get("v"))
const id=searchparam.get("v");
const { videoInfo, loading, error } = useVideoInfo(id);
console.log(videoInfo)
  useEffect(()=>{
    dispatch(closeMenu());
  },)


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  
  return (
    <div className='px-5 pt-2 '>
      <iframe width="900"
       height="450" 
       className='rounded-md'
         src={"https://www.youtube.com/embed/" + searchparam.get("v") + "?autoplay=1" }
         title="YouTube video player" 
         frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          
          allowFullScreen>
            
      </iframe>
      {videoInfo && (
        <div className="video-info mt-4">
          <h1 className="text-2xl font-bold">{videoInfo.snippet.title}</h1>
          <div className='flex'>
          <p>{videoInfo.snippet.channelTitle}</p>
          <button className='bg-black rounded-2xl text-white ml-20 w-28 h-9 '>Subscribe</button>
          </div>
          
          <div className="mt-2">
            <strong>Views:</strong> {videoInfo.statistics.viewCount}
          </div>
        </div>
      )}
      </div>
  )
}

export default Watchpage