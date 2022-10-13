import { createContext, ReactNode, useState } from 'react';

import { teamRoles } from '../../features/CreatingApprenticeship/Controller';
import { teamRole } from '../../features/CreatingApprenticeship/Controller';

interface RolesContextProps {
    neededRoles: teamRoles;
    setNeededRoles: (roles: teamRoles) => void;
    showModal: boolean;
    setShowModal: (show: boolean) => void;
    initialValues: teamRole;
    setInitialValues: (role: teamRole) => void;
}

export const RolesContext = createContext<RolesContextProps>(
    {} as RolesContextProps
);
export const RolesContextProvider = ({ children }: { children: ReactNode }) => {
    const [neededRoles, setNeededRoles] = useState<teamRoles>([]);

    const [showModal, setShowModal] = useState(false);

    const [initialValues, setInitialValues] = useState<teamRole>({
        roleName: '',
        roleDescription: '',
        requiredSkills: [],
        complimentarySkills: [],
        minHours: '',
        locationPreferences: []
    });

    return (
        <RolesContext.Provider
            value={{
                neededRoles,
                setNeededRoles,
                showModal,
                setShowModal,
                initialValues,
                setInitialValues
            }}
        >
            {children}
        </RolesContext.Provider>
    );
};
