import { FC, useEffect, useState } from 'react';

import { action } from '../../../features/CreatingApprenticeship/Controller';

import TeamCard from './TeamCard/TeamCard';
import CustomIcon from './TeamsIcons/CustomIcon';
import DataIcon from './TeamsIcons/DataIcon';
import GrowthIcon from './TeamsIcons/GrowthIcon';
import MarketingIcon from './TeamsIcons/MarketingIcon';
import MobileIcon from './TeamsIcons/MobileIcon';
import PrototypingIcon from './TeamsIcons/PrototypingIcon';
import WebIcon from './TeamsIcons/WebIcon';

interface teamTypeProps {
    dispatch: (action: action) => void;
    teamType?: string;
}
const TeamType: FC<teamTypeProps> = ({ dispatch, teamType }) => {
    const [currentType, setCurrentType] = useState('');
    useEffect(() => {
        setCurrentType(teamType || '');
        if (teamType) {
            dispatch({
                type: 'teamType',
                payload: teamType
            });
        }
    }, [teamType]);
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
        <div className="team-types ml-[10px] flex h-fit w-[722px] flex-row flex-wrap items-start gap-[16px] p-0">
            {titles.map((title, index) => (
                <TeamCard
                    key={index + title}
                    myKey={title}
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

export default TeamType;
