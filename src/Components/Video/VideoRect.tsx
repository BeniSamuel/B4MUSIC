import React from 'react';
import videos from '../../Data/HotlistVid/HotlistVid';
import { useParams } from 'react-router-dom';
import '../../index.css'

// type VideoRectProps = {
//   video: any;
// };

const VideoRect: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <div className=' text-white font-poppins text-sm '>No video found</div>;
  }
 
  const vid = videos.find((item) => item.list[0].id === parseInt(id, 10));
  

  if (!vid) {
    return <div className=' h-[27rem]'>
      <div className='  text-white font-poppins text-sm bg-slate-950 h-[24rem] flex flex-col items-center justify-center rounded-lg'>No video Found!!</div>
    </div>;
  }

  return (
    <div className=' py-2 w-full flex flex-col items-start'>
      <video className=' h-[28rem]   rounded-xl w-full bg-black' controls>
        <source src={vid.list[0].video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoRect;
