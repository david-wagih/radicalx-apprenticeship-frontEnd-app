import { FC } from 'react';

interface RoleDescriptionProps {
    initialDescription: string;
}

const RoleDescription: FC<RoleDescriptionProps> = ({ initialDescription }) => {
    return (
        <div className="role-description flex flex-col items-start p-0 h-56 flex-none order-none flex-grow-0gap-[12px] w-[555px]">
            <p className="title mb-[10px] w-fit h-6 not-italic font-medium text-base leading-6 flex items-center text-gray-900 flex-none order-none flex-grow-0">
                Role Description
            </p>
            <textarea
                defaultValue={initialDescription}
                className="description flex flex-row items-start h-48 bg-white flex-none order-1 flex-grow-0 w-[555px] gap-[10px] py-[12px] pr-[12px] pl-[16px] border-[1px]  border-[#793EF5] border-solid rounded-[12px] resize-none"
            />
        </div>
    );
};

export default RoleDescription;
