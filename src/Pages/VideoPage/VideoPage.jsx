import { VideoPlayer } from "../../Components/PlayerComp/VideoPlayer"
import { Recommend } from "../../Components/RecommendComp/Recommend"
import { useEffect } from "react";
import { useState } from "react";
import { API_KEY } from "../../Data";
import { useParams } from "react-router-dom";

export const VideoPage = () => {
    const { videoId } = useParams();
    const [data, setData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [comments, setComments] = useState([]);

    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&regionCode=in&key=${API_KEY}`;
    const fetchData = async () => {
        const response = await fetch(url).then(res => res.json()).then((data) => {
            return data.items[0];
        })
        setData(response)
    }
    const fetchChannelData = async () => {
        try {
            const fetchInfo = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${data ? data.snippet.channelId : "/91nOLIsG-7M"}&key=${API_KEY}`
            await fetch(fetchInfo).then(res => res.json()).then(data => setChannelData(data.items[0]));
        } catch {
            console.log("Error")
        }
    }
    const fetchCommentData = async () => {
        try {
            const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
            await fetch(commentUrl).then(res => res.json()).then(data => setComments(data.items));
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData();
    }, [videoId])
    useEffect(() => {
        fetchChannelData(); fetchCommentData();
    }, [data])
    return (
        <div className="flex justify-between flex-wrap gap-5 lg:flex-nowrap mt-[90px] mx-[5%]">
            <VideoPlayer  data={data} channelData={channelData} comments = {comments} videoId = {videoId}/>
            <Recommend />
        </div>
    )
}