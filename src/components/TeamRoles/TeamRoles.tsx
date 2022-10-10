import { FC, useState } from 'react';

import AddRoleForm from '../../features/AddRoleForm/AddRoleForm';
import { teamRoles } from '../../features/CreatingApprenticeship/Controller';
import RoleCards from '../Cards/RoleCards/RoleCards';
import Modal from '../Modal/Modal';

import AddRoleButton from './AddRoleButton/AddRoleButton';

interface TeamRolesProps {
    dispatch: (action: { type: string; payload: teamRoles | null }) => void;
    roles: string[];
    reqSkills: string[];
    compSkills: string[];
    Description?: string;
    minHours?: number;
    location: string[];
}

const TeamRoles: FC<TeamRolesProps> = ({
    roles = [
        'Developer',
        'Designer',
        'Tester',
        'Project Manager',
        'Business Analyst',
        'Scrum Master',
        'Product Owner'
    ],
    Description = 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet',
    reqSkills = ['React', 'Angular', 'Vue', 'Node', 'Express', 'MongoDB'],
    compSkills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'Java'],
    minHours = 20,
    location = ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow']
}) => {
    const [showModal, setShowModal] = useState(false);
    const teamRoles = [
        {
            id: 3919869831,
            title: 'Mobile App Developer',
            description:
                "Promettant long qu'elle hélas mal la sur pourquoi la. Flanc quel un la et, fatale.",
            tags: ['Flutter', 'Dart', 'React Native', 'Android']
        },
        {
            id: 1942767747,
            title: 'Mobile App Developer',
            description:
                'Lasi sxancon mi tiel bonsxance kaj koro vestajxon. Pli zuron.',
            tags: ['Flutter', 'Dart', 'React Native', 'Android']
        }
    ];
    return (
        <div className="team-roles">
            <AddRoleButton setShowModal={setShowModal} />
            {showModal && (
                <Modal>
                    <AddRoleForm
                        dispatch={dispatch}
                        setShowModal={setShowModal}
                        roles={roles}
                        Description={Description}
                        reqSkills={reqSkills}
                        compSkills={compSkills}
                        minHours={minHours}
                        location={location}
                    />
                </Modal>
            )}
            {TeamRoles && <RoleCards apprenticeships={teamRoles} />}
        </div>
    );
};

export default TeamRoles;
