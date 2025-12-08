import React from 'react'
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import profile from '../assets/images/vijay (2).jpg';
import moment from 'moment';

const Comments = ({ comment }) => {
    return (
        <div className='my-3'>
            {/* Comments */}
            <div className='flex items-start gap-5 mt-3'>
                <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" className='md:w-10 md:h-10 w-8 h-8 rounded-full' />
                <div className='flex flex-col gap-1.5'>
                    <p className='font-semibold text-[14px] text-red-400'>{comment.snippet.topLevelComment.snippet.authorDisplayName} <span className='text-gray-400 ml-2 text-sm'>{moment(comment.snippet.topLevelComment.snippet.updatedAt).fromNow()}</span> </p>
                    <p className='text-sm font-medium'>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
                    <button className='flex items-center gap-3 font-semibold'><FaRegThumbsUp className='text-sm' /> <span className='text-sm'>{comment.snippet.topLevelComment.snippet.likeCount}</span> <span className='text-gray-500'>|</span> <FaRegThumbsDown className='text-sm' /> </button>
                </div>

            </div>
        </div>
    )
}

export default Comments;