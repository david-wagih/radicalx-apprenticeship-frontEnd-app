import { FC, useReducer, useState } from 'react';

import CardText from '../../components/FormCard/CardText/CardText';
import FormCard from '../../components/FormCard/FormCard';
import LogoAndTitle from '../../components/FormCard/LogoAndTitle/LogoAndTitle';
import VideoUpload from '../../components/FormCard/VideoUpload/VideoUpload';
import Header from '../../components/Header/Header';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

export enum ActionType {
    ApprenticeshipTitle = 'ApprenticeshipTitle',
    ApprenticeshipLogo = 'ApprenticeshipLogo',
    ApprenticeshipDescription = 'ApprenticeshipDescription',
    CompanyDescription = 'CompanyDescription',
    ApprenticeshipVideo = 'ApprenticeshipVideo'
}

interface State {
    ApprenticeshipTitle: string;
    ApprenticeshipLogo: File | null;
    ApprenticeshipDescription: string;
    CompanyDescription: string;
    ApprenticeshipVideo: File | null;
}

function reducer(
    state: State,
    action: { type: string; payload: string | File | null }
) {
    switch (action.type) {
        case ActionType.ApprenticeshipTitle:
            return { ...state, ApprenticeshipTitle: action.payload as string };
        case ActionType.ApprenticeshipLogo:
            return { ...state, ApprenticeshipLogo: action.payload as File };
        case ActionType.ApprenticeshipDescription:
            return {
                ...state,
                ApprenticeshipDescription: action.payload as string
            };
        case ActionType.CompanyDescription:
            return { ...state, CompanyDescription: action.payload as string };
        case ActionType.ApprenticeshipVideo:
            return { ...state, ApprenticeshipVideo: action.payload as File };
    }
}

const CreatingApprenticeship: FC = () => {
    const initialState = {
        ApprenticeshipTitle: '',
        ApprenticeshipLogo: null,
        ApprenticeshipDescription: '',
        CompanyDescription: ''
    };
    const [formState, dispatch] = useReducer(reducer, initialState);
    const [ApprenticeshipVideo, setApprenticeshipVideo] = useState();
    const [checked, setChecked] = useState([true, true, false, false, false]);
    const keys = [
        'logo-title',
        'company-description',
        'apprenticeship-description',
        'apprenticeship-video'
    ];
    const headers = [
        'Logo & Title',
        'Company Description',
        'Apprenticeship Description',
        'Introduce yourself, your company, and what you are building.'
    ];
    const children = [
        <LogoAndTitle dispatch={dispatch} />,
        <CardText type={ActionType.CompanyDescription} dispatch={dispatch} />,
        <CardText
            type={ActionType.ApprenticeshipDescription}
            dispatch={dispatch}
        />,
        <VideoUpload
            video={ApprenticeshipVideo}
            setVideo={setApprenticeshipVideo}
        />
    ];
    console.log(formState);
    console.log(ApprenticeshipVideo);
    return (
        <div
            className="parent min-h-screen  bg-background-gray
        relative w-[1512px] h-[1963px]
        "
        >
            <Header />
            <ProgressBar checked={checked} />
            <div
                className="cards
           flex flex-col items-start p-0 absolute gap-[20px] isolate w-[770px] h-[1697px] top-[218px] left-[371px]
           "
            >
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
