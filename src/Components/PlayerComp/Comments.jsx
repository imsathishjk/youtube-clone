import moment from "moment";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
export const Comments = ({ item }) => {

    return (
        <>
            <div className="flex items-start gap-5 border-b border-gray-100 font-[Alata]">
                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" className="w-10 h-10 rounded-full border border-gray-300" />
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <h1 className="text-[14px] tracking-wider font-semibold">{item.snippet.topLevelComment.snippet.authorDisplayName}</h1>
                        <p className="text-[12px] font-medium text-blue-500">{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</p>
                    </div>
                    <p className="text-md text-wrap">{item.snippet.topLevelComment.snippet.textDisplay}</p>
                    <div className="flex items-center gap-8">
                        <p className="flex items-center gap-1 text-sm"><BiLike />{item.snippet.topLevelComment.snippet.likeCount}</p>
                        <BiDislike />
                        <p className="text-[11px]">Reply</p>
                    </div>
                </div>
            </div>
        </>
    )
}