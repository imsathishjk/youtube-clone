import { FaYoutube } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { FaMicrophoneLines } from "react-icons/fa6";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../Context";

export const Navbar = ({ showToggle, setShowToggle, showMenu, setShowMenu }) => {
    const { input, setInput, handleSearch } = useContext(DataContext);
    const navigate = useNavigate();
    return (
        // Navigation Bar
        <nav className="px-3 md:px-6 py-2 flex justify-between fixed top-0 z-50 w-full bg-white">

            <div className="flex items-center">
                <p><HiOutlineBars3 className="block sm:block md:block lg:hidden text-3xl font-bold cursor-pointer" onClick={() => setShowMenu(!showMenu)} /></p>
                <p><HiOutlineBars3 className="hidden lg:block text-3xl font-bold cursor-pointer" onClick={() => setShowToggle(!showToggle)} /></p>
                <div className="flex items-center ml-4 md:ml-8 cursor-pointe gap-1" onClick={() => navigate('/')}>
                    <p><FaYoutube className="text-2xl md:text-3xl text-red-500" /></p>
                    <h1 className="font-[Alata] font-semibold text-xl md:text-2xl cursor-pointer tracking-tighter" >YouTube</h1>
                </div>
            </div>

            <div className="flex items-center gap-5 basis-[40%]">
                <div className="flex items-center border-2 border-[#bdbcbc] rounded-full shadow-sm w-full">
                    <input type="text"  value={input} onChange={(e)=>setInput(e.target.value)} onClick={()=>navigate('/search')}
                    placeholder="Search" className="outline-none font-medium text-md font-[Alata] w-full bg-transparent px-3 py-1 md:py-2"></input>
                    <p className="md:w-20 md:h-11 md:bg-[#f2f2f2] flex items-center justify-center md:border-l-[1px] md:border-gray-400 md:rounded-r-3xl md:mr-0 mr-2">
                        
                    <FiSearch onClick={handleSearch} className="text-xl cursor-pointer" /></p>
                </div>
                <p className="hidden w-12 h-12 rounded-full bg-[#f2f2f2] md:flex items-center justify-center"><FaMicrophoneLines className="text-black text-lg cursor-pointer" /></p>

            </div>

            <div className="flex items-center gap-5 md:gap-12">
                <RiVideoAddLine className="hidden md:block text-xl md:text-2xl text-black cursor-pointer" />
                <FaRegBell className="hidden md:block text-xl md:text-2xl text-black cursor-pointer" />

                <p className="hidden md:flex text-lg font-medium text-white font-[Poppins] w-5 h-5 bg-pink-500 rounded-full items-center justify-center p-4 cursor-pointer">S</p>
            </div>
        </nav>
    )
}