import { FC } from 'react';

import NavBar from '../../components/NavBar/NavBar';

import ApprenticeshipCards from './ApprenticeshipCards/ApprenticeshipCards';

const HomePage: FC = () => {
    const titles = ['Frontend Developer', 'Backend Developer', 'DevOps', 'PM '];
    const text = [
        'lore ipsum dolor sit amet, consectetur adipiscing elit lore ipsum dolor sit amet, consectetur adipiscing elit',
        'lore ipsum dolor sit amet, consectetur adipiscing elit lore ipsum dolor sit amet, consectetur adipiscing elit',
        'lore ipsum dolor sit amet, consectetur adipiscing elit lore ipsum dolor sit amet, consectetur adipiscing elit',
        'lore ipsum dolor sit amet, consectetur adipiscing elit lore ipsum dolor sit amet, consectetur adipiscing elit'
    ];
    const tags = [['React', 'Typescript', 'Javascript', 'HTML']];
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
