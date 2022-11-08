import { FC } from 'react';

import { State } from '../../features/CreatingApprenticeship/Controller';

import BackIcon from './BackIcon/BackIcon';
import PublishButton from './PublishButton/PublishButton';
import Title from './Title/Title';

interface HeaderProps {
    readyToPublish: boolean;
    formData: State;
    id?: string;
}
const Header: FC<HeaderProps> = ({ readyToPublish, formData, id }) => {
    return (
        <div
            className="header 
        flex flex-row items-start p-0 absolute h-20 left-6 top-5  max-w-[1466px]
        "
        >
            <BackIcon />
            <Title />
            <PublishButton
                readyToPublish={readyToPublish}
                formData={formData}
                id={id}
            />
        </div>
    );
};

export default Header;
