import { FC, useContext, useEffect } from 'react';

import { RolesContext } from '../../Contexts/RolesContext/RolesContext';
import AddRoleForm from '../../features/CreatingApprenticeship/AddRoleForm/AddRoleForm';
import { action } from '../../features/CreatingApprenticeship/Controller';
import Modal from '../Modal/Modal';

import AddRoleButton from './AddRoleButton/AddRoleButton';
import RoleCards from './RoleCards/RoleCards';

interface TeamRolesProps {
    dispatch: (action: action) => void;
}

const TeamRoles: FC<TeamRolesProps> = ({ dispatch }) => {
    const { neededRoles, showModal } = useContext(RolesContext);
    useEffect(() => {
        dispatch({ type: 'teamRoles', payload: neededRoles });
    }, [neededRoles]);
    return (
        <div className="team-roles">
            <AddRoleButton />

            {showModal && (
                <Modal>
                    <AddRoleForm />
                </Modal>
            )}
            {neededRoles && <RoleCards />}
        </div>
    );
};

export default TeamRoles;
