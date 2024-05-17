import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { useNavigate } from "react-router-dom";
export const HomeTile = ({ setShowMenu }) => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col gap-3">
            <div  onClick={()=>navigate('/')} className="flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-xl hover:bg-[#f2f2f2] hover:font-semibold w-full p-2">
                <p><IoMdHome className="text-xl" /></p>
                <h1 onClick={() => setShowMenu(false)} className="text-md font-[Alata] font-regular">Home</h1>
            </div>
            <div onClick={() => setShowMenu(false)} className="flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-xl hover:bg-[#f2f2f2] hover:font-semibold w-full p-2">
                <p><SiYoutubeshorts className="text-xl" /></p>
                <h1 className="text-md font-[Alata] font-regular">Shorts</h1>
            </div>
            <div onClick={() => setShowMenu(false)} className="flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-xl hover:bg-[#f2f2f2] hover:font-semibold w-full p-2">
                <p><MdOutlineSubscriptions className="text-xl" /></p>
                <h1 className="text-md font-[Alata] font-regular">Subscriptions</h1>
            </div>
            <div onClick={() => setShowMenu(false)} className="flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-xl hover:bg-[#f2f2f2] hover:font-semibold w-full p-2">
                <p><SiYoutubemusic className="text-xl" /></p>
                <h1 className="text-md font-[Alata] font-regular">YouTube Music</h1>
            </div>
        </div>
    )
}