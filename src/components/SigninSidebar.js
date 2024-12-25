import React from 'react';
import BG_LOGO from "../images/Subtract.png";
import SidebarAbout from './SidebarAbout';

const SigninSidebar = () => {
  return (
    <div className='w-full h-screen relative'>
      <img
        src={BG_LOGO}
        alt='background'
        className='absolute bottom-0 left-0 w-auto max-w-full max-h-screen'
      />
      <div className='absolute inset-0 flex items-center justify-center'>
        <SidebarAbout />
      </div>
    </div>
  )
}

export default SigninSidebar