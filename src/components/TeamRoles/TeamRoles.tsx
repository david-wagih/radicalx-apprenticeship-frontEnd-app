import { FC, useEffect, useState } from 'react';

import AddRoleForm from '../../features/AddRoleForm/AddRoleForm';
import { action } from '../../features/CreatingApprenticeship/Controller';
import { teamRoles } from '../../features/CreatingApprenticeship/Controller';
import { teamRole } from '../../features/CreatingApprenticeship/Controller';
import Modal from '../Modal/Modal';

import AddRoleButton from './AddRoleButton/AddRoleButton';
import RoleCards from './RoleCards/RoleCards';

interface TeamRolesProps {
    dispatch: (action: action) => void;
    roles: string[];
    requiredSkillsOptions: string[];
    compSkills: string[];
    Description?: string;
    minHours?: string;
    locations: string[];
}

const TeamRoles: FC<TeamRolesProps> = ({
    dispatch,
    roles,
    requiredSkillsOptions,
    compSkills,
    locations
}) => {
    const [neededRoles, setNeededRoles] = useState<teamRoles>([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        dispatch({ type: 'teamRoles', payload: neededRoles });
    }, [neededRoles]);

    const [initialValues, setInitialValues] = useState<teamRole>({
        roleName: '',
        roleDescription: '',
        requiredSkills: [],
        complimentarySkills: [],
        minHours: '',
        locationPreferences: []
    });

    return (
        <div className="team-roles">
            <AddRoleButton
                setShowModal={setShowModal}
                setInitialValues={setInitialValues}
            />

            {showModal && (
                <Modal>
                    <AddRoleForm
                        roles={roles}
                        requiredSkillsOptions={requiredSkillsOptions}
                        compSkillsOptions={compSkills}
                        locations={locations}
                        setShowModal={setShowModal}
                        setNeededRoles={setNeededRoles}
                        neededRoles={neededRoles}
                        initialValues={initialValues}
                    />
                </Modal>
            )}
            {neededRoles && (
                <RoleCards
                    neededRoles={neededRoles}
                    setNeededRoles={setNeededRoles}
                    setInitialValues={setInitialValues}
                    setShowModal={setShowModal}
                />
            )}
        </div>
    );
};

export default TeamRoles;
