import { FaAngleRight } from "react-icons/fa6";
import { BiSolidUserAccount } from "react-icons/bi";
import { GoHistory } from "react-icons/go";
import { RiPlayList2Fill } from "react-icons/ri";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { GoDownload } from "react-icons/go";
export const UserTile = ({setShowMenu}) => {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center mt-3 gap-3">
                <h1 className="text-md font-medium ml-2">You</h1>
                <FaAngleRight />
            </div>
            <div  onClick={()=>setShowMenu(false)} className="flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full p-2">
                <p><BiSolidUserAccount className="text-xl" /></p>
                <h1 className="text-md font-[Alata] font-regular">Your Channel</h1>
            </div>
            <div  onClick={()=>setShowMenu(false)} className="flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full p-2">
                <p><GoHistory className="text-xl" /></p>
                <h1 className="text-md font-[Alata] font-regular">History</h1>
            </div>
            <div  onClick={()=>setShowMenu(false)} className="flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full p-2">
                <p><RiPlayList2Fill className="text-xl" /></p>
                <h1 className="text-md font-[Alata] font-regular">Playlists</h1>
            </div>
            <div  onClick={()=>setShowMenu(false)} className="flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full p-2">
                <p><AiOutlinePlaySquare className="text-xl" /></p>
                <h1 className="text-md font-[Alata] font-regular">Your videos</h1>
            </div>
            <div  onClick={()=>setShowMenu(false)} className="flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full p-2">
                <p><MdOutlineWatchLater className="text-xl" /></p>
                <h1 className="text-md font-[Alata] font-regular">Watch later</h1>
            </div>
            <div  onClick={()=>setShowMenu(false)} className="flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full p-2">
                <p><AiOutlineLike className="text-xl" /></p>
                <h1 className="text-md font-[Alata] font-regular">Liked videos</h1>
            </div>
            <div  onClick={()=>setShowMenu(false)} className="flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full p-2">
                <p><GoDownload className="text-xl" /></p>
                <h1 className="text-md font-[Alata] font-regular">Downloads</h1>
            </div>
        </div>
    )
}