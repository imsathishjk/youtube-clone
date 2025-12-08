import React, { useContext } from 'react'
import { menuLists } from '../../data.jsx';
import channelImg from '../assets/images/vijay (2).jpg';
import AppContext from '../context/AppContext.jsx';

const Sidebar = () => {


  const { sidebar, showSidebar } = useContext(AppContext);


  return (
    <div className={`h-[100vh] overflow-y-scroll no-scroll sticky top-0 max-lg:fixed max-lg:top-3 max-lg:mt-12 transition-all ease-in-out duration-500
    z-10 bg-black max-lg:px-4 ${sidebar ? 'basis-[10%]' : 'basis-[5%]'}
    ${showSidebar ? 'left-0 w-48' : '-left-40'}`}>
      <div className='flex flex-col gap-5'>
        {menuLists.map((menu) => {
          return (
            <div key={menu.id} className='flex items-center gap-5 cursor-pointer '>
              <span className='text-lg text-gray-400'>{menu.icon}</span>
              {sidebar ? <h1 className={`font-semibold max-sm:text-sm`}>{menu.title}</h1> : ''}
            </div>
          )
        })}
        <div className='flex flex-col gap-5'>
          <h1 className={`amx-sm:text-sm  font-semibold text-gray-400 ${sidebar ? 'visible' : 'invisible'}`}>Subscriptions</h1>
          {
            Array(5).fill(5).map((_, i) => {
              return <div key={i} className='flex items-center gap-5 cursor-pointer'>
                <img src={channelImg} alt="channel_profile" className='w-8 h-8 rounded-full' />
                {sidebar ? <h1 className='max-sm:text-sm  font-semibold text-gray-400'>GreatStack</h1> : ''}
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar
