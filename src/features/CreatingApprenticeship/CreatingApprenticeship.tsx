import { FC, useReducer } from 'react';

import AddAdmin from '../../components/FormCard/AddTeamAdmin/AddAdmin/AddAdmin';
import CardText from '../../components/FormCard/CardText/CardText';
import FormCard from '../../components/FormCard/FormCard';
import LogoAndTitle from '../../components/FormCard/LogoAndTitle/LogoAndTitle';
import VideoUpload from '../../components/FormCard/VideoUpload/VideoUpload';
import Header from '../../components/Header/Header';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import TeamRoles from '../../components/TeamRoles/TeamRoles';

import { action, ActionType, initialState, reducer, State } from './Controller';
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
        'team-roles',
        'team-admin'
    ];
    const headers = [
        'Logo & Title',
        'Company Description',
        'Apprenticeship Description',
        'Introduce yourself, your company, and what you are building.',
        'Team Roles',
        'Team Admin'
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
        <TeamRoles dispatch={dispatch} />,
        <AddAdmin dispatch={dispatch} />,
        <></>
    ];
    return (
        <div className="parent relative h-[1963px] min-h-screen w-[1512px] bg-background-gray ">
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
            <div className="cards absolute top-[218px] left-[371px] isolate flex h-[1697px] w-[800px] flex-col items-start gap-[20px] p-0">
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
