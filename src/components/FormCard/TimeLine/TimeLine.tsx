import { FC, useEffect, useState } from 'react';

import { action } from '../../../features/CreatingApprenticeship/Controller';
type Date = { startDate: string; endDate: string };
interface TimeLineInterface {
    dispatch: (action: action) => void;
}
const TimeLine: FC<TimeLineInterface> = ({ dispatch }) => {
    const [timeLine, SetTimeLine] = useState<Date>({
        startDate: 'Start Date',
        endDate: 'End Date'
    });
    useEffect(() => {
        if (
            timeLine.startDate !== 'Start Date' &&
            timeLine.endDate !== 'End Date'
        ) {
            dispatch({
                type: 'timeline',
                payload: timeLine
            });
        }
    }, [timeLine]);

    return (
        <div className="flex flex-row items-start p-0 h-12 w-[722px] gap-4 ml-[10px]">
            <div className="start-date border-[#665FEF]  box-border flex flex-row items-start h-12 bg-white flex-none order-none flex-grow p-[12px] w-[353px] border-2 rounded-lg ">
                <div className=" text-wrapper flex flex-col justify-between items-start p-0 h-6 flex-none order-none self-stretch flex-grow w-[291px] gap-[11px]">
                    <p className="w-fit h-6 not-italic font-medium text-base leading-6 flex items-center text-gray-900 flex-none order-none flex-grow-0 opacity-50">
                        {timeLine.startDate}
                    </p>
                </div>
                <input
                    type="date"
                    value={timeLine.startDate}
                    onChange={e => {
                        SetTimeLine({
                            ...timeLine,
                            startDate: e.target.value
                        });
                    }}
                />
            </div>
            <div className="start-date border-[#665FEF]  box-border flex flex-row items-start h-12 bg-white flex-none order-none flex-grow p-[12px] w-[353px] border-2 rounded-lg ">
                <div className=" text-wrapper flex flex-col justify-between items-start p-0 h-6 flex-none order-none self-stretch flex-grow w-[291px] gap-[11px]">
                    <p className="w-fit h-6 not-italic font-medium text-base leading-6 flex items-center text-gray-900 flex-none order-none flex-grow-0 opacity-50">
                        {timeLine.endDate}
                    </p>
                </div>
                <input
                    type="date"
                    value={timeLine.endDate}
                    onChange={e => {
                        SetTimeLine({
                            ...timeLine,
                            endDate: e.target.value
                        });
                    }}
                />
            </div>
        </div>
    );
};

export default TimeLine;
