import { FC, useState } from 'react';

import AddRoleForm from '../../features/AddRoleForm/AddRoleForm';
import Modal from '../Modal/Modal';

import AddRoleButton from './AddRoleButton/AddRoleButton';
interface TeamRolesProps {}

const TeamRoles: FC<TeamRolesProps> = () => {
    const [showModal, setShowModal] = useState(false);
    console.log('showModal', showModal);
    return (
        <>
            <AddRoleButton setShowModal={setShowModal} />
            {showModal && <Modal></Modal>}
        </>
    );
};

export default TeamRoles;
