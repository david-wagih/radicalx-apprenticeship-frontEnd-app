import { FC } from 'react';

import CreateButton from '../../../components/CreateButton/CreateButton';
import PublishButton from '../../../components/PublishButton/PublishButton';

import BackIcon from '../../../components/BackIcon/BackIcon';
import Title from '../../../components/Title/Title';

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
            <PublishButton color="" />
        </div>
    );
};

export default Header;
