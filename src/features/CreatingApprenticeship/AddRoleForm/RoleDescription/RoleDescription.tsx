import { FC } from 'react';

import { teamRole } from '../../Controller';

interface RoleDescriptionProps {
    initialDescription?: string;
    setCurrentRole: (role: teamRole) => void;
    currentRole: teamRole;
}

const RoleDescription: FC<RoleDescriptionProps> = ({
    initialDescription,
    setCurrentRole,
    currentRole
}) => {
    return (
        <div className="role-description flex-grow-0gap-[12px] order-none flex h-56 w-[555px] flex-none flex-col items-start p-0">
            <p className="title order-none mb-[10px] flex h-6 w-fit flex-none flex-grow-0 items-center text-base font-medium not-italic leading-6 text-gray-900">
                Role Description
            </p>
            <textarea
                defaultValue={initialDescription}
                className="description order-1 flex h-48 w-[555px] flex-none flex-grow-0 resize-none flex-row items-start gap-[10px] rounded-[12px] border-[1px] border-solid border-[#793EF5]  bg-white py-[12px] pr-[12px] pl-[16px]"
                onChange={e =>
                    setCurrentRole({
                        ...currentRole,
                        roleDescription: e.target.value
                    })
                }
            />
        </div>
    );
};

export default RoleDescription;
