import { API_KEY } from "./Data.js";
import { useEffect, useState, createContext } from "react";

const DataContext = createContext();
export const AppProvider = ({ children }) => {
    const [category, setCategory] = useState(24);
    const [data, setData] = useState([]);

    const [input, setInput] = useState('');
    const [searchData, setSearchData] = useState([]);


    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=28&regionCode=in&videoCategoryId=${category}&key=${API_KEY}`;


    const fetchData = async () => {
        await fetch(url).then(res => res.json()).then((data) => {
            setData(data.items)
        })
    };

    useEffect(() => {
        fetchData();
    }, [category]);

    const SearchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=25&order=date&q=${input}&regionCode=in&type=video&videoDuration=any&videoEmbeddable=true&videoType=any&key=${API_KEY}`;

    const fetchSearchData = async () => {
        await fetch(SearchUrl).then(res => res.json()).then(data => setSearchData(data.items));
    }
    const handleSearch = () => {
        fetchSearchData();
        setInput("");
    }
    return (
        <DataContext.Provider value={{ category, setCategory, data, input, setInput, searchData, setSearchData, handleSearch }}>
            {children}
        </DataContext.Provider>
    )
}
export { DataContext }