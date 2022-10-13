import { FC, useEffect, useState } from 'react';

import HoursIcon from '../../../../components/TeamRoles/AddRoleForm/HoursIcon/HoursIcon';
import { teamRole } from '../../Controller';

interface MinHoursProps {
    initialValue?: string;
    setCurrentRole: (currentRole: teamRole) => void;
    currentRole: teamRole;
}

const MinHours: FC<MinHoursProps> = ({
    initialValue,
    setCurrentRole,
    currentRole
}) => {
    const [hours, setHours] = useState(initialValue || '0');
    useEffect(() => {
        setCurrentRole({ ...currentRole, minHours: hours });
    }, [hours]);
    return (
        <div className="req-skills-div flex flex-col items-start p-0 h-fit flex-none flex-grow-0 gap-[8px] w-[555px]">
            <p className="title mb-[10px] w-fit h-6 not-italic font-medium text-base leading-6 flex items-center text-gray-900 flex-none order-none flex-grow-0">
                Minimum Hours Per Week
            </p>
            <div className="hours box-border flex flex-row items-start h-12 bg-white  py-[12px] pr-[12px] pl-[16px] gap-[10px] w-[555px] border-[1px]  border-[#CECECE] border-solid rounded-[12px]">
                <HoursIcon />
                <input
                    type="number"
                    value={hours}
                    placeholder="No. of hours"
                    className="role flex flex-col justify-between items-start p-0 h-6 flex-none order-1 self-stretch flex-grow gap-[11px] w-[456px] decoration-none outline-none"
                    onChange={e => {
                        setHours(e.target.value);
                    }}
                />
            </div>
        </div>
    );
};

export default MinHours;
