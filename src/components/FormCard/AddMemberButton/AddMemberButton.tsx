import { FC } from 'react';
// interface PublishButtonProps {
// }
const AddMemberButton: FC = () => {
    return (
        <div className="flex h-[28px] w-[151px] translate-x-3/4 -translate-y-10 place-content-center items-center rounded-lg border-2 border-dashed border-rdx-purple py-1	">
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className=""
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8.00016 15.1668C4.04683 15.1668 0.833496 11.9535 0.833496 8.00016C0.833496 4.04683 4.04683 0.833496 8.00016 0.833496C11.9535 0.833496 15.1668 4.04683 15.1668 8.00016C15.1668 11.9535 11.9535 15.1668 8.00016 15.1668ZM8.00016 1.8335C4.60016 1.8335 1.8335 4.60016 1.8335 8.00016C1.8335 11.4002 4.60016 14.1668 8.00016 14.1668C11.4002 14.1668 14.1668 11.4002 14.1668 8.00016C14.1668 4.60016 11.4002 1.8335 8.00016 1.8335Z"
                    fill="#793EF5"
                />
                <path
                    d="M10.6668 8.5H5.3335C5.06016 8.5 4.8335 8.27333 4.8335 8C4.8335 7.72667 5.06016 7.5 5.3335 7.5H10.6668C10.9402 7.5 11.1668 7.72667 11.1668 8C11.1668 8.27333 10.9402 8.5 10.6668 8.5Z"
                    fill="#793EF5"
                />
                <path
                    d="M8 11.1668C7.72667 11.1668 7.5 10.9402 7.5 10.6668V5.3335C7.5 5.06016 7.72667 4.8335 8 4.8335C8.27333 4.8335 8.5 5.06016 8.5 5.3335V10.6668C8.5 10.9402 8.27333 11.1668 8 11.1668Z"
                    fill="#793EF5"
                />
            </svg>

            <button className="relative border-none pl-1  text-xs text-rdx-purple">
                Add Team Member
            </button>
        </div>
    );
};

export default AddMemberButton;
