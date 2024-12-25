import React from 'react';
import Sidebar from './SigninSidebar';
import SigninForm from './SigninForm';

const Signin = () => {
  return (
    <div className="min-h-screen">
      <div className="hidden lg:flex w-full min-h-screen">
        <div className="w-1/2">
          <Sidebar />
        </div>
        <div className="w-1/2">
          <SigninForm />
        </div>
      </div>

      <div className="block lg:hidden">
        <SigninForm />
      </div>
    </div>
  )
}

export default Signin