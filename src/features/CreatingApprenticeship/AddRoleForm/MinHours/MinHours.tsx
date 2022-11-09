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
        <div className="req-skills-div flex h-fit w-[555px] flex-none flex-grow-0 flex-col items-start gap-[8px] p-0">
            <p className="title order-none mb-[10px] flex h-6 w-fit flex-none flex-grow-0 items-center text-base font-medium not-italic leading-6 text-gray-900">
                Minimum Hours Per Week
            </p>
            <div className="hours box-border flex h-12 w-[555px] flex-row items-start  gap-[10px] rounded-[12px] border-[1px] border-solid border-[#CECECE] bg-white  py-[12px] pr-[12px] pl-[16px]">
                <HoursIcon />
                <input
                    type="number"
                    value={hours}
                    placeholder="No. of hours"
                    className="role decoration-none order-1 flex h-6 w-[456px] flex-none flex-grow flex-col items-start justify-between gap-[11px] self-stretch p-0 outline-none"
                    onChange={e => {
                        setHours(e.target.value);
                    }}
                />
            </div>
        </div>
    );
};

export default MinHours;
