import React, { useContext, useEffect, useState } from 'react'
import VideoCard from '../components/VideoCard';
import VideoLable from '../components/VideoLable';
import Comments from '../components/Comments';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AppContext from '../context/AppContext';
import { converter } from '../../convert';
import Sidebar from '../components/Sidebar';

const VideoDetails = () => {
    const { videoId, channelId, categoryId } = useParams();

    const { API_KEY, handleMonth } = useContext(AppContext);

    

    const [videoDesc, setVideoDesc] = useState();
    const [channelData, setChannelData] = useState([]);
    const [comments, setComments] = useState([]);
    const [relatedVideos, setRelatedVideos] = useState([]);


    // Video Details Data;
    const VIDEO_URL = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`

    const videoDetails = async () => {
        const { data } = await axios.get(VIDEO_URL);
        console.log(data.items[0])
        setVideoDesc(data.items[0]);

    };

    // Channel Data;
    const CHANNEL_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`;

    const fetchChannelData = async () => {
        const { data } = await axios.get(CHANNEL_URL);
        setChannelData(data.items[0]);
    };


    // Comments Data;

    const COMMENTS_URL = ` https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`



    const handleComments = async () => {
        const { data } = await axios.get(COMMENTS_URL);
        setComments(data.items);
    };


    // Related Category Videos

    const RELATED_VIDEO_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=20&videoCategoryId=${categoryId}&key=${API_KEY}`


    const handleRelatedVideos = async () => {
        const { data } = await axios.get(RELATED_VIDEO_URL);
        let tempData = data.items.filter((item) => item.id !== videoId);
        setRelatedVideos(tempData);
    }




    useEffect(() => {
        videoDetails();
        fetchChannelData();
        handleComments();
        handleRelatedVideos()
    }, [videoId]);


    return (
        <div className='pt-20 px-4 relative z-50'>

            <div className='flex flex-col lg:flex-row lg:justify-between gap-5 lg:items-start'>
                <div className='lg:basis-[55%] xl:basis-[65%]'>
                    {/* Video Details sticky top-12 */}
                    <div className='h-full lg:h-[45vh] xl:h-[57vh] 2xl:h-[65vh] z-20 rounded-md '>
                        <iframe className='object-fill h-full w-full overflow-hidden block aspect-video'
                            src={`https://www.youtube.com/embed/${videoDesc?.id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                    </div >
                    <h1 className='mt-5 font-bold max-sm:text-[16px]'>{videoDesc?.snippet.localized.title}</h1>
                    <VideoLable subscribers={channelData?.statistics?.subscriberCount} channelImg={channelData?.snippet?.thumbnails?.high?.url || channelData?.snippet?.thumbnails?.medium?.url} likes={videoDesc?.statistics.likeCount} channelTitle={videoDesc?.snippet.channelTitle} />
                    {/* Video Descriptions */}
                    <div className='my-5 flex flex-col flex-wrap gap-1.5'>
                        <hr className='w-full border border-gray-800' />
                        <h1 className='font-bold max-sm:text-sm text-red-400'>{videoDesc ? converter(videoDesc?.statistics.viewCount) : ''} Views
                            <span className='ml-1.5 text-sm font-semibold text-gray-400'>{handleMonth(videoDesc?.snippet.publishedAt)}</span></h1>
                        <h1 className='max-sm:text-sm text-gray-400 font-medium'>
                            {videoDesc?.snippet.description}
                        </h1>

                    </div>
                    <hr className='w-full border border-gray-800' />
                    <h1 className='my-3 font-semibold text-[16px]'>{converter(Number(videoDesc?.statistics?.commentCount))} Comments</h1>
                    {
                        comments && (
                            comments.map((comment, index) => {
                                return <Comments comment={comment} key={index} />
                            })
                        )
                    }
                </div >
                <div className='lg:basis-[45%] xl:basis-[35%]'>
                    <h1 className='max-sm:text-sm text-lg font-semibold text-gray-400'>Recommended Videos</h1>
                    {/* Related Videos */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-1.5'>
                        {
                            relatedVideos && (
                                relatedVideos.map((video, index) => {
                                    return <VideoCard key={index}
                                        id={video.id} title={video.snippet.title} channelName={video?.snippet?.channelTitle}
                                        views={video?.statistics?.viewCount} thumbnail={video?.snippet.thumbnails.high.url || video?.snippet.thumbnails.medium.url || video?.snippet.thumbnails.default.url}
                                        duration={video.contentDetails.duration} published={video?.snippet?.publishedAt} channelId={video.snippet.channelId}
                                        categoryId={video.snippet.categoryId}

                                    />
                                })
                            )
                        }
                    </div>

                </div>
            </div >

        </div >
    )
}

export default VideoDetails;


