import React, { useContext, useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import AppContext from '../context/AppContext'
import axios from 'axios';
const Category = () => {
  const { sidebar, videos, API_KEY, setVideos } = useContext(AppContext);

  const [categoryData, setCategoryData] = useState([]);
  const [category, setCategory] = useState('10');


  const CATEGORIES_URL = `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&&regionCode=US&key=${API_KEY}`


  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(CATEGORIES_URL);
      setCategoryData(data.items);
    } catch (err) {
      console.log(err)
    }
  };

  const handleFilterCategories = async () => {
    const CATEGORIES_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=30&videoCategoryId=${category}&key=${API_KEY}`
    const { data } = await axios.get(CATEGORIES_URL);
    setVideos(data.items);
  }

  useEffect(() => {
    fetchCategories();
  }, []);


  useEffect(() => {
    handleFilterCategories();
  }, [category])



  return (
    <div className={`z-0 overflow-x-scroll no-scroll basis-full ${sidebar ? 'basis-[90%]' : 'basis-[95%]'}`}>
      <div className='flex justify-between items-center gap-5 overflow-x-scroll no-scroll mt-5'>
        {
          categoryData.map((item, index) => {
            return <button onClick={() => setCategory(item.id)}
              className={`text-sm font-semibold text-nowrap cursor-pointer rounded-full p-2 md:p-2.5 transition-all duration-300 ease-in-out border-none
            ${category == item.id ? 'bg-red-600 text-white' : 'bg-white text-gray-700'}
              `} key={index}>{item.snippet.title}</button>
          })
        }
      </div>
      <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 place-items-center'>
        {
          videos.map((video, i) => {
            return <VideoCard key={i} id={video.id} title={video.snippet.title} channelName={video?.snippet?.channelTitle}
              views={video?.statistics?.viewCount} thumbnail={video?.snippet.thumbnails.high.url || video?.snippet.thumbnails.medium.url || video?.snippet.thumbnails.default.url}
              duration={video?.contentDetails?.duration || ''} published={video?.snippet?.publishedAt} channelId={video.snippet.channelId}
              categoryId={video.snippet.categoryId}
            />
          })
        }
      </div>
    </div>
  )
}

export default Category
