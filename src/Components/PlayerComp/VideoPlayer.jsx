import { Comments } from "./Comments"
import { VideoDesc } from "./VideoDesc"
import { VideoTitlte } from "./VideoTitle"

export const VideoPlayer = ({data, channelData, comments, videoId}) => {

    return (
        <div className="w-full lg:w-[65%]">
            <iframe src={`https://www.youtube.com/embed/${videoId}`} className="w-full h-[40vh] lg:h-[57vh] rounded-xl" title={data ? data.snippet.title : "Title Comes Here"} frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <div className="mt-2 w-full">
                <h1 className="text-md font-semibold">{data ? data.snippet.title : "Title comes here"}</h1>
                <div className="mt-5 flex flex-col items-start gap-2">
                    <VideoTitlte data={data} channelData={channelData} />
                </div>
                <div className="mt-3 mb-2">
                    <VideoDesc data={data} channelData={channelData} />
                </div>
                <hr className="bg-gray-700 shadow-md" />
                <div className="flex flex-col text-wrap gap-3 mt-5 ">
                    {
                        comments ? comments.map((item, index) => {
                            return <Comments key={index} item={item} />
                        }) : ""
                    }
                </div>
            </div>
        </div>
    )
}
