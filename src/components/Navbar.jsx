import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiNotification3Line } from "react-icons/ri";
import { TooltipComponent } from '@syncfusion/ej2-react-popups'; 

import avatar from '../data/avatar.jpg';
import { Notification, userProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type="button" onClick={customFunc} style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
      <span style={{ background: dotColor }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'>
        {icon}
      </span>
    </button>
  </TooltipComponent>
)
const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, handleClick } = useStateContext();

  return (
    <div className="flex justify-between items-center w-full px-4 md:px-6 py-2 bg-white">
      <NavButton title="Menu" customFunc={() => setActiveMenu(!activeMenu)} color="blue" icon={<AiOutlineMenu />} />
      
      <div className="flex items-center gap-4"> 
        <NavButton title="Notifications" dotColor="#03C9D7" customFunc={() => handleClick('notification')} color="blue" icon={<RiNotification3Line />} />
        <TooltipComponent content="Profile" position='BottomCenter'>
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}>
              <img className='rounded-full w-8 h-8' src={avatar} alt="Avatar" />
              <span className='text-gray-400  ml-1 text-sm'>Hi, </span> 
              <span className='text-gray-400 font-bold ml-l text-sm'> User</span>
              <MdKeyboardArrowDown className='text-gray-400 text-sm'/>
          </div>
        </TooltipComponent>
      </div>

      {isClicked.notification && <Notification />}
      {isClicked.userProfile && <UserProfile />}
    </div>
  );
}

export default Navbar;
