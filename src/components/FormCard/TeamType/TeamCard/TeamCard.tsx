import { FC, useEffect, useState } from 'react';

import { action } from '../../../../features/CreatingApprenticeship/Controller';

interface TeamCardProps {
    icon: JSX.Element;
    title: string;
    currentType: string;
    setCurrentType: (type: string) => void;
    dispatch: (action: action) => void;
    myKey: string;
}

const TeamCard: FC<TeamCardProps> = ({
    icon,
    title,
    currentType,
    setCurrentType,
    dispatch,
    myKey
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
            className={`team-card ${bgColor} box-border flex h-[91px] w-[230px] flex-none flex-row items-start gap-[10px] rounded-[20px] border-[1px]  border-solid py-[16px]  pr-[12px] pl-[16px]`}
            key={myKey}
        >
            <div className="icon-and-text order-0 flex h-[59px] w-[168px] flex-none flex-grow flex-col items-start justify-between gap-[11px] self-stretch p-[0px] ">
                {icon}
                <p className="text color-[#1E1E1E] order-1 flex h-[24px] w-fit flex-none items-center font-medium">
                    {title}
                </p>
            </div>
            <input
                type="checkbox"
                name="choose-team"
                id="choose-team"
                className=" order-1 h-[24px] w-[24px] flex-none grow-0 opacity-20 "
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
