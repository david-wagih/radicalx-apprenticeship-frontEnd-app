import { FC, useContext, useEffect, useReducer, useState } from 'react';
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
import { UserContext } from '../../Contexts/UserContext/UserContext';

import { action, initialState, reducer, State } from './Controller';
import { getApprenticeshipData } from './Service';

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
    const [dataForEdit, setDataForEdit] = useState<State | null>(null);
    const children = [
        <LogoAndTitle
            dispatch={dispatch}
            logo={formState.companyLogo as unknown as string}
            title={
                dataForEdit?.apprenticeshipTitle ||
                formState.apprenticeshipTitle
            }
            placeholder="Enter Apprenticeship Title"
        />,
        <CardText
            type="companyDescription"
            dispatch={dispatch}
            text={
                dataForEdit?.companyDescription || formState.companyDescription
            }
            placeholder="Tell us about your company"
            name="companyDescription"
        />,
        <CardText
            type="apprenticeshipDescription"
            dispatch={dispatch}
            text={
                dataForEdit?.apprenticeshipDescription ||
                formState.apprenticeshipDescription
            }
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
        <TeamType
            dispatch={dispatch}
            teamType={dataForEdit?.teamType || formState.teamType}
        />,
        <TeamRoles dispatch={dispatch} />,
        <AddAdmin
            dispatch={dispatch}
            alreadyExcitingAdmins={
                dataForEdit?.teamAdmins || formState.teamAdmins
            }
        />,
        <TimeLine
            dispatch={dispatch}
            alreadyExcitingTimeline={
                dataForEdit?.timeline || formState.timeline
            }
        />
    ];
    const { id } = useParams();
    const { userCredentials } = useContext(UserContext);
    useEffect(() => {
        getApprenticeshipData(setDataForEdit, userCredentials, id as string);
    }, []);

    return (
        <div className="parent h-full w-full mb-2">
            <Header
                readyToPublish={formState.checked
                    .flat()
                    .reduce((a: boolean, b: boolean) => a && b)}
                formData={formState}
                id={id}
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
