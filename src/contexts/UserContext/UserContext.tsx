import { createContext, ReactNode, useState } from 'react';

import { apprenticeship } from '../../features/CreatingApprenticeship/Controller';

interface UserContextProps {
    userCredentials: {
        userId: string;
        customToken: string;
    };
    setUserCredentials: React.Dispatch<
        React.SetStateAction<{
            userId: string;
            customToken: string;
        }>
    >;
    userApprenticeships: apprenticeship[];
    setUserApprenticeships: React.Dispatch<
        React.SetStateAction<apprenticeship[]>
    >;
}

export const UserContext = createContext<UserContextProps>(
    {} as UserContextProps
);
export const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [userCredentials, setUserCredentials] = useState(
        localStorage.getItem('customToken')
            ? {
                  userId: localStorage.getItem('userId') || '',
                  customToken: localStorage.getItem('customToken') || ''
              }
            : {
                  userId: '',
                  customToken: ''
              }
    );
    const [userApprenticeships, setUserApprenticeships] = useState<
        apprenticeship[]
    >(
        localStorage.getItem('apprenticeships')
            ? JSON.parse(localStorage.getItem('apprenticeships') || '')
            : []
    );
    return (
        <UserContext.Provider
            value={{
                userCredentials,
                setUserCredentials,
                userApprenticeships,
                setUserApprenticeships
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
