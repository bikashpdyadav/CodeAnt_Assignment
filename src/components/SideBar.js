import React, { useState } from 'react';
import Repo from '../images/Repo.png';
import Review from '../images/Review.png';
import Security from '../images/Security.png';
import Use from '../images/Use.png';
import Setting from '../images/Setting.png';
import CODEANT_LOGO from '../images/logo.png';
import DOWN from '../images/chevron-down.png'

function SideBar({ setActiveTab }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('UtkarshDhairyaPanwar');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };
    return (
        <div className='flex flex-col p-4'>
            <div>
                <header>
                    <div className="flex flex-wrap items-center gap-3 md:gap-4">
                        <img
                            src={CODEANT_LOGO}
                            alt="logo"
                        />
                        <h1 className="text-2xl font-semibold leading-6">
                            CodeAnt AI
                        </h1>
                    </div>
                    <div className="relative border border-[#D5D7DA] rounded-md my-4">
                        <div
                            className="flex items-center justify-between px-4 py-2 cursor-pointer"
                            onClick={toggleDropdown}
                        >
                            <span className='text-base font-normal text-[#181D27]'>{selectedOption}</span>
                            <img src={DOWN} alt="down-arrow" />
                        </div>

                        {isOpen && (
                            <div className="absolute mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-full">
                                <ul>
                                    <li
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleSelect('Option 1')}
                                    >
                                        Option 1
                                    </li>
                                    <li
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleSelect('Option 2')}
                                    >
                                        Option 2
                                    </li>
                                    <li
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleSelect('Option 3')}
                                    >
                                        Option 3
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </header>
                <nav
                    className='flex flex-col items-center gap-4 p-4'
                >
                    <div className='bg-blue-400 rounded-lg'>
                    <img src={Repo} alt="repo" className='cursor-pointer px-4 py-2' onClick={() => setActiveTab("repo")} />
                    </div>
                    <img src={Review} alt="review" className='cursor-pointer' onClick={() => setActiveTab("review")} />
                    <img src={Security} alt="security" className='cursor-pointer' onClick={() => setActiveTab("security")} />
                    <img src={Use} alt="howToUse" className='cursor-pointer' onClick={() => setActiveTab("use")} />
                    <img src={Setting} alt="setting" className='cursor-pointer' onClick={() => setActiveTab("setting")} />
                </nav>
            </div>
            <footer></footer>
        </div>

    );
}

export default SideBar;