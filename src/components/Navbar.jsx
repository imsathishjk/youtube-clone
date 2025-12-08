import React, { useContext, useState } from 'react'
import { GrYoutube } from "react-icons/gr";
import { RiMenu5Fill } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";
import { MdSettingsVoice } from "react-icons/md";
import { RiAddFill } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import profile_pic from '../assets/images/vijay (2).jpg';
import { MdArrowBack } from "react-icons/md";
import AppContext from '../context/AppContext';


const Navbar = () => {


    const { showSearchBar, setShowSearchbar, sidebar, setShowSidebar, showSidebar, setSidebar, navigate, query, setQuery, handleSearch } = useContext(AppContext);

    return (
        <div className='px-4 py-2 fixed top-0 w-full z-50 bg-gradient-to-bl from-gray-900 to-black'>
            <div className='flex justify-between items-center relative'>
                {/* Left content */}
                <div className='flex gap-5 items-center'>
                    <RiMenu5Fill onClick={() => setShowSidebar(!showSidebar)} className='block lg:hidden text-xl font-bold cursor-pointer' />
                    <RiMenu5Fill onClick={() => setSidebar(!sidebar)} className='hidden lg:block text-xl font-bold cursor-pointer' />
                    <div onClick={() => navigate('/', scrollTo(0, 0))} className='flex gap-2 items-center cursor-pointer'>
                        <GrYoutube className='text-xl text-red-500' />
                        <h1 className='text-xl font-bold md:text-2xl'>Premium</h1>
                    </div>
                </div>
                {/* Middle Content */}
                {
                    showSearchBar ? '' : <RiSearch2Line onClick={() => setShowSearchbar(true)} className='block md:hidden cursor-pointer text-lg font-bold' />
                }
                {
                    showSearchBar ? <div className='flex lg:flex-1 md:hidden items-center gap-4 max-w-sm lg:max-w-lg absolute top-0 w-full mx-auto backdrop-blur-xl rounded-full'>
                        <MdArrowBack onClick={() => setShowSearchbar(false)} className='text-2xl' />
                        <div className='flex justify-between items-center w-full border-2 border-gray-700 rounded-full py-2 px-4'>
                            <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder='Search Music, Games, Sports etc..' 
                            className='placeholder:text-gray-400 placeholder:text-sm text-sm font-medium w-full outline-none border-none' />
                            <RiSearch2Line onClick={handleSearch} className='cursor-pointer text-lg font-bold' />
                        </div>
                        <MdSettingsVoice className='hidden lg:block cursor-pointer text-2xl text-gray-300' />
                    </div> : ''
                }
                <div className='hidden flex-1 md:flex items-center gap-4 max-w-sm lg:max-w-lg'>
                    <div className='flex justify-between items-center w-full border-2 border-gray-700 rounded-full py-2 px-4'>
                        <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder='Search Music, Games, Sports etc..' 
                        className='placeholder:text-gray-400 placeholder:text-sm text-sm font-medium w-full outline-none border-none' />
                        <RiSearch2Line onClick={handleSearch} className='cursor-pointer text-lg font-bold' />
                    </div>
                    <MdSettingsVoice className='hidden lg:block cursor-pointer text-2xl text-gray-300' />
                </div>
                {/* Right content */}
                <div className='flex items-center gap-5'>
                    <div className='hidden lg:flex items-center gap-1.5 cursor-pointer bg-gray-600 py-1.5 px-3 rounded-full'>
                        <p className='font-semibold'>Create</p>
                        <RiAddFill className='' />
                    </div>
                    <BsBell className='hidden md:block cursor-pointer text-xl' />
                    <img src={profile_pic} alt="profile_picture" className='w-8 h-8 rounded-full cursor-pointer' />
                </div>

            </div>
        </div>
    )
};

export default Navbar;
