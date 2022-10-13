import { createContext, ReactNode } from 'react';

//NOTE:we can make each team type have different options
interface OptionsContextProps {
    options: {
        roles: string[];
        requiredSkillsOptions: string[];
        complimentarySkillsOptions: string[];
        locations: string[];
    };
}

export const OptionsContext = createContext<OptionsContextProps>(
    {} as OptionsContextProps
);
export const OptionsContextProvider = ({
    children
}: {
    children: ReactNode;
}) => {
    const options = {
        roles: [
            'Developer',
            'Designer',
            'Tester',
            'Project Manager',
            'Business Analyst',
            'Scrum Master',
            'Product Owner'
        ],
        requiredSkillsOptions: [
            'React',
            'Angular',
            'Vue',
            'Node',
            'Express',
            'MongoDB'
        ],
        complimentarySkillsOptions: [
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript',
            'Python',
            'Java'
        ],
        locations: ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow']
    };
    return (
        <OptionsContext.Provider value={{ options }}>
            {children}
        </OptionsContext.Provider>
    );
};
