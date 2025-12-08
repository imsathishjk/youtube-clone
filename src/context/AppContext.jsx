import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const AppContext = createContext();




export const AppContextProvider = ({ children }) => {


    const API_KEY ='AIzaSyDE-4GCzkw8jVvLxEpnvI9dJHClcyg4VD4';

    // const API_KEY = 'AIzaSyBN9Y_nm8WCQoWsCJruccboGAgzRcGbCDI';
    const POPULAR_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=30&key=${API_KEY}`;


    const navigate = useNavigate();
    const [showSearchBar, setShowSearchbar] = useState(false);
    const [sidebar, setSidebar] = useState(true);
    const [showSidebar, setShowSidebar] = useState(false);
    const [videos, setVideos] = useState([]);
    const [query, setQuery] = useState('');
    const [searchData, setSearchData] = useState([]);



    const handleMonth = (date) => {
        const newDate = new Date(date);
        const day = newDate.getUTCDate();
        const month = newDate.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' });
        const year = newDate.getUTCFullYear();
        const formatted = `${day} ${month} ${year}`;
        return formatted;
    };


    const handleSearch = async () => {
        if (query) {
            try {
                const SEARCH_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query.trim().toLowerCase()}&key=${API_KEY}`;
                const { data } = await axios.get(SEARCH_URL);
                setSearchData(data.items);
                if (searchData) {
                    setQuery('');
                }
            } catch (err) {
                console.log(err)
            }
        }
    }

    const handleFetchVideos = async () => {
        try {
            const { data } = await axios.get(POPULAR_URL);
            if (data) {
                setVideos(data.items);
            }
        } catch (err) {
            console.log(err);
        }

    };

    const handleSearchVideos = () => {
        if (searchData) {
            setVideos(searchData);
        }
    };


    useEffect(() => {
        handleSearchVideos()
    }, [searchData]);

    useEffect(() => {
        handleFetchVideos();
    }, []);

    const value = {
        API_KEY, showSearchBar, setShowSearchbar, sidebar, setShowSidebar, showSidebar, setSidebar, navigate, videos, handleMonth,
        handleSearch, searchData, query, setQuery, setVideos
    }




    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}


export default AppContext;