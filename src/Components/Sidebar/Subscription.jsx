import emc from "../../assets/Profile/emc.jpg"
import vijay from "../../assets/Profile/vijay.jpg"
import a2d from "../../assets/Profile/A2D.jpg"
import codedose from "../../assets/Profile/Code dose.jpg"
import greatstack from "../../assets/Profile/channels4_profile.jpg"
export const Subscription = ({ setShowMenu }) => {
    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-md font-medium ml-2 mt-2 font-[Alata]">Subsciptions</h1>

            <div onClick={() => setShowMenu(false)} className="flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full p-2">
                <img src={emc} alt="profile-pic" className="w-5 h-5 rounded-full" />
                <h1 className="text-md font-[Alata] font-regular">Error Makes Clever</h1>
            </div>
            <div onClick={() => setShowMenu(false)} className="flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full p-2">
                <img src={a2d} alt="profile-pic" className="w-5 h-5 rounded-full" />
                <h1 className="text-md font-[Alata] font-regular">A2D Channel</h1>
            </div>
            <div onClick={() => setShowMenu(false)} className="flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full p-2">
                <img src={codedose} alt="profile-pic" className="w-5 h-5 rounded-full" />
                <h1 className="text-md font-[Alata] font-regular">The Code Dose</h1>
            </div>
            <div onClick={() => setShowMenu(false)} className="flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full p-2">
                <img src={vijay} alt="profile-pic" className="w-5 h-5 rounded-full" />
                <h1 className="text-md font-[Alata] font-regular">Vijay Television</h1>
            </div>
            <div onClick={() => setShowMenu(false)} className="flex items-center gap-5 transition-all duration-200 cursor-pointer rounded-md hover:bg-[#f2f2f2] hover:font-semibold w-full p-2">
                <img src={greatstack} alt="profile-pic" className="w-5 h-5 rounded-full" />
                <h1 className="text-md font-[Alata] font-regular">Great Stack</h1>
            </div>
        </div>
    )
}