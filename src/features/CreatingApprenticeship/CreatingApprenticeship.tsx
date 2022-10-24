import { FC, useContext, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';

import AddAdmin from '../../components/FormCard/AddTeamAdmin/AddAdmin/AddAdmin';
import CardText from '../../components/FormCard/CardText/CardText';
import FormCard from '../../components/FormCard/FormCard';
import LogoAndTitle from '../../components/FormCard/LogoAndTitle/LogoAndTitle';
import TeamType from '../../components/FormCard/TeamType/TeamType';
import TimeLine from '../../components/FormCard/TimeLine/TimeLine';
import VideoUpload from '../../components/FormCard/VideoUpload/VideoUpload';
import Header from '../../components/Header/Header';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import TeamRoles from '../../components/TeamRoles/TeamRoles';

import { action, initialState, reducer, State } from './Controller';

const keys = [
    'logo-title',
    'company-description',
    'apprenticeship-description',
    'apprenticeship-video',
    'team-types',
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

const CreatingApprenticeship: FC = () => {
    const [formState, dispatch] = useReducer<React.Reducer<State, action>>(
        reducer as React.Reducer<State, action>,
        initialState
    );
    console.log('formState', formState);

    const children = [
        <LogoAndTitle
            dispatch={dispatch}
            logo={formState.companyLogo as unknown as string}
            title={formState.apprenticeshipTitle}
            placeholder="Enter Apprenticeship Title"
        />,
        <CardText
            type="companyDescription"
            dispatch={dispatch}
            text={formState.companyDescription}
            placeholder="Tell us about your company"
            name="companyDescription"
        />,
        <CardText
            type="apprenticeshipDescription"
            dispatch={dispatch}
            text={formState.apprenticeshipDescription}
            placeholder="Tell us about your apprenticeship"
            name="apprenticeshipDescription"
        />,
        <VideoUpload
            dispatch={dispatch}
            //FIXME: how to show the user the video they uploaded?
            companyVideo={
                formState.companyVideo instanceof File
                    ? formState.companyVideo
                    : null
            }
        />,
        <TeamType dispatch={dispatch} teamType={formState.teamType} />,
        <TeamRoles dispatch={dispatch} />,
        <AddAdmin
            dispatch={dispatch}
            alreadyExcitingAdmins={formState.teamAdmins}
        />,
        <TimeLine
            dispatch={dispatch}
            alreadyExcitingTimeline={formState.timeline || null}
        />
    ];

    const { id } = useParams();

    useEffect(() => {
        (async function getData() {
            if (id !== undefined) {
                const response = await fetch(
                    `http://localhost:3000/full_apprenticeship_data?id=${id}`
                );
                let data = await response.json();
                data = data[0].apprenticeship_data;
                dispatch({ type: 'fillData', payload: data });
            }
        })();
    }, []);

    return (
        <div className="parent h-full w-full mb-2">
            <Header
                readyToPublish={formState.checked
                    .flat()
                    .reduce((a: boolean, b: boolean) => a && b)}
                formData={formState}
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
