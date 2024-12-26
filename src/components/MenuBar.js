import React, { useState } from 'react';
import Repo from '../images/Repo.png';
import Review from '../images/Review.png';
import Security from '../images/Security.png';
import Use from '../images/Use.png';
import Setting from '../images/Setting.png';
import CODEANT_LOGO from '../images/logo.png';
import MENU from '../images/bars.png';

function MenuBar({ setActiveTab }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <div className="flex justify-between items-center p-4">
                <div className='flex items-center justify-center gap-2'>
                    <img src={CODEANT_LOGO} alt="logo" />
                    <p className='text-[#181D27] text-2xl font-normal leading-6'>CodeAnt AI</p>
                </div>
                <button onClick={toggleMenu}>
                    <img src={MENU} alt="menu" />
                </button>
            </div>

            {isOpen && (
                <div className="absolute w-full p-4 bg-white z-50 flex flex-col items-start justify-center">
                    <div>
                        <div className='bg-blue-400 rounded-lg'>
                            <img src={Repo} alt="repo" className='cursor-pointer px-4 py-2' onClick={() => {
                                setActiveTab("repo");
                                toggleMenu();
                            }} />
                        </div>
                        <img src={Review} alt="review" className='cursor-pointer mb-4' onClick={() => {
                            setActiveTab("review");
                            toggleMenu();
                        }} />
                        <img src={Security} alt="security" className='cursor-pointer mb-4' onClick={() => {
                            setActiveTab("security");
                            toggleMenu();
                        }} />
                        <img src={Use} alt="howToUse" className='cursor-pointer mb-4' onClick={() => {
                            setActiveTab("use");
                            toggleMenu();
                        }} />
                        <img src={Setting} alt="setting" className='cursor-pointer mb-4' onClick={() => {
                            setActiveTab("setting");
                            toggleMenu();
                        }} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default MenuBar;