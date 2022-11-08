import { FC, useContext, useEffect, useState } from 'react';

import ApprenticeshipCards from '../../components/ApprenticeshipCards/ApprenticeshipCards';
import NavBar from '../../components/NavBar/NavBar';
import { UserContext } from '../../Contexts/UserContext/UserContext';
import { apprenticeship } from '../CreatingApprenticeship/Controller';

import { getUserApprenticeships } from './Service';
const HomePage: FC = () => {
    const [apprenticeships, setApprenticeships] = useState<[apprenticeship]>(
        []
    );
    const { userCredentials } = useContext(UserContext);
    useEffect(() => {
        getUserApprenticeships(userCredentials, setApprenticeships);
    }, [apprenticeships]);
    return (
        <>
            <NavBar />
            <ApprenticeshipCards
                apprenticeships={apprenticeships.map(apprenticeship => ({
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
