import { Navbar } from './Components/NavBar/Navbar';
import { useState } from 'react';
import './index.css'
import { Home } from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { VideoPage } from './Pages/VideoPage/VideoPage';
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { SearchComp } from './Pages/SearchPage/SearchComp';
function App() {
  const [showToggle, setShowToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar showToggle={showToggle} setShowToggle={setShowToggle} showMenu={showMenu} setShowMenu={setShowMenu} />
        <Sidebar setShowMenu={setShowMenu} showMenu={showMenu} />
        <Routes>
          <Route path='/' element={<Home showToggle={showToggle} setShowToggle={setShowToggle} />} />
          <Route exact path="/video/:videoCategoryId/:videoId" element={<VideoPage />} />
          <Route path='/search' element={<SearchComp />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
