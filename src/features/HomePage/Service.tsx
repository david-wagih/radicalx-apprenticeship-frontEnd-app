import { apprenticeship } from '../CreatingApprenticeship/Controller';

export const getUserApprenticeships = async (
    userCredentials: {
        userId: string;
        customToken: string;
    },
    setUserApprenticeships: React.Dispatch<
        React.SetStateAction<apprenticeship[]>
    >
) => {
    const response = await fetch(
        `http://localhost:4000/data/${userCredentials.userId}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
                Authorization: `Bearer ${userCredentials.customToken}`
            }
        }
    );
    if (response.ok) {
        const data = await response.json();
        console.log('data', data);
        const apprenticeships = data.map(
            (apprenticeship: {
                apprenticeshipID: string;
                apprenticeshipData: apprenticeship;
            }) => ({
                ...apprenticeship.apprenticeshipData,
                apprenticeshipId: apprenticeship.apprenticeshipID
            })
        );
        localStorage.setItem(
            'apprenticeships',
            JSON.stringify(apprenticeships)
        );
        setUserApprenticeships(apprenticeships);
    }
};
