import React, { FC, useContext, useEffect, useState } from 'react';

import ArrowDownIcon from '../../../../components/TeamRoles/AddRoleForm/ArrowDownIcon/ArrowDownIcon';
import CheckBoxDropDown from '../../../../components/TeamRoles/AddRoleForm/CheckBoxDropDown/CheckBoxDropDown';
import LocationIcon from '../../../../components/TeamRoles/AddRoleForm/LocationIcon/LocationIcon';
import { OptionsContext } from '../../../../Contexts/OptionsContext/OptionsContext';
import { teamRole } from '../../Controller';

interface LocationProps {
    setCurrentRole: (role: teamRole) => void;
    currentRole: teamRole;
    initialLocations?: string[];
}

const Location: FC<LocationProps> = ({
    setCurrentRole,
    currentRole,
    initialLocations
}) => {
    const locations = useContext(OptionsContext).options.locations;
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
        <div className="req-skills-div flex h-fit w-[555px] flex-none flex-grow-0 flex-col items-start gap-[8px] p-0">
            <p className="title order-none mb-[10px] flex h-6 w-fit flex-none flex-grow-0 items-center text-base font-medium not-italic leading-6 text-gray-900">
                Location Preferences (Select any 3)
            </p>
            <div className="comp-skills box-border flex h-12 w-[555px] flex-none flex-grow-0 flex-row  items-start gap-[10px] self-stretch rounded-[12px] border-[1px] border-solid border-[#CECECE] bg-white  py-[12px] pr-[12px] pl-[16px]">
                <LocationIcon />
                <div className="skill order-1 flex h-6 w-[456px] flex-none flex-grow flex-col items-start justify-between gap-[11px] self-stretch p-0">
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
                <div className="selected-skills order-1 flex h-10 w-48 flex-none flex-grow-0 flex-row items-start gap-[8px] p-0">
                    {chosenLocations.map(skill => {
                        return (
                            <div
                                className="order-none flex h-10 w-fit flex-none flex-grow-0 flex-row items-center gap-[10px] rounded-[12px] bg-[#665fef33] py-[8px] px-[12px] text-center"
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
