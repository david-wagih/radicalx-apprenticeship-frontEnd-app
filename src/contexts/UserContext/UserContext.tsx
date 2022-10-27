import { createContext, ReactNode, useState } from 'react';

//NOTE:we can make each team type have different options

interface UserContextProps {
    userId: number;
    setUserId: (userId: number) => void;
}

export const UserContext = createContext<UserContextProps>(
    {} as UserContextProps
);
export const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [userId, setUserId] = useState<number>(0);
    return (
        <UserContext.Provider value={{ userId, setUserId }}>
            {children}
        </UserContext.Provider>
    );
};
