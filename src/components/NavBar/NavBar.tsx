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
        <div className="overflow-y-auto py-10 px-7 ml-2 mt-2 mb-2 bg-white w-[237px] h-[950px] shadow-xl rounded-3xl font-sans">
            <RadicalLogo />
            <ul className="list-none no-underline mt-[40px] flex flex-col gap-4">
                {Logos.map((logo, index) => (
                    <li
                        key={index}
                        className="hover:bg-[#665fef29] rounded-3xl p-3"
                    >
                        <Link
                            to={Href[index]}
                            className="min-w-[180px] flex flex-row flex-start gap-2"
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
