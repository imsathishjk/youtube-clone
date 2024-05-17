import moment from "moment"
import { value_converter } from "../../valueconverter"
export const VideoDesc = ({ data }) => {
    return (

        <>
            <div className="bg-[#f2f2f2] p-2 rounded-md mt-5">
                <h1 className="font-[Roboto] text-sm font-semibold">{data ? value_converter(data.statistics.viewCount) : "1M views"} <span className="font-medium">views</span> <span>{data ? moment(data.snippet.publishedAt).fromNow() : "3 Days ago"}</span></h1>
                <p className="text-gray-600 font-medium">{data ? data.snippet.description.slice(0, 500) + "..." : "Description Not Found"}</p>
            </div>
            <div className="mt-3">
                <h1 className="text-md font-[Poppins] font-semibold">{data ? value_converter(data.statistics.commentCount) + " " + "Comments" : ""}</h1>
            </div>
        </>

    )
}