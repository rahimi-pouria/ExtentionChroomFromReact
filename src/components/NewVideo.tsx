import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface ThumbnailType {
  url: string;
  width: number;
  height: number;
}

interface VideoType {
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: ThumbnailType;
      medium: ThumbnailType;
      high: ThumbnailType;
      standard: ThumbnailType;
      maxres: ThumbnailType;
    };
  };
}

function NewVideo() {
  const [videoYoutube, setVideoYoutube] = useState<VideoType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&regionCode=US&key=AIzaSyBlUj9qr48ieq8mVS0gSw5d24gwbgzGb-I'
        );
        setVideoYoutube(response.data.items);
        console.log(videoYoutube);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  const unlimited = videoYoutube.slice(0, 4)
//   get link video in description
  const linkVideo = (description: string) => {
     const regex = /https:\/\/www\.youtube\.com\/watch\?v=([^\s]+)/;
     const match =  description.match(regex)
     return match ? match[0] : ''
  }
  
  return (
     <div className='w-full flex flex-col gap-[10px]'>
       <div className="flex p-5 items-center gap-[10px] justify-end text-white bg-[#495667] rounded-[16px]">
         <p>آخرین ویدیوهای یوتیوب</p>
         <span className='circle mt-2 rounded-full bg-green-500 w-[8px] h-[8px]'></span>
       </div>
       {unlimited.map((video, index) => (
         <div key={index} className="flex w-[100%] gap-[10px] text-white p-5 bg-[#495667] rounded-[16px]">
           <img className='w-[70px] h-[70px]' src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
           <div className="flex flex-col">
             <a href={linkVideo(video.snippet.description)} target='_blank' rel='noopener noreferrer'>
               <h3 className='f16-400'>{video.snippet.title}</h3>
             </a>
           </div>
         </div>
       ))}
     </div>
   );
 
}

export default NewVideo;
