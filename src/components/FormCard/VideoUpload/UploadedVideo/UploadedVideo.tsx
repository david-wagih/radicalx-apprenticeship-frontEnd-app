import { FC } from 'react';
interface UploadedVideoProps {
    fileName: string;
    dispatch: (action: { type: string; payload: File | null }) => void;
}

const UploadedVideo: FC<UploadedVideoProps> = ({ fileName, dispatch }) => {
    return (
        <svg
            width="203"
            height="40"
            viewBox="0 0 203 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-[10px]"
        >
            <rect width="203" height="40" rx="12" fill="#EDEAFF" />
            <text x="5" y="25" fill="#793EF5">
                {fileName}
            </text>
            <svg
                width="20"
                height="20"
                x="170"
                y="9"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hover:cursor-pointer"
                onClick={() => {
                    dispatch({
                        type: 'CompanyVideo',
                        payload: null
                    });
                }}
            >
                <path
                    d="M5.83301 14.1668L14.1663 5.8335"
                    stroke="#793EF5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M14.1663 14.1668L5.83301 5.8335"
                    stroke="#793EF5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </svg>
    );
};

export default UploadedVideo;
