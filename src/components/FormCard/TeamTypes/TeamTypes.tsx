import { FC, useState } from 'react';

import { action } from '../../../features/CreatingApprenticeship/Controller';

import TeamCard from './TeamCard/TeamCard';
import CustomIcon from './TeamsIcons/CustomIcon';
import DataIcon from './TeamsIcons/DataIcon';
import GrowthIcon from './TeamsIcons/GrowthIcon';
import MarketingIcon from './TeamsIcons/MarketingIcon';
import MobileIcon from './TeamsIcons/MobileIcon';
import PrototypingIcon from './TeamsIcons/PrototypingIcon';
import WebIcon from './TeamsIcons/WebIcon';

interface teamTypesProps {
    dispatch: (action: action) => void;
}
const TeamTypes: FC<teamTypesProps> = ({ dispatch }) => {
    const [currentType, setCurrentType] = useState('');
    const titles = [
        'Web Platforms',
        'Mobile App',
        'Growth',
        'Marketing Website',
        'Prototyping',
        'Data',
        'Custom Team'
    ];
    const icons = [
        <WebIcon />,
        <MobileIcon />,
        <GrowthIcon />,
        <MarketingIcon />,
        <PrototypingIcon />,
        <DataIcon />,
        <CustomIcon />
    ];
    return (
        <div className="team-types flex flex-row items-start p-0 gap-[16px] w-[722px] h-fit flex-wrap ml-[10px]">
            {titles.map((title, index) => (
                <TeamCard
                    icon={icons[index]}
                    title={title}
                    dispatch={dispatch}
                    currentType={currentType}
                    setCurrentType={setCurrentType}
                />
            ))}
        </div>
    );
};

export default TeamTypes;
