import React from 'react'

const Videocard = ({info}) => {
    const {snippet ,statistics}=info;
    const {thumbnails ,title,channelTitle}=snippet;
  return (
    <div className='p-2 m-2 w-80 rounded-lg  shadow-md '>
        <img alt='thumbnail' src={thumbnails.medium.url} className='rounded-lg'></img>
        <p className='font-bold  line-clamp-2 ' >{title}</p>
        <p className='text-sm'>{channelTitle}</p>
        <p className='text-sm'>{statistics.viewCount} views</p>
    </div>
  )
}

export default Videocard