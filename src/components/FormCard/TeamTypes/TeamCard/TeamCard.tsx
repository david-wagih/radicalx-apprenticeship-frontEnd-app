import { FC, useEffect, useState } from 'react';

import { action } from '../../../../features/CreatingApprenticeship/Controller';

interface TeamCardProps {
    icon: JSX.Element;
    title: string;
    currentType: string;
    setCurrentType: (type: string) => void;
    dispatch: (action: action) => void;
}

const TeamCard: FC<TeamCardProps> = ({
    icon,
    title,
    currentType,
    setCurrentType,
    dispatch
}) => {
    const [bgColor, setBgColor] = useState('bg-[#ffffff] border-[#CFD3D9]');
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        if (currentType === title) {
            setChecked(true);
        } else {
            setChecked(false);
        }
    }, [currentType]);
    useEffect(() => {
        if (checked) {
            setBgColor('bg-[#665fef29]');
        } else {
            setBgColor('bg-[#FFFFFF]');
        }
    }, [checked]);

    return (
        <div
            className={`team-card ${bgColor} box-border flex flex-row items-start py-[16px] pr-[12px] pl-[16px] gap-[10px] w-[230px] h-[91px]  border-[1px] border-solid  rounded-[20px] flex-none`}
        >
            <div className="icon-and-text flex flex-col items-start p-[0px] gap-[11px] w-[168px] h-[59px] flex-none order-0 self-stretch flex-grow justify-between ">
                {icon}
                <p className="text w-fit h-[24px] font-medium flex items-center color-[#1E1E1E] flex-none order-1">
                    {title}
                </p>
            </div>
            <input
                type="checkbox"
                name="choose-team"
                id="choose-team"
                className=" w-[24px] h-[24px] opacity-20 flex-none order-1 grow-0 "
                checked={checked}
                onChange={e => {
                    setCurrentType(title);
                    const target = e.target as HTMLInputElement;
                    if (target.checked) {
                        dispatch({
                            type: 'teamType',
                            payload: title
                        });
                    }
                }}
            />
        </div>
    );
};

export default TeamCard;
