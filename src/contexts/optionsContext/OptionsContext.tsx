import { createContext } from 'react';

export const options = {
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
    compSkills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'Java'],
    locations: ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow']
};

export const OptionsContext = createContext();
