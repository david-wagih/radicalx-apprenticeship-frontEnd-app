import { FC } from 'react';
import { Link } from 'react-router-dom';

const BackIcon: FC = () => {
    return (
        <Link to={'/homepage'}>
            <div className="back-icon-div rou order-none flex h-20 w-[300px] flex-none flex-grow-0 flex-row items-center self-stretch rounded-l-[30px] bg-white p-6">
                <button className="back-button">
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
                </button>
                <div
                    className="text
                order-1 flex h-6 w-10 flex-none flex-grow-0 items-center font-sans text-lg font-normal not-italic leading-6 tracking-wider text-gray-900
                "
                >
                    Back
                </div>
            </div>
        </Link>
    );
};

export default BackIcon;
