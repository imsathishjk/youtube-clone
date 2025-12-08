import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import VideoDetails from './pages/VideoDetails';
import Navbar from './components/Navbar';
import { AppContextProvider } from './context/AppContext';

const App = () => {
  return (
    <div className='min-h-screen w-full bg-gradient-to-bl from-gray-900 to-black text-white'>

      <BrowserRouter>
        <AppContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/video/:videoId/:channelId/:categoryId' element={<VideoDetails />} />
          </Routes>
        </AppContextProvider>
      </BrowserRouter>

    </div>
  )
}

export default App
