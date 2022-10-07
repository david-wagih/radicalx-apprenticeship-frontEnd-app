import { FC } from 'react';

import NavBar from '../../components/NavBar/NavBar';

import ApprenticeshipCards from './ApprenticeshipCards/ApprenticeshipCards';

const HomePage: FC = () => {
    const titles = ['Frontend Developer', 'Backend Developer', 'DevOps', 'PM '];
    const text = [
        'hello mu name is mohamed and i am a frontend developer from giza egypt i am 22 years ol hello mu name is mohamed and i am a frontend developer from giza egypt i am 22 years ol hello mu name is mohamed and i am a frontend developer from giza egypt i am 22 years ol hello mu name is mohamed and i am a frontend developer from giza egypt i am 22 years ol ',
        'lore ipsum dolor sit amet, consectetur adipiscing elit lore ipsum dolor sit amet, consectetur adipiscing elit',
        'lore ipsum dolor sit amet, consectetur adipiscing elit lore ipsum dolor sit amet, consectetur adipiscing elit',
        'lore ipsum dolor sit amet, consectetur adipiscing elit lore ipsum dolor sit amet, consectetur adipiscing elit'
    ];
    const tags = [
        ['ReactReactRR', 'Typescript', 'Javascript', 'HTML'],
        ['React', 'Typescript', 'Javascript', 'HTML'],
        ['React', 'Typescript', 'Javascript', 'HTML'],
        ['React', 'Typescript', 'Javascript', 'HTML']
    ];

    return (
        <>
            <NavBar />
            <ApprenticeshipCards
                titles={titles}
                descriptions={text}
                tags={tags}
            />
        </>
    );
};

export default HomePage;
