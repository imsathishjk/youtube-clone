import React from 'react'
import profile from '../assets/images/vijay (2).jpg';
import { GoBell } from "react-icons/go";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { PiShareFat } from "react-icons/pi";
import { converter } from '../../convert';
const VideoLable = ({ likes, channelTitle, channelImg, subscribers }) => {
    return (
        <div className='flex flex-col md:flex-row md:items-center justify-between my-5'>
            <div className='flex items-center gap-4'>
                <img src={channelImg ? channelImg : profile} alt="" className='lg:w-12 lg:h-12 w-8 h-8 rounded-full' />
                <div className='flex flex-row gap-5 flex-1 justify-between'>
                    <div>
                        <h1 className='font-bold text-gray-400 max-sm:text-sm'>{channelTitle} <span></span></h1>
                        <p className='text-sm font-semibold max-sm:text-sm text-nowrap'>{converter(subscribers)} Subscribers</p>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <button className='p-2 px-3 rounded-full bg-white text-gray-700 text-sm font-semibold border border-gray-700'>Join</button>
                        <GoBell className='text-2xl' />
                    </div>
                </div>
            </div>
            <div className='flex gap-5 items-center max-md:mt-3'>
                <button className='flex items-center gap-2 font-semibold'><FaRegThumbsUp className='md:text-lg' /> <span>{converter(likes)}</span> <span className='text-gray-500'>|</span> <FaRegThumbsDown className='md:text-lg' /> </button>
                <div className='flex items-center gap-5'>
                    <button className='flex items-center gap-1.5 font-semibold'><PiShareFat className='text-xl' /></button>
                    <button><FaRegBookmark /></button>
                    <button className='bg-gray-700 p-1.5 rounded-full'><HiDotsHorizontal /></button>
                </div>
            </div>
        </div>
    )
}

export default VideoLable
