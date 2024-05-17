import { useContext, useState } from "react";
import { DataContext } from "../../Context";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
export const SearchComp = () => {
    const { searchData } = useContext(DataContext);
    const navigate = useNavigate()

    return (
        <div className="mt-[95px]">
            <div className="flex items-center justify-center">
                <button onClick={()=>navigate('/')}
                 className="bg-[#f2f2f2] duration-500 border-2 border-[#f2f2f2] ease-in-out hover:bg-black hover:text-white px-6 py-3 cursor-pointer font-medium text-md font-[Alata] rounded-full shadow-sm">Back To Home</button>

            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-wrap gap-6 mt-20 mx-[10%]">
                {
                    searchData.map((item, index) => {
                        return (
                            <Link to={`/video/${10}/${item.id.videoId}`} key={index} className="cursor-pointer">
                                <div>
                                    <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} className="w-full rounded-xl" />
                                </div>
                                <div className="flex flex-col gap-1 mt-1">
                                    <div>
                                        <h1 className="text-[15px] font-[Poppins] font-medium tracking-wider">{item.snippet.title.slice(0, 120)}</h1>
                                        <h2 className="text-md font-[Alata] font-bold text-blue-500 tracking-wider">{item.snippet.channelTitle}</h2>
                                    </div>
                                    <div className="flex gap-1 items-center font-medium">
                                        <p>&bull;</p>
                                        <p className="text-sm text-gray-500 font-[Poppins]">{moment(item.snippet.publishedAt).fromNow()}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>

        </div>
    )
}