import React, { FC, useEffect, useState } from 'react';

import ArrowDownIcon from '../../../components/TeamRoles/AddRoleForm/ArrowDownIcon/ArrowDownIcon';
import CheckBoxDropDown from '../../../components/TeamRoles/AddRoleForm/CheckBoxDropDown/CheckBoxDropDown';
import LocationIcon from '../../../components/TeamRoles/AddRoleForm/LocationIcon/LocationIcon';
import { teamRole } from '../../../features/CreatingApprenticeship/Controller';

interface LocationProps {
    locations: string[];
    setCurrentRole: (role: teamRole) => void;
    currentRole: teamRole;
    initialLocations?: string[];
}

const Location: FC<LocationProps> = ({
    locations,
    setCurrentRole,
    currentRole,
    initialLocations
}) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [chosenLocations, setChosenLocations] = useState<string[]>(
        initialLocations || []
    );

    useEffect(() => {
        setCurrentRole({
            ...currentRole,
            locationPreferences: chosenLocations
        });
    }, [chosenLocations.length]);

    return (
        <div className="req-skills-div flex flex-col items-start p-0 h-fit flex-none flex-grow-0 gap-[8px] w-[555px]">
            <p className="title mb-[10px] w-fit h-6 not-italic font-medium text-base leading-6 flex items-center text-gray-900 flex-none order-none flex-grow-0">
                Location Preferences
            </p>
            <div className="comp-skills box-border flex flex-row items-start h-12 bg-white flex-none  self-stretch flex-grow-0 py-[12px] pr-[12px] pl-[16px] gap-[10px] w-[555px] border-[1px]  border-[#CECECE] border-solid rounded-[12px]">
                <LocationIcon />
                <div className="skill flex flex-col justify-between items-start p-0 h-6 flex-none order-1 self-stretch flex-grow gap-[11px] w-[456px]">
                    Select Location
                </div>
                {showDropDown && (
                    <CheckBoxDropDown
                        options={locations}
                        setShowCheckBoxDropDown={setShowDropDown}
                        whichDropDown="compSkills"
                        chosenOptions={chosenLocations}
                        setChosenOptions={setChosenLocations}
                    />
                )}
                <ArrowDownIcon setShowDropDown={setShowDropDown} />
            </div>
            {chosenLocations.length > 0 && (
                <div className="selected-skills flex flex-row items-start p-0 w-48 h-10 flex-none order-1 flex-grow-0 gap-[8px]">
                    {chosenLocations.map(skill => {
                        return (
                            <div
                                className="flex flex-row items-center w-fit h-10 flex-none order-none flex-grow-0 py-[8px] px-[12px] gap-[10px] rounded-[12px] bg-[#665fef33] text-center"
                                key={skill + Math.random()}
                            >
                                {skill}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Location;
