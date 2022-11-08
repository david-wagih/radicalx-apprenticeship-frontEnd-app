import { FC, useContext, useEffect, useState } from 'react';

import ApprenticeshipCards from '../../components/ApprenticeshipCards/ApprenticeshipCards';
import NavBar from '../../components/NavBar/NavBar';
import { UserContext } from '../../Contexts/UserContext/UserContext';

import { getUserApprenticeships } from './Service';
const HomePage: FC = () => {
    const [apprenticeships, setApprenticeships] = useState<[]>([]);
    const { userCredentials } = useContext(UserContext);
    useEffect(() => {
        getUserApprenticeships(userCredentials, setApprenticeships);
    }, []);
    return (
        <>
            <NavBar />
            <ApprenticeshipCards
                apprenticeships={apprenticeships.map(apprenticeship => ({
                    apprenticeshipId: apprenticeship.id,
                    title: apprenticeship.apprenticeshipTitle,
                    description: apprenticeship.apprenticeshipDescription,
                    tags: apprenticeship.teamRoles.map(role => role.roleName)
                }))}
            />
        </>
    );
};

export default HomePage;
