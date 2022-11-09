import { Link } from 'react-router-dom';

import Apprenticeships from './Apprenticeships/Apprenticeships';
import DashBoard from './Dashboard/Dashboard';
import Internships from './Internships/Internships';
import Jobs from './Jobs/Jobs';
import Logout from './Logout/Logout';
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
        '/homepage',
        '/homepage',
        '/homepage',
        '/homepage',
        '/homepage'
    ];
    return (
        <div className="ml-2 mt-2 mb-2 h-[950px] w-[237px] overflow-y-auto rounded-3xl bg-white py-10 px-7 font-sans shadow-xl">
            <RadicalLogo />
            <ul className="mt-[40px] flex list-none flex-col gap-4 no-underline">
                {Logos.map((logo, index) => (
                    <li
                        key={index}
                        className="rounded-3xl p-3 hover:bg-[#665fef29]"
                    >
                        <Link
                            to={Href[index]}
                            className="flex-start flex min-w-[180px] flex-row gap-2"
                        >
                            {logo}
                            <p>{Text[index]}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <Logout
                username="Adam Scott"
                photoURL="https://picsum.photos/200/300"
            />
        </div>
    );
};
export default NavBar;
