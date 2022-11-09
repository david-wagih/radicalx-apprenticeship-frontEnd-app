import React, { FC, useContext, useEffect, useState } from 'react';

import ArrowDownIcon from '../../../../components/TeamRoles/AddRoleForm/ArrowDownIcon/ArrowDownIcon';
import CheckBoxDropDown from '../../../../components/TeamRoles/AddRoleForm/CheckBoxDropDown/CheckBoxDropDown';
import ReqSkillsIcon from '../../../../components/TeamRoles/AddRoleForm/ReqSkillsIcon/ReqSkillsIcon';
import { OptionsContext } from '../../../../Contexts/OptionsContext/OptionsContext';
import { teamRole } from '../../Controller';

interface RequiredSkillsProps {
    setCurrentRole: (role: teamRole) => void;
    currentRole: teamRole;
    initialRequiredSkills?: string[];
}

const RequiredSkills: FC<RequiredSkillsProps> = ({
    setCurrentRole,
    currentRole,
    initialRequiredSkills
}) => {
    const skills = useContext(OptionsContext).options.requiredSkillsOptions;

    const [showDropDown, setShowDropDown] = useState(false);
    const [chosenRequiredSkills, setChosenRequiredSkills] = useState<string[]>(
        initialRequiredSkills || []
    );
    useEffect(() => {
        setCurrentRole({
            ...currentRole,
            requiredSkills: chosenRequiredSkills
        });
    }, [chosenRequiredSkills.length]);

    return (
        <div className="req-skills-div flex h-fit w-[555px] flex-none flex-grow-0 flex-col items-start gap-[8px] p-0">
            <p className="title order-none mb-[10px] flex h-6 w-fit flex-none flex-grow-0 items-center text-base font-medium not-italic leading-6 text-gray-900">
                RequiredSkills Preferences (Select any 3)
            </p>
            <div className="comp-skills box-border flex h-12 w-[555px] flex-none flex-grow-0 flex-row  items-start gap-[10px] self-stretch rounded-[12px] border-[1px] border-solid border-[#CECECE] bg-white  py-[12px] pr-[12px] pl-[16px]">
                <ReqSkillsIcon />
                <div className="skill order-1 flex h-6 w-[456px] flex-none flex-grow flex-col items-start justify-between gap-[11px] self-stretch p-0">
                    Select RequiredSkills
                </div>
                {showDropDown && (
                    <CheckBoxDropDown
                        options={skills}
                        setShowCheckBoxDropDown={setShowDropDown}
                        chosenOptions={chosenRequiredSkills}
                        setChosenOptions={setChosenRequiredSkills}
                    />
                )}
                <ArrowDownIcon setShowDropDown={setShowDropDown} />
            </div>
            {chosenRequiredSkills.length > 0 && (
                <div className="selected-skills order-1 flex h-10 w-48 flex-none flex-grow-0 flex-row items-start gap-[8px] p-0">
                    {chosenRequiredSkills.map(skill => {
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

export default RequiredSkills;
