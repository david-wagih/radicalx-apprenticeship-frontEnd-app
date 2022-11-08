import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateButton: FC = () => {
    const navigate = useNavigate();
    return (
        <button
            className="publish-apprenticeship-button flex flex-row justify-end items-center p-6 h-20 flex-none order-2 self-stretch flex-grow-0 w-[300px] rounded-r-[30px]"
            onClick={() => navigate('/creating_apprenticeship')}
        >
            <svg
                width="254"
                height="44"
                viewBox="0 0 254 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect width="254" height="44" rx="12" fill="#793EF5" />
                <path
                    d="M28.4917 22H29.3333"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M22.6667 22H25.8417"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M26 25.3334V18.6667"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M17.6667 22.8667V24.5001C17.6667 28.6667 19.3333 30.3334 23.5 30.3334H28.5C32.6667 30.3334 34.3333 28.6667 34.3333 24.5001V19.5001C34.3333 15.3334 32.6667 13.6667 28.5 13.6667H23.5C19.3333 13.6667 17.6667 15.3334 17.6667 19.5001"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <text x="40" y="28" fill="#FFFFFF">
                    Create New Apprenticeship
                </text>
            </svg>
        </button>
    );
};

export default CreateButton;
