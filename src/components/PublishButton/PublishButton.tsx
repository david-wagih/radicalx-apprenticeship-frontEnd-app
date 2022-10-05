import { FC } from 'react';
interface PublishButtonProps {
    readyToPublish: boolean;
}
const PublishButton: FC<PublishButtonProps> = ({ readyToPublish }) => {
    const fillColor = readyToPublish ? '#793EF5' : '#E2E6EB';
    const strokeColor = readyToPublish ? '#FFFFFF' : '#828282';
    return (
        <div
            className="publish-apprenticeship-button
    flex flex-row justify-end items-center p-6 h-20 bg-white flex-none order-2 self-stretch flex-grow-0
    w-[300px] rounded-r-[30px]
    "
        >
            <button>
                <svg
                    width="225"
                    height="44"
                    viewBox="0 0 225 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width="225" height="44" rx="12" fill={fillColor} />
                    <path
                        d="M28.4917 22H29.3334"
                        stroke={strokeColor}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M22.6666 22H25.8416"
                        stroke={strokeColor}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M26 25.3334V18.6667"
                        stroke={strokeColor}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M17.6666 22.8667V24.5001C17.6666 28.6667 19.3333 30.3334 23.5 30.3334H28.5C32.6666 30.3334 34.3333 28.6667 34.3333 24.5001V19.5001C34.3333 15.3334 32.6666 13.6667 28.5 13.6667H23.5C19.3333 13.6667 17.6666 15.3334 17.6666 19.5001"
                        stroke={strokeColor}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <text x="40" y="28" fill={strokeColor}>
                        Publish Apprenticeship
                    </text>
                </svg>
            </button>
        </div>
    );
};

export default PublishButton;
