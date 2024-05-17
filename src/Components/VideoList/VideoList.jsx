import { useContext } from "react";
import { DataContext } from "../../Context";
import { value_converter } from "../../valueconverter";
import { Link } from "react-router-dom";
import moment from "moment";

export const VideoList = ({ showToggle }) => {
    const { data, category, setCategory } = useContext(DataContext);

    return (
        <div className={showToggle ? 'font-[Alata] xl:w-[90%] mx-auto xl:pl-[10%]' : 'font-[Alata] w-[100%] xl:pl-[7%] mx-auto'}>

            <ul className="inline-flex items-center fixed top-12 w-full bg-white py-4 pb-2 transition-all duration-500 pt-8 overflow-x-scroll">
                <li onClick={() => setCategory(24)}

                    className={category === 24 ? "bg-black text-white px-3 md:px-6 py-2 w-fit h-fit select-none rounded-full cursor-pointer text-sm md:text-md mx-[10px] md:mx-18 lg:mx-18 " : " mx-[10px] md:mx-18 lg:mx-18 bg-[#f2f2f2]  px-3 md:px-6 py-2 w-fit h-fit select-none rounded-full font-regular text-sm md:text-md cursor-pointer text-black"}>All</li>


                <li onClick={() => setCategory(10)}

                    className={category === 10 ? "bg-black text-white px-3 md:px-6 py-2 w-fit h-fit select-none rounded-full cursor-pointer text-sm md:text-md mx-[10px] md:mx-18 lg:mx-18 " : " mx-[10px] md:mx-18 lg:mx-18 bg-[#f2f2f2]  px-3 md:px-6 py-2 w-fit h-fit select-none rounded-full font-regular text-sm md:text-md cursor-pointer text-black"}>Music</li>


                <li onClick={() => setCategory(25)}

                    className={category === 25 ? "bg-black text-white px-3 md:px-6 py-2 w-fit h-fit select-none rounded-full cursor-pointer text-sm md:text-md text-nowrap mx-[10px] md:mx-18 lg:mx-18  " : " mx-[10px] md:mx-18 lg:mx-18  text-nowrap bg-[#f2f2f2]  px-3 md:px-6 py-2 w-fit h-fit select-none rounded-full font-regular text-sm md:text-md cursor-pointer text-black"}>News</li>


                <li onClick={() => setCategory(15)}

                    className={category === 15 ? "bg-black text-white px-3 md:px-6 py-2 w-fit h-fit select-none rounded-full cursor-pointer text-sm md:text-md text-nowrap  mx-[10px] md:mx-18 lg:mx-18 " : " mx-[10px] md:mx-18 lg:mx-18  text-nowrap bg-[#f2f2f2]  px-3 md:px-6 py-2 w-fit h-fit select-none rounded-full font-regular text-sm md:text-md cursor-pointer text-black"}>Pets</li>



                <li onClick={() => setCategory(17)}

                    className={category === 17 ? "bg-black text-white px-3 md:px-6 py-2 w-fit h-fit select-none rounded-full cursor-pointer text-sm md:text-md mx-[10px] md:mx-18 lg:mx-18 " : " mx-[10px] md:mx-18 lg:mx-18 bg-[#f2f2f2]  px-3 md:px-6 py-2 w-fit h-fit select-none rounded-full font-regular text-sm md:text-md cursor-pointer text-black"}>Sports</li>


                <li onClick={() => setCategory(20)}

                    className={category === 20 ? "bg-black text-white px-3 md:px-6 py-2 w-fit h-fit select-none rounded-full cursor-pointer text-sm md:text-md mx-[10px] md:mx-18 lg:mx-18 " : " mx-[10px] md:mx-18 lg:mx-18 bg-[#f2f2f2]  px-3 md:px-6 py-2 w-fit h-fit select-none rounded-full font-regular text-sm md:text-md cursor-pointer text-black"}>Gaming</li>

            </ul>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-wrap gap-6 mt-20 mx-auto">
                {
                    data.map((item, index) => {
                        return (
                            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="cursor-pointer">
                                <div>
                                    <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} className="w-full rounded-xl" />
                                </div>
                                <div className="flex flex-col gap-1 mt-1">
                                    <div>
                                        <h1 className="text-[15px] font-[Poppins] font-medium tracking-wider">{item.snippet.title.slice(0, 120)}</h1>
                                        <h2 className="text-md font-[Alata] font-bold text-blue-500 tracking-wider">{item.snippet.channelTitle}</h2>
                                    </div>
                                    <div className="flex gap-1 items-center font-medium">
                                        <p className="text-sm tracking-wide text-gray-500 font-[Poppins]">{value_converter(item.statistics.viewCount)} Views</p>
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