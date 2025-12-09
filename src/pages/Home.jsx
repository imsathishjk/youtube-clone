import React from 'react';
import Sidebar from '../components/Sidebar';
import Category from '../components/Category';

const Home = () => {

  return (
    <div className='pt-16 px-4 flex items-start lg:gap-8'>
      <Sidebar />
      <Category />
    </div>
  )
}

export default Home
