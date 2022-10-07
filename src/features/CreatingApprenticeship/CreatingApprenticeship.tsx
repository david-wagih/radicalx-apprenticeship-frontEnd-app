import { FC, useReducer, useState } from 'react';

import CardText from '../../components/FormCard/CardText/CardText';
import FormCard from '../../components/FormCard/FormCard';
import LogoAndTitle from '../../components/FormCard/LogoAndTitle/LogoAndTitle';
import VideoUpload from '../../components/FormCard/VideoUpload/VideoUpload';
import Header from '../../components/Header/Header';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import AddAdmin from '../../components/FormCard/AddAdmin/AddAdmin';

import { ActionType, initialState, reducer } from './Controller';

const CreatingApprenticeship: FC = () => {
    const [formState, dispatch] = useReducer(reducer, initialState);
    const keys = [
        'logo-title',
        'company-description',
        'apprenticeship-description',
        'apprenticeship-video',
        'Team Admin'
    ];
    const headers = [
        'Logo & Title',
        'Company Description',
        'Apprenticeship Description',
        'Introduce yourself, your company, and what you are building.',
        'Team Admin'
    ];
    const children = [
        <LogoAndTitle dispatch={dispatch} />,
        <CardText type={ActionType.CompanyDescription} dispatch={dispatch} />,
        <CardText
            type={ActionType.ApprenticeshipDescription}
            dispatch={dispatch}
        />,
        <VideoUpload dispatch={dispatch} />,
        <AddAdmin></AddAdmin>
    ];
    return (
        <div
            className="parent relative  h-[1963px]
        min-h-screen w-[1512px] bg-background-gray
        "
        >
            <Header />
            <ProgressBar
                checked={[
                    formState.checked[0].reduce(
                        (a: boolean, b: boolean) => a && b
                    ),
                    formState.checked[1],
                    formState.checked[2],
                    formState.checked[3],
                    formState.checked[4],
                    formState.checked[5]
                ]}
            />
            <div
                className="cards
           absolute top-[218px] left-[371px] isolate flex h-[1697px] w-[770px] flex-col items-start gap-[20px] p-0
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
