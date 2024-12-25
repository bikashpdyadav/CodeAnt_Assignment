import React from 'react';
import ELLIPSE from '../images/Ellipse 1.png';
import CHART from '../images/Vector.png';
import CODEANT_LOGO from '../images/logo.png';
import ARROW from '../images/small right 2.png';

const SidebarAbout = () => {
    const stats = [
        { value: '30+', label: 'Language Support' },
        { value: '10K+', label: 'Developers' },
        { value: '100K+', label: 'Hours Saved' }
    ];

    return (
        <div className="w-full md:w-3/4 flex flex-col gap-6 md:gap-8 justify-center">
            <div className="flex justify-start w-full">
                <div className="bg-white shadow-lg rounded-3xl w-full md:w-11/12 px-6 py-8">
                    <div className="flex flex-wrap items-center gap-3 md:gap-4">
                        <img
                            src={CODEANT_LOGO}
                            alt="logo"
                            className="w-10 h-10 md:w-16 md:h-16"
                        />
                        <h1 className="text-base md:text-lg font-bold">
                            AI to Detect & Autofix Bad Code
                        </h1>
                    </div>
                    <hr className="border border-[#E6E8F0] my-4" />
                    <div className="flex flex-wrap items-center justify-evenly pt-4 gap-4">
                        {stats.map(({ value, label }) => (
                            <div className="flex flex-col items-center" key={label}>
                                <h1 className="font-bold text-base md:text-lg">{value}</h1>
                                <p className="font-normal text-xs md:text-sm">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-end w-full">
                <div className="flex bg-white shadow-lg p-4 rounded-3xl w-full md:w-1/2 -mt-12">
                    <div>
                        <div className="relative">
                            <img
                                src={CHART}
                                alt="pie"
                                className="absolute top-1/2 left-[30%] transform -translate-x-1/2 -translate-y-1/2"
                            />
                            <img
                                src={ELLIPSE}
                                alt="circle"
                                className="p-2"
                            />
                        </div>
                        <div className="text-left mx-4 mt-4">
                            <p className="font-bold text-xs md:text-sm">Issues Fixed</p>
                            <p className="font-bold text-2xl md:text-3xl">500k+</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <img
                                src={ARROW}
                                alt="arrow"
                                className="w-4 h-4 md:w-6 md:h-6"
                            />
                            <p className="font-bold text-xs md:text-sm">14%</p>
                        </div>
                        <p className="font-normal text-[10px] md:text-xs">This Week</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarAbout;
