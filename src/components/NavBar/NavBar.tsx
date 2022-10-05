import React from 'react';

import Apprenticeships from './Apprenticeships/Apprenticeships';
import DashBoard from './Dashboard/Dashboard';
import Internships from './Internships/Internships';
import Jobs from './Jobs/Jobs';
import RadicalLogo from './RadicalLogo/RadicalLogo';
import Settings from './Settings/Settings';

const NavBar = () => {
    const Logos = [
        <DashBoard />,
        <Apprenticeships />,
        <Internships />,
        <Jobs />,
        <Settings />
    ];
    const Text = [
        'Dashboard',
        'Apprenticeships',
        'Internships',
        'Jobs',
        'Settings'
    ];
    const Href = [
        '/dashboard',
        '/apprenticeships',
        '/internships',
        '/jobs',
        '/settings'
    ];
    return (
        <div className="overflow-y-auto py-10 px-7 ml-2 mt-2 mb-2 bg-white w-[237px] h-[950px] shadow-xl rounded-3xl font-sans">
            <RadicalLogo />
            <ul className="list-none no-underline space-y-4 mt-[30px] ">
                {Logos.map((logo, index) => (
                    <li
                        key={index}
                        className="hover:bg-[#665fef29]  mr-[0px] rounded-3xl"
                    >
                        <a
                            href={Href[index]}
                            className="min-w-[180px] flex flex-row flex-start gap-2"
                        >
                            {logo}
                            <p>{Text[index]}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default NavBar;
