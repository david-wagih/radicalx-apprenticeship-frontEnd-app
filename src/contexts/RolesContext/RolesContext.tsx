import { createContext, ReactNode, useState } from 'react';

import { teamRoles } from '../../features/CreatingApprenticeship/Controller';
import { teamRole } from '../../features/CreatingApprenticeship/Controller';

export const RolesContext = createContext({});
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
