import { FC } from 'react';

interface CircleProps {
    checked: boolean;
    name: string;
}

const Circle: FC<CircleProps> = ({ checked, name }) => {
    return checked ? (
        <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${name}-circle-svg`}
            key={`${name}-circle-svg`}
        >
            <path
                d="M4.5 6C3.25 7.67 2.5 9.75 2.5 12C2.5 17.52 6.98 22 12.5 22C18.02 22 22.5 17.52 22.5 12C22.5 6.48 18.02 2 12.5 2C11.07 2 9.7 2.3 8.47 2.85"
                stroke="#793EF5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M15.5 10.38L16.62 9.25"
                stroke="#793EF5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M8.37988 12L11.1199 14.75L13.6699 12.21"
                stroke="#793EF5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    ) : (
        <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${name}-circle-svg`}
            key={`${name}-circle-svg`}
        >
            <path
                d="M4.5 6C3.25 7.67 2.5 9.75 2.5 12C2.5 17.52 6.98 22 12.5 22C18.02 22 22.5 17.52 22.5 12C22.5 6.48 18.02 2 12.5 2C11.07 2 9.7 2.3 8.47 2.85"
                stroke="#1E1E1E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export default Circle;
