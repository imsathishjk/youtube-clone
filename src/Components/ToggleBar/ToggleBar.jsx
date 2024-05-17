import emc from "../../assets/Profile/emc.jpg"
import vijay from "../../assets/Profile/vijay.jpg"
import a2d from "../../assets/Profile/A2D.jpg"
import codedose from "../../assets/Profile/Code dose.jpg"
import greatstack from "../../assets/Profile/channels4_profile.jpg"
import { FaAngleRight } from "react-icons/fa6";
import { BiSolidUserAccount } from "react-icons/bi";
import { GoHistory } from "react-icons/go";
import { RiPlayList2Fill } from "react-icons/ri";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { GoDownload } from "react-icons/go";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
export const ToggleBar = ({ showToggle }) => {
    return (
        <div className={showToggle ? 'hidden xl:flex flex-col gap-3 xl:basis-[5%] fixed' : 'hidden xl:flex flex-col gap-3 xl:basis-[0%] fixed'}>
            <div className="flex flex-col gap-3 w-full text-nowrap">
                <div className={showToggle ? "flex items-center gap-5 transition-all duration-200 ease-in-out cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full px-2 py-2" : "flex items-center p-2 transition-all duration-200 ease-in-out hover:bg-[#f2f2f2] cursor-pointer"}>
                    <p><IoMdHome className="text-xl" /></p>
                    <h1 className="text-md font-[Alata] font-regular">{showToggle ? "Home" : ""}</h1>
                </div>
                <div className={showToggle ? "flex items-center gap-5 transition-all duration-200 ease-in-out cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full px-2 py-2" : "flex items-center p-2 transition-all duration-200 ease-in-out hover:bg-[#f2f2f2] cursor-pointer"}>
                    <p><SiYoutubeshorts className="text-xl" /></p>
                    <h1 className="text-md font-[Alata] font-regular">{showToggle ? "Shorts" : ""}</h1>
                </div>
                <div className={showToggle ? "flex items-center gap-5 transition-all duration-200 ease-in-out cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full px-2 py-2" : "flex items-center p-2 transition-all duration-200 ease-in-out hover:bg-[#f2f2f2] cursor-pointer"}>
                    <p><MdOutlineSubscriptions className="text-xl" /></p>
                    <h1 className="text-md font-[Alata] font-regular">{showToggle ? "Subscriptions" : ""}</h1>
                </div>
                <div className={showToggle ? "flex items-center gap-5 transition-all duration-200 ease-in-out cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full px-2 py-2" : "flex items-center p-2 transition-all duration-200 ease-in-out hover:bg-[#f2f2f2] cursor-pointer"}>
                    <p><SiYoutubemusic className="text-xl" /></p>
                    <h1 className="text-md font-[Alata] font-regular">{showToggle ? "YouTube Music" : ""}</h1>
                </div>
            </div>
            <hr className="w-full" />
            <div className="flex flex-col gap-3 w-full text-nowrap">
                <div className="flex items-center mt-3 gap-3">
                    <h1 className="text-md font-medium ml-2">You</h1>
                    <FaAngleRight />
                </div>
                <div className={showToggle ? "flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full px-2 py-2" : "flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-xl hover:bg-[#f2f2f2] hover:font-semibold w-fit p-2"}>
                    <p><BiSolidUserAccount className="text-xl" /></p>
                    <h1 className="text-md font-[Alata] font-regular">{showToggle ? "Your Channel" : ""}</h1>
                </div>
                <div className={showToggle ? "flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full px-2 py-2" : "flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-xl hover:bg-[#f2f2f2] hover:font-semibold w-fit p-2"}>
                    <p><GoHistory className="text-xl" /></p>
                    <h1 className="text-md font-[Alata] font-regular">{showToggle ? "History" : ""}</h1>
                </div>
                <div className={showToggle ? "flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full px-2 py-2" : "flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-xl hover:bg-[#f2f2f2] hover:font-semibold w-fit p-2"}>
                    <p><RiPlayList2Fill className="text-xl" /></p>
                    <h1 className="text-md font-[Alata] font-regular">{showToggle ? "Playlists" : ""}</h1>
                </div>
                <div className={showToggle ? "flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full px-2 py-2" : "flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-xl hover:bg-[#f2f2f2] hover:font-semibold w-fit p-2"}>
                    <p><AiOutlinePlaySquare className="text-xl" /></p>
                    <h1 className="text-md font-[Alata] font-regular">{showToggle ? "Your videos" : ""}</h1>
                </div>
                <div className={showToggle ? "flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full px-2 py-2" : "flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-xl hover:bg-[#f2f2f2] hover:font-semibold w-fit p-2"}>
                    <p><MdOutlineWatchLater className="text-xl" /></p>
                    <h1 className="text-md font-[Alata] font-regular">{showToggle ? "Watch later" : ""}</h1>
                </div>
                <div className={showToggle ? "flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full px-2 py-2" : "flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-xl hover:bg-[#f2f2f2] hover:font-semibold w-fit p-2"}>
                    <p><AiOutlineLike className="text-xl" /></p>
                    <h1 className="text-md font-[Alata] font-regular">{showToggle ? "Liked videos" : ""}</h1>
                </div>
                <div className={showToggle ? "flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full px-2 py-2" : "flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-xl hover:bg-[#f2f2f2] hover:font-semibold w-fit p-2"}>
                    <p><GoDownload className="text-xl" /></p>
                    <h1 className="text-md font-[Alata] font-regular">{showToggle ? "Downloads" : ""}</h1>
                </div>
            </div>

            <hr className="w-full" />
            <div className="flex flex-col gap-3 w-full text-nowrap">
                <h1 className="text-md font-medium ml-2 mt-2 font-[Alata]">{showToggle ? "Subsciptions" : ""}</h1>

                <div className={showToggle ? "flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full px-2 py-2" : "flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-xl hover:bg-[#f2f2f2] hover:font-semibold w-fit p-2"}>
                    <img src={emc} alt="profile-pic" className="w-5 h-5 rounded-full" />
                    <h1 className="text-md font-[Alata] font-regular">{showToggle ? "Error Makes Clever" : ""}</h1>
                </div>
                <div className={showToggle ? "flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full px-2 py-2" : "flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-xl hover:bg-[#f2f2f2] hover:font-semibold w-fit p-2"}>
                    <img src={a2d} alt="profile-pic" className="w-5 h-5 rounded-full" />
                    <h1 className="text-md font-[Alata] font-regular">{showToggle ? "A2D Channel" : ""}</h1>
                </div>
                <div className={showToggle ? "flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full px-2 py-2" : "flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-xl hover:bg-[#f2f2f2] hover:font-semibold w-fit p-2"}>
                    <img src={codedose} alt="profile-pic" className="w-5 h-5 rounded-full" />
                    <h1 className="text-md font-[Alata] font-regular">{showToggle ? "The Code Dose" : ""}</h1>
                </div>
                <div className={showToggle ? "flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full px-2 py-2" : "flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-xl hover:bg-[#f2f2f2] hover:font-semibold w-fit p-2"}>
                    <img src={vijay} alt="profile-pic" className="w-5 h-5 rounded-full" />
                    <h1 className="text-md font-[Alata] font-regular">{showToggle ? "Vijay Television" : ""}</h1>
                </div>
                <div className={showToggle ? "flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full px-2 py-2" : "flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-xl hover:bg-[#f2f2f2] hover:font-semibold w-fit p-2"}>
                    <img src={greatstack} alt="profile-pic" className="w-5 h-5 rounded-full" />
                    <h1 className="text-md font-[Alata] font-regular">{showToggle ? "Great Stack" : ""}</h1>
                </div>
            </div>
        </div>
    )
}