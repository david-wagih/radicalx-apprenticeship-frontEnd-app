import { FC } from 'react';

interface ArrowDownIconProps {
    setShowDropDown: (showDropDown: boolean) => void;
}

const ArrowDownIcon: FC<ArrowDownIconProps> = ({ setShowDropDown }) => {
    return (
        <button
            className="arrow-down order-2 h-6 w-6 flex-none flex-grow-0 opacity-50"
            onClick={() => {
                setShowDropDown(true);
            }}
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g opacity="0.5">
                    <path
                        d="M17.9197 8.17993H11.6897H6.07975C5.11975 8.17993 4.63975 9.33993 5.31975 10.0199L10.4997 15.1999C11.3297 16.0299 12.6797 16.0299 13.5097 15.1999L15.4797 13.2299L18.6897 10.0199C19.3597 9.33993 18.8797 8.17993 17.9197 8.17993Z"
                        fill="#292D32"
                    />
                </g>
            </svg>
        </button>
    );
};

export default ArrowDownIcon;
