import { FC } from 'react';

import BackIcon from './BackIcon/BackIcon';
import PublishApprenticeshipButton from './PublishApprenticeshipButton/PublishApprenticeshipButton';
import Title from './Title/Title';

BackIcon;
const Header: FC = () => {
    return (
        <div
            className="header 
        flex flex-row items-start p-0 absolute h-20 left-6 top-5  max-w-[1466px]
        "
        >
            <BackIcon />
            <Title />
            <PublishApprenticeshipButton />
        </div>
    );
};

export default Header;
