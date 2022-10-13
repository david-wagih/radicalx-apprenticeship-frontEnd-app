import { FC, useContext } from 'react';
import uuid from 'react-uuid';

import { RolesContext } from '../../../Contexts/RolesContext/RolesContext';

import RoleCard from './RoleCard/RoleCard';

const RoleCards: FC = () => {
    const { neededRoles } = useContext(RolesContext);
    return (
        <div className="cards w-[770px] h-fit grid grid-cols-2 gap-y-4">
            {neededRoles.map((neededRole, index) => (
                <RoleCard
                    key={uuid()}
                    myKey={uuid()}
                    title={neededRole.roleName}
                    paragraph={neededRole.roleDescription}
                    tags={neededRole.requiredSkills}
                    index={index}
                />
            ))}
        </div>
    );
};

export default RoleCards;
