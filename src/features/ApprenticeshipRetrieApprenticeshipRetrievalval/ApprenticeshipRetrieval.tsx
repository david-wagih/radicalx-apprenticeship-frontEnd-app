import React from 'react';
import DashBoard from './Dashboard/Dashboard';
import Apprenticeships from './Apprenticeships/Apprenticeships';
import Internships from './Internships/Internships';
import Jobs from './Jobs/Jobs';
import Settings from './Settings/Settings';
const NavBar = () => {
    return (
        <div className="overflow-y-auto py-10 px-7 ml-2 mt-2 mb-2 bg-white w-[237px] h-[950px] shadow-xl rounded-3xl font-sans">
           <svg
        width="161"
        height="32"
        viewBox="0 0 161 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="w-40 h-8 flex-none order-none flex-grow-0"
    >
        <rect x="0.5" width="160" height="32" fill="url(#pattern0)" />
        <defs>
            <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
            >
                <use
                    xlinkHref="#image0_149_5448"
                    transform="scale(0.00416667 0.0208333)"
                />
            </pattern>
            <image
                id="image0_149_5448"
                width="240"
                height="48"
                xlinkHref="data:image/png;base64,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"
            />
        </defs>
    </svg>
            <ul className="list-none no-underline space-y-4 mt-[30px]">
                <li className="">
                    <a href="/">
                        <DashBoard /> Dashboard
                    </a>
                </li>
                <li>
                    <a href="/" className="main">
                       <Apprenticeships /> Apprenticeships
                    </a>
                </li>
                <li>
                    <a href="/" className="">
                        <Internships/> Internships
                    </a>
                </li>
                <li>
                    <a href="/" className="">
                       <Jobs/> Jobs
                    </a>
                </li>
                <li>
                    <a href="/" className="">
                       <Settings/> Settings
                    </a>
                </li>
            </ul>
        </div>
    );
};
export default NavBar;
