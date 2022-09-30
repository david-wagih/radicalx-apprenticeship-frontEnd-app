import { FC } from 'react';

const BackIcon: FC = () => {
    return (
        <div
            className="back-icon-div
        flex flex-row items-center p-6 h-20 bg-white rou flex-none order-none rounded-l-[30px] self-stretch w-[300px] flex-grow-0
        "
        >
            <div className="icon-text flex flex-row items-center p-0 w-20 h-6 flex-none order-none gap-2 flex-grow-0">
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                >
                    <path
                        d="M11.1652 6.91821L4.0835 13.9999L11.1652 21.0815"
                        stroke="#793EF5"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M14.9568 14H4.0835"
                        stroke="#793EF5"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M23.7182 14H19.6582"
                        stroke="#793EF5"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <div
                    className="text
                w-10 h-6 not-italic font-normal text-lg leading-6 flex items-center text-gray-900 flex-none order-1 font-sans tracking-wider flex-grow-0
                "
                >
                    Back
                </div>
            </div>
        </div>
    );
};

export default BackIcon;
