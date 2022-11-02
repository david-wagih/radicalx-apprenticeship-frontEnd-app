import { createContext, ReactNode, useState } from 'react';

//NOTE:we can make each team type have different options

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
    return (
        <UserContext.Provider value={{ userCredentials, setUserCredentials }}>
            {children}
        </UserContext.Provider>
    );
};
