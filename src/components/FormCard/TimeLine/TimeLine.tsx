import { FC, useEffect, useState } from 'react';

import {
    action,
    timeLine
} from '../../../features/CreatingApprenticeship/Controller';
interface TimeLineInterface {
    dispatch: (action: action) => void;
    alreadyExcitingTimeline?: timeLine | null;
}
const TimeLine: FC<TimeLineInterface> = ({
    dispatch,
    alreadyExcitingTimeline
}) => {
    const [timeLine, SetTimeLine] = useState<timeLine>({
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
    useEffect(() => {
        SetTimeLine(
            alreadyExcitingTimeline || {
                startDate: 'Start Date',
                endDate: 'End Date'
            }
        );
    }, [alreadyExcitingTimeline]);
    return (
        <div className="ml-[10px] flex h-12 w-[722px] flex-row items-start gap-4 p-0">
            <div className="start-date order-none  box-border flex h-12 w-[353px] flex-none flex-grow flex-row items-start rounded-lg border-2 border-[#665FEF] bg-white p-[12px] ">
                <div className=" text-wrapper order-none flex h-6 w-[291px] flex-none flex-grow flex-col items-start justify-between gap-[11px] self-stretch p-0">
                    <p className="order-none flex h-6 w-fit flex-none flex-grow-0 items-center text-base font-medium not-italic leading-6 text-gray-900 opacity-50">
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
            <div className="start-date order-none  box-border flex h-12 w-[353px] flex-none flex-grow flex-row items-start rounded-lg border-2 border-[#665FEF] bg-white p-[12px] ">
                <div className=" text-wrapper order-none flex h-6 w-[291px] flex-none flex-grow flex-col items-start justify-between gap-[11px] self-stretch p-0">
                    <p className="order-none flex h-6 w-fit flex-none flex-grow-0 items-center text-base font-medium not-italic leading-6 text-gray-900 opacity-50">
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
