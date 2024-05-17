import { BiBell } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { HiOutlineDownload } from "react-icons/hi";
import { TbBasketDollar } from "react-icons/tb";
import { RxScissors } from "react-icons/rx";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { value_converter } from "../../valueconverter";
import { useState } from "react";
export const VideoTitlte = ({ data, channelData }) => {
    const [likeIcon, setLikeIcon] = useState(false);
    const [DislikeIcon, setDLikeIcon] = useState(false);

    const handleLikeBtn = () => {
        setLikeIcon(!likeIcon);
        setDLikeIcon(false);
    }
    const handleDislikeBtn = () => {
        setLikeIcon(false);
        setDLikeIcon(!DislikeIcon);
    }
    return (
        <>
            <div className="flex gap-1 font-[Alata]">
                <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt="logo" className="w-10 h-10 rounded-full" />
                <div>
                    <p className="text-[13px] font-semibold">{data ? data.snippet.channelTitle : "Channel Title"}</p>
                    <p className="text-[12px] font-[Roboto] text-gray-600">{channelData ? value_converter(channelData.statistics.subscriberCount) + " Subscribers" : "1M subscribers"}</p>
                </div>
                <div className="flex gap-2 items-center mx-5 font-medium">
                    <button className="hidden md:block bg-black text-white px-4 py-2 rounded-full text-sm font-medium">Join</button>
                    <button className="flex items-center bg-[#f2f2f2] px-2 py-2 rounded-full text-sm"><BiBell className="mx-2 text-lg" />Subscibe<BiChevronDown className="mx-2" /></button>
                </div>
            </div>
            <div className="flex items-center gap-2 font-[Alata] font-medium">
                <button className="flex items-center bg-[#f2f2f2] px-2 py-2 rounded-full transition-all duration-700 ease-in-out"><span onClick={handleLikeBtn}>{likeIcon ? <BiSolidLike className="text-lg mx-3 text-blue-600 transform scale-125" /> : <BiLike className="text-lg mx-3 text-blue-600" />}</span><span className="text-[12px] font-bold">{data ? value_converter(data.statistics.likeCount) : ""}</span><span className="text-gray-200 mx-2">|</span>
                    <span onClick={handleDislikeBtn}>{DislikeIcon ? <BiSolidDislike className="text-lg mx-3 text-red-500 transfrom scale-125" /> : <BiDislike className="text-lg mx-3 text-red-500" />}</span>
                </button>
                <button className="flex items-center bg-[#f2f2f2] px-2 py-2 rounded-full text-[13px]"><PiShareFatLight className="mx-2 text-lg"></PiShareFatLight>Share</button>
                <button className="flex items-center bg-[#f2f2f2] px-2 py-2 rounded-full text-[13px]"><HiOutlineDownload className="mx-2 text-lg"></HiOutlineDownload>Download</button>
                <button className="hidden md:flex items-center bg-[#f2f2f2] px-2 py-2 rounded-full text-[13px]"><TbBasketDollar className="mx-2 text-lg" />Thanks</button>
                <button className="hidden md:flex items-center bg-[#f2f2f2] px-2 py-2 rounded-full text-[13px]"><RxScissors className="mx-2 text-lg" />Clip</button>
                <div className="hidden md:block bg-[#f2f2f2] px-2 py-2 rounded-full">
                    <HiOutlineDotsHorizontal />
                </div>
            </div>
        </>
    )
}