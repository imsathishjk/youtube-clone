import React, { useContext, useEffect, useState } from 'react';
import bannerimg from '../assets/images/banner.png';
import profile from '../assets/images/vijay (2).jpg';
import { Link, useNavigate } from 'react-router-dom';
import { converter } from '../../convert';
import moment from 'moment';
import axios from 'axios';
import AppContext from '../context/AppContext';
import { PiLineVerticalBold } from "react-icons/pi";
import { ShimmerThumbnail } from "react-shimmer-effects";
import { ShimmerCircularImage } from "react-shimmer-effects";
import { ShimmerText } from "react-shimmer-effects";

const VideoCard = ({ duration, thumbnail, title, channelName, views, published, id, channelId, categoryId }) => {

    const [channelData, setChannelData] = useState(null);

    const { API_KEY } = useContext(AppContext);

    const navigate = useNavigate();

    let videoDuration = duration || 'PT6M45S';

    const hour = videoDuration.match(/(\d+)H/) ? videoDuration.match(/(\d+)H/)[0] : '';
    const minute = videoDuration.match(/(\d+)M/) ? videoDuration.match(/(\d+)M/)[0] : '';
    const sec = videoDuration.match(/(\d+)S/) ? videoDuration.match(/(\d+)S/)[0] : ''


    const CHANNEL_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&maxResults=25&id=${channelId}&key=${API_KEY}`;

    const fetchChannelData = async () => {
        const { data } = await axios.get(CHANNEL_URL);
        setChannelData(data.items);
    };


    useEffect(() => {
        fetchChannelData()
    }, []);

    return (
        <div onClick={() => navigate(`/video/${id}/${channelId}/${categoryId}`, scrollTo(0, 0))} className='flex flex-col items-start mt-3 cursor-pointer'>
            {thumbnail ? <img src={thumbnail} alt={title} className='object-cover overflow-hidden aspect-video rounded-md h-full' /> : <ShimmerThumbnail height={'full'} />}
            <div className='flex items-start justify-start gap-1.5 p-2 basis-[30%]'>
                {channelData ? <img src={channelData[0]?.id == channelId ? channelData[0].snippet.thumbnails.high.url || channelData[0].snippet.thumbnails.medium.url || channelData[0].snippet.default.url : profile} alt={channelName} className='w-9 h-9 rounded-full' /> : <ShimmerCircularImage size={30} />}
                <div>
                    {/* <h1 className='max-lg:hidden text-sm font-bold'>{title ? title : <ShimmerTitle line={1} />}</h1> */}
                    {title ? <h1 className='text-sm font-bold'>{title.slice(0, 42)}</h1> : <ShimmerText line={1} />}
                    <p className='text-sm text-wrap font-semibold text-gray-400 flex flex-wrap items-center'>{channelName ? channelName : <ShimmerText line={1} />}
                        <span><PiLineVerticalBold /></span><span>{views ? converter(views) : <ShimmerText line={1} />} views</span>
                        <span><PiLineVerticalBold /></span> <span>{published ? moment(published).fromNow() : <ShimmerText line={1} />}</span> </p>
                </div>
            </div>
        </div>
    )
};
export default VideoCard;
