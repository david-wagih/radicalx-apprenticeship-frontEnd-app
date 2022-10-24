import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ApprenticeshipCards from '../../components/ApprenticeshipCards/ApprenticeshipCards';
import NavBar from '../../components/NavBar/NavBar';

import { getUserApprenticeships } from './Service';
const HomePage: FC = () => {
    const [apprenticeships, setApprenticeships] = useState<[]>([]);
    //FIXME - this is a temporary solution to get the user id
    const user_id = 3401597851;
    useEffect(() => {
        getUserApprenticeships(user_id, setApprenticeships);
    }, []);
    return (
        <>
            <NavBar />
            <ApprenticeshipCards apprenticeships={apprenticeships} />
        </>
    );
};

export default HomePage;
