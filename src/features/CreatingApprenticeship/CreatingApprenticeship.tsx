import { FC, useReducer } from 'react';

import CardText from '../../components/FormCard/CardText/CardText';
import FormCard from '../../components/FormCard/FormCard';
import LogoAndTitle from '../../components/FormCard/LogoAndTitle/LogoAndTitle';
import VideoUpload from '../../components/FormCard/VideoUpload/VideoUpload';
import Header from '../../components/Header/Header';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import TeamRoles from '../../components/TeamRoles/TeamRoles';

import { action, ActionType, initialState, reducer, State } from './Controller';
const roles = [
    'Developer',
    'Designer',
    'Tester',
    'Project Manager',
    'Business Analyst',
    'Scrum Master',
    'Product Owner'
];
const requiredSkillsOptions = [
    'React',
    'Angular',
    'Vue',
    'Node',
    'Express',
    'MongoDB'
];
const compSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Python',
    'Java'
];
const locations = ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow'];
const CreatingApprenticeship: FC = () => {
    const [formState, dispatch] = useReducer<React.Reducer<State, action>>(
        reducer as React.Reducer<State, action>,
        initialState
    );
    console.log('formState:', formState);
    const keys = [
        'logo-title',
        'company-description',
        'apprenticeship-description',
        'apprenticeship-video',
        'add-team-member',
        'team-roles',
        'team-admin',
        'timeline'
    ];
    const headers = [
        'Logo & Title',
        'Company Description',
        'Apprenticeship Description',
        'Introduce yourself, your company, and what you are building.',
        'Team Type',
        'Team Roles',
        'Team Admin',
        'Timeline'
    ];
    const children = [
        <LogoAndTitle dispatch={dispatch} />,
        <CardText type={ActionType.companyDescription} dispatch={dispatch} />,
        <CardText
            type={ActionType.apprenticeshipDescription}
            dispatch={dispatch}
        />,
        <VideoUpload
            dispatch={dispatch}
            companyVideo={formState.companyVideo}
        />,
        <></>,
        <TeamRoles
            dispatch={dispatch}
            roles={roles}
            requiredSkillsOptions={requiredSkillsOptions}
            compSkills={compSkills}
            locations={locations}
        />,
        <></>
    ];
    return (
        <div className="parent min-h-screen bg-background-gray relative w-[1512px] h-[1963px] ">
            <Header
                readyToPublish={formState.checked
                    .flat()
                    .reduce((a: boolean, b: boolean) => a && b)}
            />
            <ProgressBar
                checked={[
                    formState.checked[0].reduce(
                        (a: boolean, b: boolean) => a && b
                    ),
                    formState.checked[1],
                    formState.checked[2],
                    formState.checked[3],
                    formState.checked[4]
                ]}
            />
            <div className="cards flex flex-col items-start p-0 absolute gap-[20px] isolate w-[800px] h-[1697px] top-[218px] left-[371px]">
                {headers.map((header, index) => (
                    <FormCard
                        header={header}
                        myKey={keys[index]}
                        key={keys[index]}
                        children={children[index]}
                    />
                ))}
            </div>
        </div>
    );
};

export default CreatingApprenticeship;
