import { value_converter } from "../../valueconverter";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_KEY } from "../../Data";
import moment from "moment";
export const Recommend = () => {
    const { videoCategoryId } = useParams();

    const [recommend, setRecommend] = useState([]);
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=22&regionCode=in&videoCategoryId=${videoCategoryId}&key=${API_KEY}`;


    const fetchRecommend = async () => {
        await fetch(url).then(res => res.json()).then((data) => {
            setRecommend(data.items)
        })
    }
    useEffect(() => {
        fetchRecommend()
    }, [])


    return (
        <div className="flex flex-col gap-4 w-full lg:w-[30%]" >
            {
                recommend.map((item, index) => {
                    return (
                        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="flex lg:flex-col xl:flex-row gap-2 cursor-pointer" >
                            <div className="basis-[50%]">
                                <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} className="w-fit rounded-xl" />
                            </div>
                            <div className="flex flex-col basis-[49%]">
                                <div className="">
                                    <h1 className="text-sm tracking-wider font-[Alata]">{item.snippet.title.slice(0, 120)}</h1>
                                    <h2 className="text-md text-blue-500 font-[Alata] font-medium">{item.snippet.channelTitle}</h2>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <p className="text-sm text-gray-500">{value_converter(item.statistics.viewCount)} views</p>
                                    <p className="text-sm text-gray-500">&bull;</p>
                                    <p className="text-sm text-gray-500">{moment(item.snippet.publishedAt).fromNow()}</p>
                                </div>
                            </div>
                        </Link >

                    )
                })
            }

        </div >
    )
}