import React, { FC, useState } from 'react';

import ArrowDownIcon from '../../../components/AddRoleForm/ArrowDownIcon/ArrowDownIcon';
import ComplimentarySkillsIcon from '../../../components/AddRoleForm/ComplimentarySkillsIcon/ComplimentarySkillsIcon';
import CheckBoxDropDown from '../../../components/AddRoleForm/CheckBoxDropDown/CheckBoxDropDown';
interface ComplimentarySkillsProps {
    compSkills: string[];
}

const ComplimentarySkills: FC<ComplimentarySkillsProps> = ({ compSkills }) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [chosenSkills, setChosenSkills] = useState<string[]>([]);
    return (
        <div className="req-skills-div flex flex-col items-start p-0 h-fit flex-none flex-grow-0 gap-[8px] w-[555px]">
            <p className="title mb-[10px] w-fit h-6 not-italic font-medium text-base leading-6 flex items-center text-gray-900 flex-none order-none flex-grow-0">
                Complimentary Skills (Select any 3)
            </p>
            <div className="comp-skills box-border flex flex-row items-start h-12 bg-white flex-none  self-stretch flex-grow-0 py-[12px] pr-[12px] pl-[16px] gap-[10px] w-[555px] border-[1px]  border-[#CECECE] border-solid rounded-[12px]">
                <ComplimentarySkillsIcon />
                <div className="skill flex flex-col justify-between items-start p-0 h-6 flex-none order-1 self-stretch flex-grow gap-[11px] w-[456px]">
                    Select Skills
                </div>
                {showDropDown && (
                    <CheckBoxDropDown
                        options={compSkills}
                        setShowCheckBoxDropDown={setShowDropDown}
                        whichDropDown="compSkills"
                        chosenOptions={chosenSkills}
                        setChosenOptions={setChosenSkills}
                    />
                )}
                <ArrowDownIcon setShowDropDown={setShowDropDown} />
            </div>
            {chosenSkills.length > 0 && (
                <div className="selected-skills flex flex-row items-start p-0 w-48 h-10 flex-none order-1 flex-grow-0 gap-[8px]">
                    {chosenSkills.map(skill => {
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

export default ComplimentarySkills;
