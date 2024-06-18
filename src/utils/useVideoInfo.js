import  { useEffect ,useState} from 'react'
import {YOUTUBE_API} from "./constants"


const useVideoInfo = (id) => {
    const [videoInfo, setVideoInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchVideoInfo = async () => {
        try {
          const response = await fetch(`${YOUTUBE_API}`);
          const data = await response.json();
          const video = data.items.find((item) => item.id === id);
          if (video) {
            setVideoInfo(video);
          } else {
            setError('Video not found');
          }
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
  
      if (id) {
        fetchVideoInfo();
      }
    }, [id]);
    console.log(videoInfo)
    return { videoInfo, loading, error };
  };
  
  export default useVideoInfo;