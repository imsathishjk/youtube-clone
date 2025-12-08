// const API_KEY = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=`

import { RiHome3Line } from "react-icons/ri";
import { SiYoutubeshorts } from "react-icons/si";
import { RiHistoryFill } from "react-icons/ri";
import { RiPlayListLine } from "react-icons/ri";
import { GoStopwatch } from "react-icons/go";
import { SlLike } from "react-icons/sl";
import { RiVideoAddLine } from "react-icons/ri";
import { RiDownload2Fill } from "react-icons/ri";
import { RiGraduationCapLine } from "react-icons/ri";

export const menuLists = [
    {
        id: 1,
        title: 'Home',
        icon: <RiHome3Line></RiHome3Line>
    },
    {
        id: 2,
        title: 'Shorts',
        icon: <SiYoutubeshorts />
    },
    {
        id: 3,
        title: 'History',
        icon: <RiHistoryFill />
    },
    {
        id: 4,
        title: 'Playlists',
        icon: <RiPlayListLine />
    },
    {
        id: 5,
        title: 'Watch Later',
        icon: <GoStopwatch />
    },
    {
        id: 6,
        title: 'Liked Videos',
        icon: <SlLike />
    },
    {
        id: 7,
        title: 'Your Videos',
        icon: <RiVideoAddLine />
    },
    {
        id: 8,
        title: 'Downloads',
        icon: <RiDownload2Fill />
    },
    {
        id: 9,
        title: 'Courses',
        icon: <RiGraduationCapLine />
    },

]