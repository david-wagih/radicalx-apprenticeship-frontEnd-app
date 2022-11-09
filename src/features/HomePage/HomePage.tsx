import { FC, useContext, useEffect } from 'react';

import ApprenticeshipCards from '../../components/ApprenticeshipCards/ApprenticeshipCards';
import NavBar from '../../components/NavBar/NavBar';
import { UserContext } from '../../Contexts/UserContext/UserContext';

import { getUserApprenticeships } from './Service';
const HomePage: FC = () => {
    const { userCredentials, userApprenticeships, setUserApprenticeships } =
        useContext(UserContext);

    useEffect(() => {
        getUserApprenticeships(userCredentials, setUserApprenticeships);
    }, []);

    return (
        <>
            <NavBar />
            <ApprenticeshipCards
                apprenticeships={userApprenticeships.map(apprenticeship => ({
                    apprenticeshipId: apprenticeship.apprenticeshipId,
                    title: apprenticeship.apprenticeshipTitle,
                    description: apprenticeship.apprenticeshipDescription,
                    tags: apprenticeship.teamRoles.map(role => role.roleName)
                }))}
            />
        </>
    );
};

export default HomePage;
