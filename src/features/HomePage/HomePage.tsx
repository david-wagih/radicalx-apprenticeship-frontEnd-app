import { FC, useContext, useEffect, useState } from 'react';

import ApprenticeshipCards from '../../components/ApprenticeshipCards/ApprenticeshipCards';
import NavBar from '../../components/NavBar/NavBar';
import { UserContext } from '../../Contexts/UserContext/UserContext';

import { getUserApprenticeships } from './Service';
const HomePage: FC = () => {
    const [apprenticeships, setApprenticeships] = useState<[]>([]);
    const { userId } = useContext(UserContext);
    useEffect(() => {
        getUserApprenticeships(userId, setApprenticeships);
    }, []);
    return (
        <>
            <NavBar />
            <ApprenticeshipCards apprenticeships={apprenticeships} />
        </>
    );
};

export default HomePage;
