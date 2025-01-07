import React from 'react'
import More from '../More/More';

type dashReel = {
    id: number;
    image: string;
    title: string;
    subtitle: string;
}

const DashReel: React.FC<dashReel> = (props) => {
  return (
    <div className=' flex flex-col gap-2'>
        <div className='image'>
            <img src={props.image} className=' w-[9rem] h-[13rem]'/>
        </div>
        <div className=' flex flex-row justify-between items-center'>
            <div className=' flex flex-col gap-1'>
              <p className=' font-poppins text-sm text-white'>{props.title}</p>
              <p className=' font-poppins text-sm text-[#343232]'>{props.subtitle}</p>
            </div>
            <More/>
        </div>
    </div>
  )
}

export default DashReel